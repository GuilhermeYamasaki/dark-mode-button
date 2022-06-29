const changeTheme = document.querySelector("#change-theme")

function toggleDarkMode() {
    document.body.classList.toggle("dark")
}

function loadTheme(){
    const darkMode = localStorage.getItem("dark")

    if(darkMode){
        toggleDarkMode()
    }
}
loadTheme()

changeTheme.addEventListener("change", function(){
    toggleDarkMode()
})

//addEventListener => espera um evento
//se acontecer executa a função em determinado alvo