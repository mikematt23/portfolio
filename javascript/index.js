
//projects to render
const projects = [
  {
    id:0,
    title:"React Quiz",
    link: "https://zingy-dieffenbachia-a1cfe1.netlify.app/",
    codeLink:"https://github.com/mikematt23/quizApp",
    summary: "This is a react app that utilizes useState, useEffect, and many other react hooks and concepts to create a UI that lets a user log in and test there knowalge of react",
    img : "./assets/Screenshot 2024-12-13 130644.png"
  },
  {
    id:1,
    title : "Express API",
    link: "https://reactquizexpressapi-production.up.railway.app/",
    codeLink:"www.code.com",
    summary: "This is an API that communicates with a mySQL database using express.js and node to store user information and retive the data based on the provided routes",
    img : "./assets/Screenshot 2024-12-13 130539.png"
  }
]
//index of project
let index = 0

//getting html elements 
const projectHolder = document.getElementById("projectHolder")
const nextButton = document.getElementById("next")
const backButton = document.getElementById("back")

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
  link.textContent = "Project"
  link.href = projects[index].link
  link.target = "_blank"
  codeLink.textContent = "Code"
  codeLink.href = projects[index].codeLink
  codeLink.target = "_blank"
})

backButton.addEventListener("click",()=>{
  if(index === 0){
    index = projects.length-1
  }else{
    index= index-1
  }
  img.src =projects[index].img
  h2.textContent = projects[index].title
  summary.textContent = projects[index].summary
  link.textContent = "Project"
  link.href = projects[index].link
  link.target = "_blank"
  codeLink.textContent = "Code"
  codeLink.href = projects[index].codeLink
  codeLink.target = "_blank"
})
