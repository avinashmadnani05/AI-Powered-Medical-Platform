import os
import httpx

USE_OLLAMA = os.getenv("USE_OLLAMA", "true").lower() == "true"

# For OpenAI (if needed)
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

async def generate_reply(query: str) -> str:
    """
    Generate a reply using Ollama (local) or OpenAI API.
    """
    if USE_OLLAMA:
        return await _generate_with_ollama(query)
    else:
        return await _generate_with_openai(query)


async def _generate_with_ollama(query: str) -> str:
    """
    Call local Ollama server (default: http://localhost:11434).
    Make sure you have Ollama installed & model pulled.
    Example: ollama pull llama3
    """
    try:
        async with httpx.AsyncClient() as client:
            response = await client.post(
                "http://localhost:11434/api/generate",
                json={"model": "llama3", "prompt": query},
                timeout=60.0,
            )
            response.raise_for_status()
            data = response.json()
            return data.get("response", "⚠️ No response from Ollama.")
    except Exception as e:
        return f"❌ Ollama error: {str(e)}"


async def _generate_with_openai(query: str) -> str:
    """
    Call OpenAI GPT model if API key is available.
    """
    try:
        import openai
        openai.api_key = OPENAI_API_KEY

        completion = await openai.ChatCompletion.acreate(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": query}],
        )
        return completion.choices[0].message["content"].strip()
    except Exception as e:
        return f"❌ OpenAI error: {str(e)}"
