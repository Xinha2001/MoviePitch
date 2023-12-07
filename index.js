const setupTextarea = document.getElementById('setup-textarea') 
const setupInputContainer = document.getElementById('setup-input-container')
const movieBossText = document.getElementById('movie-boss-text')

const apiKey = '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'
const url = 'https://api.openai.com/v1/completions'

document.getElementById("send-btn").addEventListener("click", () => {
  // if (setupTextarea.value) {
    setupInputContainer.innerHTML = `<img src="images/loading.svg" class="loading" id="loading">`
    movieBossText.innerText = `Ok, just wait a second while my digital brain digests that...`
  // }
  fetchBotReply()
})

function fetchBotReply(){
  fetch(url,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      'model': 'text-davinci-003',
      'prompt': 'Sound enthusiastic in five words or less.'
    })
  }).then(response => response.json()).then(data => 
    movieBossText.innerText = data.choices[0].text
  )
// {id: "cmpl-78rekXLd1GewCaHDNV4Dm5GlDUmui", object: "text_completion", created: 1682347234, model: "text-davinci-003", choices: [{text: " Excitedly enthusiastic!", index: 0, logprobs: null, finish_reason: "stop"}], usage: {prompt_tokens: 8, completion_tokens: 7, total_tokens: 15}}
}

