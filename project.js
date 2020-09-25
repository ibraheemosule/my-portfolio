document.addEventListener('click', function (event) {
    if(!event.target.classList.contains('accordion-toggle')) return;

    var content = document.querySelector(event.target.hash);

    if (!content) return;

    event.preventDefault()

    if (content.classList.contains('active')){
        content.classList.remove('active');
        
        return;
    }

    var accordions = document.querySelectorAll('.accordion-content.active')

    for(var i = 0; i < accordions.length; i++){
        accordions[i].classList.remove('active');
    }

    content.classList.toggle('active');
});

let button = document.getElementById('menu');
            let li = document.querySelectorAll('li');
            let ul = document.getElementsByTagName('ul')[0];
            let nav = document.getElementsByTagName('nav')[0];

            const active = () => {
                if(window.matchMedia("(max-width: 500px)").matches){
                button.style.display = "none";
                ul.style.paddingRight = "0px";
                ul.style.paddingLeft = "0px";
                for (let index = 0; index < li.length; index++) {
                li[index].style.display="block";
                li[index].style.paddingTop="2%";
                li[index].style.paddingBottom="2%";
                li[index].style.borderBottom="1px solid rgba(255, 255, 255, 0.707)";
                }
                };
            }
            nav.addEventListener('mouseover', active);

            const inactive = () => {
                if(window.matchMedia("(max-width: 500px)").matches){
                button.style.display = "inline-block";
                ul.style.paddingRight = "2%";
                ul.style.paddingLeft = "2%";
                for (let index = 0; index < li.length; index++) {
                li[index].style.display="none";
                }
                };
            }
            nav.addEventListener('mouseout', inactive);