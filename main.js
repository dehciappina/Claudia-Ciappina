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
        emailBt.style.transform = "translateY(-18vh) scale(1)"
        telBt.style.transform = "translateY(-27vh) scale(1)"
            
        showingContacts = true;
    }
}

contactTrigger.addEventListener('click', toggleContacts)

let counter = 0;

function autoShowContacts()  {
    if(counter < 1 && showingContacts === false) {
        ++counter
        toggleContacts()
    } else {
        return;
    }
}

letsTalk.addEventListener('mouseover', autoShowContacts)

const profImg = document.querySelector('#profImg')
let showingProfImg = false;

if (window.matchMedia("(min-width: 180vh)").matches) {

    document.body.onscroll = function() {
        if (showingProfImg === false) {
            if(window.scrollY > (window.innerHeight / 1.618)) {
                profImg.style.transform = 'translateX(0)';
                profImg.style.opacity = 1;
                setTimeout(() => {
                    profImg.style.willChange = 'auto'
                }, 2000);
                showingProfImg = true;
            }
        } else if (window.scrollY > (document.body.scrollHeight - (window.innerHeight * 1.38))) {
            autoShowContacts()
        }
    }
}