document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".cj").forEach(seccion =>{
  
          seccion.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?seccion.classList.remove("filtro")
              :seccion.classList.add("filtro")
        })
  
    }
  
  
  })