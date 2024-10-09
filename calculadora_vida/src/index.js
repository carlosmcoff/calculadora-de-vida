import { createLi, showAge, showHours, showMinutes } from "./create_table.js";

document.getElementById("calculate").addEventListener("click", (ev) => {
  ev.preventDefault();
  const ul = document.getElementById("list")
  const day = document.getElementById("day").value
  const month = document.getElementById("month").value
  const year = document.getElementById("year").value

  if (year) {
    // SHow birthday
    const birthday = `${day}/${month}/${year}`
    createLi("list", "Nascimento:", birthday)
    //Show age
    const age = showAge(day, month, year)
    createLi("list", "Sua idade:", age)  
    
    const hours = showHours(day, month, year)
    createLi("list", "Horas vividas:", hours)
    
    const minutes = showMinutes(day, month, year)
    createLi("list", "Minutos vividos:", minutes) 
    
    const separator = document.createElement('p')
    separator.innerText = "--------------------------------------------------------"
    ul.appendChild(separator)
    alert("Calculado!")
    

  } else {
    alert("Dados faltando.")
  }
})

document.getElementById("clear").addEventListener("click", (ev) => {
  ev.preventDefault()
  const ul = document.getElementById("list")
  document.querySelectorAll("li").forEach(e => ul.remove(e))
  document.querySelectorAll("label").forEach(e => ul.remove(e))
})