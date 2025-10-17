import os
import uuid
from TTS.api import TTS

# Load Coqui TTS model once
tts = TTS(model_name="tts_models/en/ljspeech/glow-tts", progress_bar=False, gpu=False)

async def generate_voice(text: str) -> str:
    filename = f"voice_{uuid.uuid4().hex}.wav"
    filepath = os.path.join("audio", filename)

    os.makedirs("audio", exist_ok=True)

    # Generate audio
    tts.tts_to_file(text=text, file_path=filepath)

    return filepath
