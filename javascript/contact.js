emailjs.init({
    publicKey: "a-WWuZnSnIqU_JvvW",
  })
//geting html elements from document
const contact = document.getElementById('contact')

const modal = document.getElementById('myModal');
const modalButton = document.getElementById('modalButton')
const modalH1 = document.getElementById("modalH1")
const modalH2 = document.getElementById("modalH2")
const contactInfo = document.getElementById("contact-info")
const emailButton = document.getElementById("emailButton")
const h1inContact = contact.querySelector("h1")

//creating html elements
const emailDiv = document.createElement('div')
const inputHolder = document.createElement("div")
const buttonHolder = document.createElement("div")

const sendButton = document.createElement("button")
const cancelButton = document.createElement("button")

const subjectHolder = document.createElement("div")
const subject = document.createElement("input")
const subjectLabel = document.createElement('label')

const emailHolder = document.createElement('div')
const email = document.createElement("input")
const eamilLabel = document.createElement("label")

const messageHolder = document.createElement("div")
const message = document.createElement("textArea")
const messageLabel = document.createElement("label")

//adding values to html elements
sendButton.textContent = "Send"
cancelButton.textContent = "Cancel"
subjectLabel.textContent = "Subject"
messageLabel.textContent = "Message"
eamilLabel.textContent = "Email"

//adding create elements to the created div
emailDiv.appendChild(inputHolder)

inputHolder.appendChild(subjectHolder)
subjectHolder.appendChild(subjectLabel)
subjectHolder.appendChild(subject)

inputHolder.appendChild(emailHolder)
emailHolder.appendChild(eamilLabel)
emailHolder.appendChild(email)

inputHolder.appendChild(messageHolder)
messageHolder.appendChild(messageLabel)
messageHolder.appendChild(message)

emailDiv.appendChild(buttonHolder)
buttonHolder.appendChild(sendButton)
buttonHolder.appendChild(cancelButton)
//ading classes 
emailDiv.classList.add("emailMessage")
inputHolder.classList.add("userInputHolder")
subjectHolder.classList.add("inputHolder")
messageHolder.classList.add("inputHolder")
emailHolder.classList.add("inputHolder")

emailButton.addEventListener("click",()=>{
    contact.classList.add("zflip")
    h1inContact.classList.add("zflip")
    contactInfo.style.display = "none"
    emailDiv.classList.add('zflip')
    contact.appendChild(emailDiv)
    emailDiv.style.display = ""
})

sendButton.addEventListener('click',()=>{
    if(
        subject.value === ''||
        email.value === '' ||
        message.value === ''
    ){
        modalH1.textContent = "Form Error"
        modalH2.textContent = "Please Complete the form to send an email"
        modal.style.display = 'block';
    }else{
        emailDiv.style.display = "none"
        contact.classList.remove("zflip")
        h1inContact.classList.remove("zflip")
        emailDiv.classList.remove('zflip')
        contactInfo.style.display = ""
        emailDiv.style.display = "none"

        console.log(subject.value, message.value, email.value)

        const templateParams = {
            subject: subject.value,
            email:email.value,
            message:message.value
        }

        emailjs.send( "default_service",'userEmail', templateParams).then(
            (response) => {
              console.log('SUCCESS!', response.status, response.text);
            },
            (error) => {
              console.log('FAILED...', error);
            },
          );  
          emailjs.send( "default_service",'myEmail', templateParams).then(
            (response) => {
              console.log('SUCCESS!', response.status, response.text);
            },
            (error) => {
              console.log('FAILED...', error);
            },
          ); 
    }

    subject.value = ''
    email.value = ''
    message.value = ''
})

cancelButton.addEventListener('click',()=>{
    emailDiv.style.display = "none"
    contact.classList.remove("zflip")
    h1inContact.classList.remove("zflip")
    emailDiv.classList.remove('zflip')
    contactInfo.style.display = ""
    emailDiv.style.display = "none"
    subject.value = ''
    email.value = ''
    message.value = ''
})
modalButton.addEventListener("click",()=>{
    modal.style.display = 'none';
}) 


