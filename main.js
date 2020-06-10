let appleInput = document.getElementById("apple-input")
let infoPrompt = document.getElementById("info-prompt")

function handleInput() {
  let cleanValue = appleInput.value.toLowerCase().trim();
  if (cleanValue === "") {
    infoPrompt.textContent = ""
  } else if (cleanValue === "apfel") {
    infoPrompt.textContent = "richtig"
  } else {
    infoPrompt.textContent = "falsch"
  }
}

appleInput.oninput = handleInput;
