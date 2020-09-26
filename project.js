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
                button.style.visibility = "hidden";
                button.style.fontSize = "100%";
                ul.style.paddingRight = "0px";
                ul.style.paddingLeft = "0px";
                ul.style.opacity="0";
                ul.style.backgroundColor = "none";
                for (let index = 0; index < 4; index++) {
                li[index].style.display="block";
                li[index].style.opacity="0";
                li[index].style.paddingTop="2%";
                li[index].style.paddingBottom="2%";
                li[index].style.borderBottom="1px solid rgba(255, 255, 255, 0.707)";
                }
                let index = 0;
                setInterval(() => {
                    if(index < 1.1){
                        ul.style.opacity=index;
                        li[0].style.opacity = index;
                        li[1].style.opacity = index;
                        li[2].style.opacity = index;
                        li[3].style.opacity = index;

                        li[0].style.backgroundColor = "rgba(128, 128, 128, 0.693)";
                        li[1].style.backgroundColor = "rgba(128, 128, 128, 0.693)";
                        li[2].style.backgroundColor = "rgba(128, 128, 128, 0.693)";
                        li[3].style.backgroundColor = "rgba(128, 128, 128, 0.693)";

                        index += 0.2;
                    }
                }, 5);
                };
            }
            nav.addEventListener('mouseover', active);

            const inactive = () => {
                if(window.matchMedia("(max-width: 500px)").matches){
                    button.style.visibility = "visible";
                    button.style.fontSize = "250%";
                ul.style.paddingRight = "2%";
                ul.style.paddingLeft = "2%";
                for (let index = 0; index < 4; index++) {
                li[index].style.display="none";
                }
                };
            }
            nav.addEventListener('mouseout', inactive);