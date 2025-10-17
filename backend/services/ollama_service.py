import httpx

OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL = "llama3"  # Change if you use a different model

async def get_ollama_response(prompt: str) -> str:
    async with httpx.AsyncClient(timeout=120.0) as client:
        response = await client.post(OLLAMA_URL, json={"model": MODEL, "prompt": prompt})
        response.raise_for_status()
        
        # Ollama streams response → get full text
        full_text = ""
        for line in response.text.splitlines():
            if line.strip():
                try:
                    data = response.json()
                    full_text += data.get("response", "")
                except:
                    pass
        return full_text.strip()
