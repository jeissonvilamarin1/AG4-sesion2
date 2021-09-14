const panels = document.querySelectorAll(".panel");

panels.forEach(data => {
    data.addEventListener("click", ()=>{
        removeActiveClass();
        data.classList.add("active");
    })
})

function removeActiveClass (){
    panels.forEach(data =>{
        data.classList.remove("active")
    })
}