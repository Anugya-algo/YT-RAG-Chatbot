document.getElementById("sendBtn").addEventListener("click", async () => {
  const input = document.getElementById("userInput").value;
  const messages = document.getElementById("messages");
  messages.innerHTML += `<div><b>You:</b> ${input}</div>`;

  // Get current YouTube video ID
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const urlParams = new URLSearchParams(new URL(tab.url).search);
  const videoId = urlParams.get("v");

  // Send to backend (your ngrok or Colab URL)
  const backendUrl = "https://YOUR_NGROK_URL/chat";  // Change this

  const response = await fetch(backendUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query: input, video_id: videoId })
  });

  const data = await response.json();
  messages.innerHTML += `<div><b>Bot:</b> ${data.answer}</div>`;
  document.getElementById("userInput").value = "";
});
