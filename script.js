/* envolver tu código JavaScript en un evento */
document.addEventListener("DOMContentLoaded", function(){
   /* que funcion tiene esto */
    const themeToggleButton = document.getElementById('theme-toggle'); 

    themeToggleButton.addEventListener('click',()=> {
        document.body.classList.toggle('dark-mode');
    
    });

});
