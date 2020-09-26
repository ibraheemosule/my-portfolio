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
let button2 = document.getElementById('menu2');
            let li = document.querySelectorAll('li');
            let ul = document.getElementsByTagName('ul')[0];
            let nav = document.getElementsByTagName('nav')[0];

            const active = () => {
                if(window.matchMedia("(max-width: 500px)").matches){
                button.style.display = "none";
                button2.style.display = "inline-block";
                button.style.fontSize = "100%";
                ul.style.paddingRight = "0px";
                ul.style.paddingLeft = "0px";
                ul.style.opacity="0";
                ul.style.backgroundColor = "rgba(128, 128, 128, 0.693)";
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

                        index += 0.2;
                    }
                }, 10);
                };
            }
            button.addEventListener('click', active);

            const inactive = () => {
                if(window.matchMedia("(max-width: 500px)").matches){
                    button2.style.display = "none";
                button.style.display = "inline-block";
                    button.style.fontSize = "250%";
                ul.style.paddingRight = "2%";
                ul.style.paddingLeft = "2%";
                // for (let index = 0; index < 4; index++) {
                // li[index].style.display="none";
                // }

                let index = 1;
                setInterval(() => {
                    if(index >= 0){
                        ul.style.opacity="initial";
                        li[0].style.opacity = index;
                        li[1].style.opacity = index;
                        li[2].style.opacity = index;
                        li[3].style.opacity = index;

                        index -= 0.1;

                        if (index <=0.9 ) {
                            li[3].style.display="none";
                        }
                        if (index <=0.6 ) {
                            li[2].style.display="none";
                        }
                        if (index <=0.3 ) {
                            li[1].style.display="none";
                        }
                        if (index <=0 ) {
                            li[0].style.display="none";
                        }
                    }
                }, 10);
                };
            }
            button2.addEventListener('click', inactive);