document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const menu = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu a');

    burger.addEventListener('click', function () {
        menu.classList.toggle('show');
    });

    // Add an event listener for each menu link
    menuLinks.forEach(function (link) {
       
        
        link.addEventListener('click', function () {
            // Hide the menu after clicking a link
            menu.classList.remove('show');
            if(link.classList=="active"){
                link.classList.remove("active");
            }
    
            link.classList.add("active");
            
        });
    });
});

