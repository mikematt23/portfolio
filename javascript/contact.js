//geting html elements from document
const contact = document.getElementById('contact')
const contactInfo = document.getElementById("contact-info")
const emailButton = document.getElementById("emailButton")
const h1inContact = contact.querySelector("h1")

//creating html elements
const emailDiv = document.createElement('div')
const buttonHolder = document.createElement("div")
const sendButton = document.createElement("button")
const cancelButton = document.createElement("button")
const subject = document.createElement("input")
const message = document.createElement("textArea")

//adding values to html elements
sendButton.textContent = "Send"
cancelButton.textContent = "Cancel"

//adding create elements to the created div
emailDiv.appendChild(subject)
emailDiv.appendChild(message)
emailDiv.appendChild(buttonHolder)
buttonHolder.appendChild(sendButton)
buttonHolder.appendChild(cancelButton)
//ading classes 
emailDiv.classList.add("emailMessage")
emailButton.addEventListener("click",()=>{
    contact.classList.add("zflip")
    h1inContact.classList.add("zflip")
    contactInfo.style.display = "none"
    emailDiv.classList.add('zflip')
    contact.appendChild(emailDiv)
    emailDiv.style.display = ""
})

sendButton.addEventListener('click',()=>{
    emailDiv.style.display = "none"
    contact.classList.remove("zflip")
    h1inContact.classList.remove("zflip")
    emailDiv.classList.remove('zflip')
    contactInfo.style.display = ""
    emailDiv.style.display = "none"
})

cancelButton.addEventListener('click',()=>{
    emailDiv.style.display = "none"
    contact.classList.remove("zflip")
    h1inContact.classList.remove("zflip")
    emailDiv.classList.remove('zflip')
    contactInfo.style.display = ""
    emailDiv.style.display = "none"
})


