const chatContainer = document.querySelector(".msger-chat");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("resultsList");

// Conversations array
const conversations = [
  {
    question: "what color is the sky",
    answer: "The color of the sky is sometimes blue, but depends on other things.",
    keywords: ["sky color"]
  },
  // Add more conversations here
];

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = searchInput.value;

  // Create user message element
  const userMessage = createUserMessage(query);

  // Add user message to chat container
  chatContainer.appendChild(userMessage);

  // Scroll to bottom of chat container
  chatContainer.scrollTop = chatContainer.scrollHeight;

  // Check if user input matches a conversation
  const conversation = conversations.find((conversation) =>
    conversation.keywords.some((keyword) => query.includes(keyword))
  );

  if (conversation) {
    // Create bot message element with answer
    const botMessage = createBotMessage(conversation.answer);

    // Add bot message to chat container
    chatContainer.appendChild(botMessage);
  } else if (/^[0-9+\-*/().\s]*\d+[0-9+\-*/().\s]*$/.test(query)) {
    // Remove non-math characters from input
    const mathInput = query.replace(/[^\d+\-*/().\s]/g, '');

    // Evaluate math expression
    const result = eval(mathInput);

    // Create bot message element with result
    const mathBotMessage = createBotMessage(`The result is ${result}.`);

    // Add bot message to chat container
    chatContainer.appendChild(mathBotMessage);
  } else if (query.toLowerCase().includes("what is the time")) {
    // Get current time
    const now = new Date();
    const timeString = now.toLocaleTimeString();

    // Create bot message element with current time
    const timeBotMessage = createBotMessage(`The current time is ${timeString}.`);

    // Add bot message to chat container
    chatContainer.appendChild(timeBotMessage);
  } else {
    searchWikipedia(query);
  }

  // Clear search input
  searchInput.value = '';
});

function createUserMessage(message) {
  const userMessage = document.createElement("div");
  userMessage.classList.add("msg", "right-msg");
  userMessage.innerHTML = `
    <div class="msg-bubble">
      <div class="msg-text">${message}</div>
      <div class="msg-info">
        <div class="msg-info-time">${getTime()}</div>
      </div>
    </div>
  `;
  return userMessage;
}

function createBotMessage(message) {
  const botMessage = document.createElement("div");
  botMessage.classList.add("msg", "left-msg");
  botMessage.innerHTML = `
    <div class="msg-img" style="background-image: url(robot.png)"></div>
    <div class="msg-bubble">
      <div class="msg-text">${message}</div>
      <div class="msg-info">
      <div class="msg-info-name">Coderider</div>
        <div class="msg-info-time">${getTime()}</div>
      </div>
    </div>
  `;
  return botMessage;

}




function createWikipediaBotMessage() {
  const botMessage = document.createElement("div");
  botMessage.classList.add("msg", "left-msg");
  botMessage.innerHTML = `
    <div class="msg-img" style="background-image: url(robot.png)"></div>
    <div class="msg-bubble">
      <div class="wikipedia-results"></div> <!-- Container for resultsList -->
      <div class="msg-info">
        <div class="msg-info-time">${getTime()}</div>
      </div>
    </div>
  `;
  return botMessage;
}

function displayResult(result) {
  resultsList.innerHTML = '';
  const resultItem = document.createElement('div');
  resultItem.classList.add('result-item');
  const title = document.createElement('h3');
  title.innerHTML = result.title;
  const snippet = document.createElement('p');
  snippet.innerHTML = result.snippet;
  const link = document.createElement('a');
  link.href = `https://en.wikipedia.org/wiki/${result.title}`;
  link.target = '_blank';
  link.textContent = 'Read more';
  resultItem.appendChild(title);
  resultItem.appendChild(snippet);
  resultItem.appendChild(link);
  resultsList.appendChild(resultItem);

  // Create bot message element with Wikipedia search results
  const wikipediaBotMessage = createWikipediaBotMessage();

  // Append resultsList to the Wikipedia bot message
  const wikipediaResults = wikipediaBotMessage.querySelector('.wikipedia-results');
  wikipediaResults.appendChild(resultsList);

  // Add bot message to chat container
  chatContainer.appendChild(wikipediaBotMessage);

  // Scroll to bottom of chat container
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function searchWikipedia(query) {
  let searchQuery = query;

  // Extract search query from input if it matches "who is X", "where is X", or "when was X" pattern
  const match = query.match(/^(who|where|when)\s+is\s+|^(who|where|when)\s+was\s+/i);
  if (match) {
    searchQuery = query.slice(match[0].length);
  }

  const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${searchQuery}&utf8=1&origin=*`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const result = data.query.search[0];
      displayResult(result);
    })
    .catch(error => console.log(error));
}

function getTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
}
