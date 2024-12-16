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
const subjectHolder = document.createElement("div")
const subject = document.createElement("input")
const subjectLabel = document.createElement('label')
const messageHolder = document.createElement("div")
const message = document.createElement("textArea")
const messageLabel = document.createElement("label")

//adding values to html elements
sendButton.textContent = "Send"
cancelButton.textContent = "Cancel"
subjectLabel.textContent = "Subject"
messageLabel.textContent = "Message"

//adding create elements to the created div
emailDiv.appendChild(subjectHolder)
subjectHolder.appendChild(subjectLabel)
subjectHolder.appendChild(subject)
emailDiv.appendChild(messageHolder)
messageHolder.appendChild(messageLabel)
messageHolder.appendChild(message)
emailDiv.appendChild(buttonHolder)
buttonHolder.appendChild(sendButton)
buttonHolder.appendChild(cancelButton)
//ading classes 
emailDiv.classList.add("emailMessage")
subjectHolder.classList.add("inputHolder")
messageHolder.classList.add("inputHolder")

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


