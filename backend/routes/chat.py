from fastapi import APIRouter, HTTPException
from services.ollama_service import get_ollama_response
from services.tts_service import generate_voice

router = APIRouter()

@router.post("/text")
async def chat_with_ai(query: dict):
    try:
        user_message = query.get("message")
        if not user_message:
            raise HTTPException(status_code=400, detail="Message is required")

        response = await get_ollama_response(user_message)
        return {"response": response}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/voice")
async def chat_with_voice(query: dict):
    try:
        user_message = query.get("message")
        if not user_message:
            raise HTTPException(status_code=400, detail="Message is required")

        # Get AI response
        response = await get_ollama_response(user_message)

        # Generate speech from AI response
        audio_path = await generate_voice(response)

        return {
            "response": response,
            "audio_file": audio_path  # Path to saved audio file
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
