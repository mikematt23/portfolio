
//projects to render
const projects = [
  {
    id:0,
    title:"Tea Time Shop",
    link:"https://rococo-moxie-2d4439.netlify.app/",
    codeLink:"https://github.com/mikematt23/tea-shop",
    summary:"This project leverages React Router to manage front-end routing efficiently. It utilizes Redux for global state management, handling user, cart, and error information seamlessly. " 
    +"Basic React features like useState and useRef are employed alongside more advanced functionalities such as useEffect and useCallback. These features enable users to sign up, log in, shop, " 
    +"and make payments following REST principles. Additionally, the integration of the Stripe API handles user payments seamlessly.",
    img:"./assets/Screenshot 2025-02-04 163115.png"
  },
  {
    id:2,
    title:"Tea Time Shop API",
    link:"https://reashopnode-production.up.railway.app/",
    codeLink:"https://github.com/mikematt23/reaShopNode",
    summary:"This project is a Node.js/Express.jsREST API designed to provide a seamless experience for an e-commerce front end. It handles user requests such as signing in, logging in, cart storage, and payments while protecting and encrypting user data."+
    " The API stores necessary data in a MySQL database and retrieves it based on predefined routes. Additionally, it integrates with the Stripe API to handle payments on the front end.",
    img:"./assets/Screenshot 2025-02-04 200042.png"
  },
  {
    id:2,
    title:"React Quiz",
    link: "https://zingy-dieffenbachia-a1cfe1.netlify.app/",
    codeLink:"https://github.com/mikematt23/quizApp",
    summary: "This React app harnesses a variety of hooks, including useState and useEffect, to create an interactive user interface. It allows users to log in and test their knowledge of React, leveraging a robust set of concepts and features to provide a seamless and engaging experience.",
    img : "./assets/Screenshot 2024-12-13 130644.png"
  },
  {
    id:3,
    title : "Express API",
    link: "https://reactquizexpressapi-production.up.railway.app/",
    codeLink:"https://github.com/mikematt23/reactQuizExpressAPI",
    summary: "This API, built with Express.js and Node.js, interfaces with a front end and communicates with a MySQL database. It efficiently stores and retrieves user information based on predefined routes. Please note that this project focuses solely on the backend functionality, with no styling or front-end implementation.",
    img : "./assets/Screenshot 2024-12-13 130539.png"
  }

]
//index of project
let index = 0

//getting html elements 
const projectHolder = document.getElementById("projectHolder")
const nextButton = document.getElementById("next")
const backButton = document.getElementById("back")
const nextButton1 = document.getElementById("next1")
const backButton1 = document.getElementById("back1")
console.log(backButton)
console.log(nextButton)

//creating elements for projects
const newDiv = document.createElement("div")
const img = document.createElement("img")
const h2 = document.createElement('h2')
const linkHolder = document.createElement("div")
const link = document.createElement("a")
const codeLink = document.createElement("a")
const summary = document.createElement('p')

// adding classes 
newDiv.classList.add("project")
linkHolder.classList.add("linkHolder")

//creating values for the elements that where created
img.src =projects[index].img
h2.textContent = projects[index].title
summary.textContent = projects[index].summary
link.textContent = "Project"
link.href = projects[index].link
link.target = "_blank"
codeLink.textContent = "Code"
codeLink.href = projects[index].codeLink
codeLink.target = "_blank"

//adding html elements to the document
projectHolder.appendChild(newDiv)
newDiv.appendChild(h2)
newDiv.appendChild(img)
newDiv.appendChild(summary)
newDiv.appendChild(linkHolder)
linkHolder.appendChild(link)
linkHolder.appendChild(codeLink)

//adding click listeners to change values
nextButton.addEventListener("click",()=>{
  if(index === projects.length-1){
    index = 0
  }else{
    index++
  }
  img.src =projects[index].img
  h2.textContent = projects[index].title
  summary.textContent = projects[index].summary
  link.href = projects[index].link
  link.target = "_blank"
  codeLink.href = projects[index].codeLink
  codeLink.target = "_blank"
})

backButton.addEventListener("click",()=>{
  console.log('here')
  if(index === 0){
    index = projects.length-1
  }else{
    index= index-1
  }
  img.src =projects[index].img
  h2.textContent = projects[index].title
  summary.textContent = projects[index].summary
  link.href = projects[index].link
  link.target = "_blank"
  codeLink.href = projects[index].codeLink
  codeLink.target = "_blank"
})

nextButton1.addEventListener("click",()=>{
  if(index === projects.length-1){
    index = 0
  }else{
    index++
  }
  img.src =projects[index].img
  h2.textContent = projects[index].title
  summary.textContent = projects[index].summary
  link.href = projects[index].link
  link.target = "_blank"
  codeLink.href = projects[index].codeLink
  codeLink.target = "_blank"
})

backButton1.addEventListener("click",()=>{
  console.log('here')
  if(index === 0){
    index = projects.length-1
  }else{
    index= index-1
  }
  img.src =projects[index].img
  h2.textContent = projects[index].title
  summary.textContent = projects[index].summary
  link.href = projects[index].link
  link.target = "_blank"
  codeLink.href = projects[index].codeLink
  codeLink.target = "_blank"
})
