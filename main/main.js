const toggle = document.getElementById('toggle-menu');
const navMenu = document.getElementById('nav-menu');
const closeMenu = document.getElementById('close-menu');
const menuLinks = document.querySelectorAll('.nav__lista a[href^="#"]');

menuLinks.forEach(menuLink=> {
    menuLink.addEventListener('click', function() {
        navMenu.classList.remove('show');
    })
})

toggle.addEventListener('click', ()=> {
    navMenu.classList.add('show');
});

closeMenu.addEventListener('click', ()=> {
    navMenu.classList.remove('show');
});



const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');
//const messageTxt = document.querySelector('textarea'); 

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    mensajes: /^[a-zA-ZÀ-ÿ\s]{1,120}$/,  
    password: /^.{4,12}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ 
}

const campos = {
    name: false,
    lastname: false,
    email: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "name":
            validarCampo(expresiones.nombre, e.target, 'name');
        break;

        case "email":
            validarCampo(expresiones.correo, e.target, 'email');
        break;

        case "lastname":
            validarCampo(expresiones.nombre, e.target, 'lastname');
        break;


        /*         case "messageT":
            validarCampo(expresiones.mensajes, e.target, 'messageT');
        break;* */
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`group__${campo}`).classList.remove('form__group-incorrect');
        document.getElementById(`group__${campo}`).classList.add('form__group-correct');
        document.querySelector(`#group__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#group__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#group__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#group__${campo} .form_input-error`).classList.remove('form_input-error-active');
        campos[campo] = true;
    }
    else {
        document.getElementById(`group__${campo}`).classList.add('form__group-incorrect');
        document.getElementById(`group__${campo}`).classList.remove('form__group-correct');
        document.querySelector(`#group__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#group__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#group__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#group__${campo} .form_input-error`).classList.add('form_input-error-active');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (campos.name && campos.lastname && campos.email) {
        formulario.reset();
        
        document.getElementById('form__message-exit').classList.add('form__message-exit-active');
        setTimeout(() => {
            document.getElementById('form__message-exit').classList.remove('form__message-exit-active');
            document.getElementById('form__message').classList.remove('form__message-active');
        }, 2000);

        document.querySelectorAll('.form__group-correct').forEach((icono) => {
            icono.classList.remove('form__group-correct');
        })
    } else {
        document.getElementById('form__message').classList.add('form__message-active');
    }
});



const fullImgBox = document.getElementById('fulImgBox');
const fullimg = document.getElementById('fulImg');


function closeImg() {
    fullImgBox.style.display = "none";
}

function openImg(reference) {
    fullImgBox.style.display = "flex";
    fullimg.src = reference;
}

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 1
        },
        500: {
            items: 2
        },
        600: {
            items: 2
        },
        900: {
            items: 3
        },
        1000: {
            items: 4
        },
        1100: {
            items: 5
        }
    }
})


window.addEventListener('scroll', () => {
    const navEffect = document.querySelector("nav");
    navEffect.classList.toggle('scroll', window.scrollY > 0);
});

window.addEventListener('scroll', ()=> {
    const navMobile = document.querySelector('.header__toggle');
    navMobile.classList.toggle('scroll', window.scrollY > 0);
})

const btn_scrolltop = document.getElementById("btn_scrolltop")
btn_scrolltop.addEventListener('click', () => {
    window.scrollTo(0, 0)
})

window.onscroll = () => {
    add_btn_scrolltop()
}

const add_btn_scrolltop = () => {
    if (window.scrollY < 300) {
        btn_scrolltop.classList.remove("btn-scrolltop-on")
    } else {
        btn_scrolltop.classList.add("btn-scrolltop-on")
    }
}



window.sr = ScrollReveal();


sr.reveal('.section__homes', {
    duration: 2000,
    mobile: true,
    rotate: { x:0, y: 80, z:0}
});

sr.reveal('.services', {
    duration: 2000,
    mobile: true,
    origin: 'top',
    distance: '100px'
});


sr.reveal('.about', {
    duration: 2000,
    mobile: true,
    origin: 'left',
    distance: '50px'
});

sr.reveal('.card', {
    duration: 2000,
    mobile: true,
    origin: 'bottom',
    distance: '10px' 
});

sr.reveal('.footerS', {
    duration: 2000,
    mobile: true,
    origin: 'bottom',
    distance: '10px' 
});


var typed = new Typed('.type', {
    strings: ['nosotros', 'familia', 'amigos'],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true,
  });

/* efecto type

const text = [' nosotros', ' familia', ' amigos', ' mascotas'];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === text.length) {
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);
    
    document.querySelector('.typing').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }

    setTimeout(type, 500);
}());

*/