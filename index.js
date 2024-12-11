//projects to render
const projects = [
  {
    id:0,
    title:"Frontend",
    link: "www.example.com",
    codeLink:"www.code.com",
    summary: "what the project is about"
  },
  {
    id:1,
    title : "Express API",
    link: "www.example.com",
    codeLink:"www.code.com",
    summary: "This is an API that communicates with a mySQL server to add a user and let them log in to store their score."
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
const h2 = document.createElement('h2')
const link = document.createElement("a")
const codeLink = document.createElement("a")
const summary = document.createElement('p')

//creating values for the elements that where created
h2.textContent = projects[index].title
summary.textContent = projects[index].summary
link.textContent = projects[index].link
codeLink.textContent = projects[index].codeLink

//adding html elements to the document
projectHolder.appendChild(newDiv)
newDiv.appendChild(h2)
newDiv.appendChild(summary)
newDiv.appendChild(link)
newDiv.appendChild(codeLink)

//adding click listeners to change values
nextButton.addEventListener("click",()=>{
  if(index === projects.length-1){
    index = 0
  }else{
    index++
  }
  h2.textContent = projects[index].title
  summary.textContent = projects[index].summary
  link.textContent = projects[index].link
  codeLink.textContent = projects[index].codeLink
})
backButton.addEventListener("click",()=>{
  if(index === 0){
    index = projects.length-1
  }else{
    index= index-1
  }
  console.log(index)
  h2.textContent = projects[index].title
  summary.textContent = projects[index].summary
  link.textContent = projects[index].link
  codeLink.textContent = projects[index].codeLink
})
