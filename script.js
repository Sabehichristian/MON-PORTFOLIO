 const navbar = document.getElementsByClassName ('navbar');
 const menuMobile = document.getElementsByClassName ('menumobile');

 menuMobile.addEventListener("click", () =>{
    navbar.classList.toggle("open");
    menuMobile.classList.toggle("active");
 })

function alerte(){
    alert("Formulaire envoyer");
}
