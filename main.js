window.onload = function() {
    document.body.style.transition = "opacity 2s cubic-bezier(0.18, 0.89, 0.32, 1.28)"
    document.body.style.opacity = 1
};

let showingContacts = false;
const contactTrigger = document.querySelector('#menu_activator')
const letsTalk = document.querySelector('#cta span')

const whatsAppBt = document.querySelector('#whatsapp_bt')
const emailBt = document.querySelector('#email_bt')
const telBt = document.querySelector('#tel_bt')

function toggleContacts() {
    if(showingContacts === true) {
        whatsAppBt.style.transform = "translateY(0) scale(0)"
        emailBt.style.transform = "translateY(0) scale(0)"
        telBt.style.transform = "translateY(0) scale(0)"

        showingContacts = false;
    } else {
        whatsAppBt.style.transform = "translateY(-9vh) scale(1)"
            setTimeout(() => {
                emailBt.style.transform = "translateY(-18vh) scale(1)"
                    setTimeout(() => {
                        telBt.style.transform = "translateY(-27vh) scale(1)"
                    }, 100);
            }, 100);
            
        showingContacts = true;
    }
}

contactTrigger.addEventListener('click', toggleContacts)

    
let counter = 0;


letsTalk.addEventListener('mouseover', function() {
    if(counter < 1 && showingContacts === false) {
        ++counter
        toggleContacts()
    } else {
        return;
    }
})





const profImg = document.querySelector('#profImg')

if (window.matchMedia("(min-width: 180vh)").matches) {

    document.body.onscroll = function() {
        if(window.scrollY > (window.innerHeight / 3)) {
            profImg.style.transform = 'translateX(0)';
            setTimeout(() => {
                profImg.style.willChange = 'auto'
            }, 2000);
        }
    }
}