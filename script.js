const logoContainer = document.querySelector(".logo-container")
const logo = document.querySelector(".logo")
const logoNameEl = document.querySelector(".logo-name")

const appear = new Audio("Appear.mp3")
const typing = new Audio("Typing.mp3")
let logoName = "Omid Programmer"
let index = 0
let typerInterval

logo.textContent = "</>"
document.onclick = () => document.documentElement.requestFullscreen()
document.body.addEventListener("click", appearNow, { once: true })
function appearNow() {
 setTimeout(() => appear.play(), 1950)
 setTimeout(() => {
  document.documentElement.style.setProperty("--laptop", "white")
  startTyping()
 }, 2000)
}

function startTyping() {
 setTimeout(() => {
  typing.play()
  typerInterval = setInterval(() => {
   logoNameEl.innerHTML += logoName[index]
   if (index < logoName.length - 1) index++
   else {
    clearInterval(typerInterval)
    index = 0
    startLoading()
   }
  }, 70)
 }, 1000)
}

function startLoading() {
 setTimeout(() => {
  typerInterval = setInterval(() => {
   document.documentElement.style.setProperty("--text-gradient", index + "%")
   if (index < 100) index++
   else {
    clearInterval(typerInterval)
    logoContainer.style.borderColor = "white"
   }
  }, 50)
 }, 1000)
}
