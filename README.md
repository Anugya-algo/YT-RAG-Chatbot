#  YT-Chat-Saarthi — Chat With Any YouTube Video Using RAG

YT-Chat-Saarthi is an AI-powered Chrome Extension backed by a Retrieval-Augmented Generation (RAG) pipeline built using **LangChain**, **FAISS**, and **LLMs from Together.ai/Cohere**. It enables users to **chat with YouTube videos** in real-time by extracting transcripts, generating relevant answers, and presenting responses in a conversational format.

---

##  Features

-  Extracts YouTube video transcripts automatically.
-  Uses **LangChain** and **FAISS** for semantic search.
-  Supports **Cohere** or **Together.ai** for answering queries.
-  Real-time interaction with any YouTube video.
-  Works as a **Chrome Extension**.
-  Hosted backend with Flask API.

---

##  Tech Stack

| Layer         | Tools Used                                 |
|---------------|---------------------------------------------|
| Frontend      | HTML, CSS, JavaScript (Chrome Extension)   |
| Backend       | Python, Flask, LangChain                   |
| Embeddings    | CohereEmbeddings or other supported models |
| LLM           | Together.ai or Cohere                      |
| Vector Store  | FAISS                                      |
| Others        | YouTubeTranscriptAPI, dotenv               |

---

##  Example Use Case

-  **Watching a tech tutorial but missed something?**  
  Ask: _"What is the purpose of the function explained at 05:30?"_

-  **Watching a lecture?**  
  Ask: _"Summarize the main concept from this video."_

---

##  Security

- Your API keys are managed through `.env` and never exposed to the frontend.
- Make sure to rotate and regenerate any token you’ve exposed accidentally.

---

## Credits

- Developed by **Anugya Saxena**
- Built using **LangChain**, **Cohere**, and **Together.ai**

