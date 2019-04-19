let showingContacts = false;
const contactTrigger = document.querySelector('#menu_activator')

const whatsAppBt = document.querySelector('#whatsapp_bt')
const emailBt = document.querySelector('#email_bt')

function toggleContacts() {
    if(showingContacts === true) {
        whatsAppBt.style.transform = "translateY(0) scale(0)"
        setTimeout(() => {
            emailBt.style.transform = "translateY(0) scale(0)"
        }, 150);

        showingContacts = false;
    } else {
        whatsAppBt.style.transform = "translateY(-10vh) scale(1)"
        setTimeout(() => {
            emailBt.style.transform = "translateY(-20vh) scale(1)"
        }, 150);

        showingContacts = true;
    }
}

contactTrigger.addEventListener('click', toggleContacts)
contactTrigger.addEventListener('mouseenter', toggleContacts)