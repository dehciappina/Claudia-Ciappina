
const loadingScreen = document.querySelector('#loading_window')

document.onreadystatechange = function () {
  if (document.readyState == "interactive" || document.readyState == "complete") {
    loadingScreen.style.transition = "opacity 1s ease, visibility 1s ease"
    loadingScreen.style.visibility = "hidden"
    loadingScreen.style.opacity = 0

    setTimeout(() => {
        loadingScreen.style.display = "none"
    }, 2000);
  } else {
        loadingScreen.style.display = "none"
  }

}

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

if (window.matchMedia("(min-width: 162vh)").matches) {

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
            document.querySelector('.flower_img').style.animation = "flower_move 4s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate";
        }
    }
}

const formWindow = document.querySelector('#form_container')
const outArea = document.querySelector('#outarea')
const emailCaller = document.querySelector('.email_caller')

emailBt.addEventListener('click', function() {
    toggleContacts()
    outArea.style.opacity = 1;
    outArea.style.visibility = "visible";
    formWindow.style.transform = "translateY(0)";
})

outArea.addEventListener('click', function() {
    outArea.style.opacity = 0;
    outArea.style.visibility = "hidden";
    formWindow.style.transform = "translateY(-110vh)";
})

emailCaller.addEventListener('click', function() {
    outArea.style.opacity = 1;
    outArea.style.visibility = "visible";
    formWindow.style.transform = "translateY(0)";
})

const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const cta = document.querySelector('#cta')

if (window.matchMedia("(min-width: 90vh)").matches) {
    document.body.addEventListener('mousemove', function(event) {
        if(window.scrollY < (window.innerHeight / 1.618)) {
            let eventX = event.clientX - window.innerWidth/2
            let eventY = event.clientY - window.innerHeight/2
    
            h1.style.transform = 'translateX(' + eventX / 20 +'px) translateY(' + eventY / 30 + 'px)'
    
            h2.style.transform = 'translateX(' + eventX / 30 +'px) translateY(' + eventY / 20 + 'px)'
    
            cta.style.transform = 'translateX(' + eventX / 40 +'px) translateY(' + eventY / 30 + 'px)'
    
            console.log(eventX + ', ' + eventY)
        }
    })
}
