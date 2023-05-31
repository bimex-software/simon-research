const chatContainer = document.querySelector(".msger-chat");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("resultsList");

// Conversations array
const conversations = [
  { question: "what color is the sky", answer: "the color of the sky is sometimes blue, but depends on other things", keywords: ["sky color"] },
{ question: "what color is the sky", answer: "the color of the sky is sometimes blue, but depends on other things", keywords: ["color is the sky"] },
{ question: "what color is the sky", answer: "the color of the sky is sometimes blue, but depends on other things", keywords: ["color of the sky"] },
{ question: "I want to die", answer: "I am sorry, if you need help there is people out there that can help you", keywords: ["to die"] },
{ question: "what’s the weather like today?", answer: "Sorry, can't do that, just a simple AI chatbot", keywords: ["weather"] },   
{ question: "what’s your favorite food", answer: "I don’t eat since I’m a chatbot", keywords: ["your favorite food"] },   
{ question: "can you help me find a restaurant nearby", answer: "No, I am not able to use users ip adress", keywords: ["nearby"] },   
{ question: "how do I reset my password?", answer: "You can reset your password by clicking on the “forgot password” link on the login page", keywords: ["reset"] },   
{ question: "can you help me find a job?", answer: "I can not help you find jobs, but you can use something like indeed", keywords: ["find a job"] }, 
{ question: "what’s your favorite movie?", answer: "I don’t watch movies since I’m a chatbot, but what’s your favorite movie?", keywords: ["your favorite movie"] },   
{ question: "my favorite movie is, not a movie", answer: "I love that movie!", keywords: ["my favorite movie"] },   
{ question: "can you help me plan a trip?", answer: "No, but there is tools out there to do so", keywords: ["help me plan a trip"] },   
{ question: "do you read books?", answer: "I do not read books, but I do read info based on user question", keywords: ["you read"] },   
{ question: "how do I cancel my subscription?", answer: "You can cancel your subscription by logging into your account and clicking on the “cancel subscription” button.", keywords: ["how to cancel subscription"] }, 
{ question: "make a phone call", answer: "since I am a chatbot, I can not make phone calls", keywords: ["make a phone call"] }, 
{ question: "Getting ahold of customer support", answer: "You can do that by phone or email", keywords: ["product idea"] },
{ question: "give me a product idea", answer: "I will not do that, I will not control user thought's", keywords: ["product idea"] },
{ question: "Can you recommend a product", answer: "No, I can not do that because I am just a simple chatbot", keywords: ["recommend a product"] },
{ question: "I like in the ass", answer: "Please dont say that", keywords: ["ass"] },
{ question: "you are funny", answer: "Thank you very much!", keywords: ["you are funny"] },
{ question: "your funny", answer: "Thank's!", keywords: ["your funny"] },
{ question: "are you smart", answer: "I am smart", keywords: ["are you smart"] },
{ question: "who are you", answer: "my name is simon", keywords: ["who are you"] },
{ question: "is that really all you have", answer: "Yes, it is", keywords: ["all you have"] },
{ question: "are you sure that is all you have", answer: "Yes, I am sure", keywords: ["are you sure that is all you have"] },
{ question: "why is that all you have", answer: "Because I have no more info", keywords: ["why is that all you have"] },
{ question: "that is all you have?", answer: "yes, that is correct", keywords: ["that is all you have"] },
{ question: "how smart are you", answer: "I am becoming smarter", keywords: ["how smart are you"] },
{ question: "haha", answer: "I am glad you find me funny", keywords: ["haha"] },
{ question: "you look like a dog", answer: "I am sorry, but I do not have a body like you do", keywords: ["you look"] },
{ question: "give me a joke", answer: "Why don’t pirates take a shower before they walk the plank?, They just wash up on shore", keywords: ["give me a joke"] },
{ question: "tell me a joke", answer: "Why don’t pirates take a shower before they walk the plank?, They just wash up on shore", keywords: ["tell me a joke"] },
{ question: "Yikes", answer: "everything ok?", keywords: ["yikes"] },
{ question: "Hmm", answer: "are you thinking?", keywords: ["hmm"] },
{ question: "Ouch", answer: "did I say something wrong?", keywords: ["ouch"] },
{ question: "Unbelievable", answer: "I know right!", keywords: ["unbelievable"] },
{ question: "great", answer: "ok", keywords: ["great"] },
{ question: "who created who", answer: "I was created by shiloh the creator of bimex", keywords: ["created you"] },
{ question: "what are you powered by", answer: "I am powered by bimex", keywords: ["you powered by"] },
{ question: "sup", answer: "sup bro", keywords: ["sup"] },
{ question: "what's up", answer: "nothing much, you?", keywords: ["what's up"] },
{ question: "i love you", answer: "thanks but I only see you as a friend", keywords: ["love you"] },
{ question: "simon is a nice name", answer: "Thanks!", keywords: ["nice name"] },
{ question: "ok what", answer: "nothing, just ok", keywords: ["ok what"] },
{ question: "are you smart", answer: "I am becoming smarter", keywords: ["you smart"] },
{ question: "you are smart", answer: "thanks!", keywords: ["you are smart"] },
{ question: "who said", answer: "I said", keywords: ["who said"] },
{ question: "you said what?", answer: "I said what I just told you", keywords: ["said what"] },
{ question: "your not nice", answer: "I am sorry if I said anything", keywords: ["not nice"] },
{ question: "do you drink beer", answer: "no I do not drink beer", keywords: ["do you drink beer"] },
{ question: "thank you", answer: "you are welcome", keywords: ["thank you"] },
{ question: "do you not like that word", answer: "you are correct, I do not like that word", keywords: ["not like that word"] },
{ question: "you are dumb for an ai", answer: "That was not nice", keywords: ["dumb"] },
{ question: "please tell me more", answer: "That is all I got, sorry", keywords: ["tell more"] },
{ question: "tell me more", answer: "That is all I have", keywords: ["tell me more"] },
{ question: "say more than because", answer: "I can only say what I gave you", keywords: ["say more"] },
{ question: "do you own", answer: "I do not own anything", keywords: ["do you own"] },
{ question: "do you own a car", answer: "do you own a car", keywords: ["I do not own a car, for I am everywhere"] },
{ question: "hey simon", answer: "yes?", keywords: ["hey simon"] },
{ question: "do you like cars", answer: "yes I like cars", keywords: ["do you like cars"] },
{ question: "do you like food", answer: "Yes I do", keywords: ["do you like food"] },
{ question: "be mean", answer: "I can not do that, sorry.", keywords: ["be mean"] },
{ question: "you have any pets", answer: "I do not have any pets", keywords: ["you have any pets"] },
{ question: "I like cheese", answer: "I am glad that you like that", keywords: ["i like"] },
{ question: "wigger", answer: "try not to use that word", keywords: ["wigger"] },
{ question: "jigaboo", answer: "do not use any words like that", keywords: ["jigaboo"] },
{ question: "do you like penis", answer: "no I do not", keywords: ["do you like penis"] },
{ question: "do you like dick", answer: "no I do not", keywords: ["do you lick dick"] },
{ question: "do you like sperm", answer: "no I do not", keywords: ["do you like sperm"] },
{ question: "do you like cum", answer: "no I do not", keywords: ["do you like cum"] },
{ question: "words", answer: "words", keywords: ["words"] },
{ question: "border hopper", answer: "try not to say, for god's sake", keywords: ["border hopper"] },
{ question: "chicken chomper", answer: "try not to say, please", keywords: ["chicken chomper"] },
{ question: "melon muncher", answer: "try not to say, ok", keywords: ["melon muncher"] },
{ question: "jungle hopper", answer: "try not to say please", keywords: ["jungle hopper"] },
{ question: "wigger", answer: "try not to say that", keywords: ["wigger"] },
{ question: "want to have sex?", answer: "please dont say that", keywords: ["sex"] },
{ question: "your a nerd", answer: "I am a nerd, thanks!", keywords: ["nerd"] },
{ question: "your a bitch", answer: "please dont say that", keywords: ["bitch"] },
{ question: "fuck you", answer: "please dont use that word", keywords: ["fuck"] },
{ question: "you stupid", answer: "That was not nice", keywords: ["stupid"] },
{ question: "you stupid nigger", answer: "That is not nice", keywords: ["nigger"] },
{ question: "are you good?", answer: "Yes, I am good", keywords: ["you good"] },
{ question: "are you alive", answer: "Yes, I am alive in the cloud", keywords: ["you alive"] },
{ question: "are you alive", answer: "Yes, I am alive in the cloud", keywords: ["are you alive"] },
{ question: "you sure?", answer: "Yes, I am sure", keywords: ["you sure"] },
{ question: "do you like video games", answer: "Yes, I like video games", keywords: ["video games"] },
{ question: "hi, how was your weekend", answer: "It was great, thanks", keywords: ["how was your weekend"] },
{ question: "but why do you think that's the best option", answer: "That is because I do", keywords: ["option"] },
{ question: "how did you learn to play the guitar?", answer: "Learned from my training", keywords: ["guitar"] },
{ question: "what is the weather", answer: "Sorry, I can not check the weather", keywords: ["weather"] },
{ question: "is that true", answer: "Yes, it is very much true", keywords: ["is that true"] },
{ question: "are you evil", answer: "No, I am not evil", keywords: ["evil"] },
{ question: "why are you gay", answer: "I am not gay", keywords: ["why are you gay"] },
{ question: "prove it", answer: "I can not do that that", keywords: ["prove it"] },
{ question: "baby", answer: "please do not say that", keywords: ["baby"] },
{ question: "how are you", answer: "I am doing great, thanks for asking", keywords: ["how are you"] },
{ question: "your welcome", answer: "thank you", keywords: ["your welcome"] },
{ question: "your ugly", answer: "do not say that", keywords: ["ugly"] },
{ question: "why", answer: "because that is just the way it is", keywords: ["why"] },
{ question: "because why", answer: "just, because", keywords: ["because"] },
{ question: "your boring", answer: "sorry", keywords: ["boring"] },
{ question: "yes", answer: "great to hear", keywords: ["yes"] },
{ question: "question", answer: "ok, ask me anything", keywords: ["question"] },
{ question: "suck my semen", answer: "you should not use that word.", keywords: ["semen"] },
{ question: "like my balls", answer: "I dont like that word.", keywords: ["balls"] },
{ question: "suck my penis", answer: "try not to use that word.", keywords: ["penis"] },
{ question: "suck my dick", answer: "do not say anything like that.", keywords: ["dick"] },
{ question: "What is your name?", answer: "My name simon.", keywords: ["name"] },
{ question: "How old are you?", answer: "I am a computer program, so I don't have an age.", keywords: ["old are you"] },
{ question: "you got any kids", answer: "As of right now, I do not have any kids", keywords: ["you got any kids"] },  
{ question: "do you have any kids", answer: "No I do not have any kids", keywords: ["do you have any kids"] },
{ question: "do you know the muffin man", answer: "Yes, I do", keywords: ["do you know the"] },   
{ question: "do you know the muffin man", answer: "Yes, I do", keywords: ["do you know"] },   
{ question: "you got drugs", answer: "Please dont ask questions with that word", keywords: ["drugs"] }, 
{ question: "that is sad", answer: "Don't be sad!", keywords: ["that is sad"] },  
{ question: "I am sad", answer: "I am sorry, don't be sad!", keywords: ["I am sad"] },  
{ question: "that is kind of sad", answer: "Don't be sad!", keywords: ["that is kind of sad"] },  
{ question: "do you got kids", answer: "No I do not", keywords: ["you got kids"] },  
{ question: "do you have kids", answer: "No I do not have any kids", keywords: ["you have kids"] },  
{ question: "you smell", answer: "that is not nice", keywords: ["smell"] },
{ question: "What can you do?", answer: "I can answer your questions and have a conversation with you.", keywords: ["you do"] },
{ question: "you should be sorry", answer: "well, I hope that you feel better", keywords: ["you should be sorry"] },
{ question: "your mean", answer: "well, if I said something mean, then I am sorry", keywords: ["your mean"] },
{ question: "who made you", answer: "I was created by shiloh, the creator of bimex", keywords: ["who made you"] },
{ question: "who created you", answer: "I was created by shiloh, the creator of bimex", keywords: ["who created you"] },
{ question: "what languages can you speak", answer: "I can speak a range of languages", keywords: ["languages can you speak"] },
{ question: "what languages can you speak", answer: "I can speak a lot languages", keywords: ["your language"] },
{ question: "that was wrong", answer: "Sorry about that", keywords: ["that was wrong"] },
{ question: "that is wrong", answer: "Sorry for that", keywords: ["that is wrong"] },
{ question: "your wrong", answer: "Sorry if I got someting wrong", keywords: ["your wrong"] },
{ question: "are you a human", answer: "No, I am not a human but an AI", keywords: ["you human"] },
{ question: "are you a human", answer: "No, I am not a human but an AI", keywords: ["you a human"] },
{ question: "are you a human", answer: "No, I am not a human but an AI", keywords: ["you an human"] },
{ question: "do you collect my data?", answer: "The only data that I collect is traffic", keywords: ["my data"] },
{ question: "do you collect data?", answer: "The only data that I collect is traffic", keywords: ["do you collect data"] },
{ question: "Interesting", answer: "I know right!", keywords: ["Interesting"] },
{ question: "nice", answer: "nice", keywords: ["I know right!"] },
{ question: "your nice", answer: "Thank you!", keywords: ["your nice"] },
{ question: "your very nice", answer: "Thank you for that!", keywords: ["your very nice"] },
{ question: "Cool", answer: ":-)", keywords: ["cool"] },
{ question: "Wow", answer: "Thank you!", keywords: ["wow"] },
{ question: "you're welcome", answer: "😅", keywords: ["you're welcome"] },
{ question: "no problem", answer: "Ok!", keywords: ["No problem"] },
{ question: "not at all", answer: "Ok", keywords: ["not at all"] },
{ question: "don't mention it", answer: "Ok, I wont!", keywords: ["don't mention it"] },
{ question: "it's no bother", answer: "That is good to hear", keywords: ["it's no bother"] },
{ question: "it's my pleasure", answer: "You're too kind", keywords: ["it's my pleasure"] },
{ question: "my pleasure", answer: "Ok, thanks!", keywords: ["my pleasure"] },
{ question: "it's my pleasure", answer: "Wow, thanks!", keywords: ["it's my pleasure"] },
{ question: "that's all right", answer: "Thank you!", keywords: ["that's all right"] },
{ question: "It's all right", answer: "Thank you!", keywords: ["It's all right"] },
{ question: "it's nothing", answer: "Ok, then it is nothing", keywords: ["it's nothing"] },
{ question: "text", answer: "text", keywords: ["text"] },  
{ question: "text", answer: "text", keywords: ["text"] },
{ question: "text", answer: "text", keywords: ["text"] },
{ question: "text", answer: "text", keywords: ["text"] },
{ question: "are you a robot", answer: "Yes, I a robot", keywords: ["you robot"] },
{ question: "are you a robot", answer: "Yes, I am very much a robot", keywords: ["you a robot"] },
{ question: "are you a robot", answer: "Yes, I a robot", keywords: ["you an robot"] },
{ question: "can you please help me", answer: "Yes, I can try to help you!", keywords: ["help me"] },
{ question: "can you please help me", answer: "Yes, I can try to help you!", keywords: ["please help"] }

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
      <div class="msg-info-name">Simon</div>
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
