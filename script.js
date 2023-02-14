// Last update JavasCript 13/02/2023

const contactDev = document.querySelector('.contact-msg-developer')
const contactPed = document.querySelector('.contact-msg-pedagogy')
const contactDes = document.querySelector('.contact-msg-design')
const chatDev = document.querySelectorAll('.chat-message-developer')
const chatPed = document.querySelectorAll('.chat-message-pedagogy')
const chatDes = document.querySelectorAll('.chat-message-design')
const chatContactPicture = document.querySelector('#currently-contact-picture')
const chatContactName = document.querySelector('.chat-contact-name')
const chatContactLastMessage = document.querySelector('.chat-contact-last-message')
/*const msgPdf = document.querySelector('.container-chat-message-pdf')
const cv = document.querySelector('.cv')*/


contactDev.addEventListener('click', function(){
    chatContactPicture.src = "assets/contact-developer-picture.jpeg"
    chatContactName.innerHTML = "Recrutador Developer"
    chatContactLastMessage.innerText = "Conta comercial"
    contactPed.style.bakgroundColor = 'red'
    for (var a = 0; a < chatDev.length; a++){
        chatDev[a].style.visibility = 'visible'
        chatDev[a].style.order = '1'
    }
    for (var b = 0; b < chatPed.length; b++){
        chatPed[b].style.visibility = 'hidden'
        chatPed[b].style.order = '2'
    }
    for (var c = 0; c < chatDes.length; c++){
        chatDes[c].style.visibility = 'hidden'
        chatDes[c].style.order = '3'
    }
})

contactPed.addEventListener('click', function(){
    chatContactPicture.src = "assets/contact-pedagogy-picture.jpeg"
    chatContactName.innerHTML = "Recrutador Pedagogia"
    chatContactLastMessage.innerText = "Conta comercial"
    contactPed.style.bakgroundColor = 'red'
    for (var a = 0; a < chatDev.length; a++){
        chatDev[a].style.visibility = 'hidden'
        chatDev[a].style.order = '2'
    }
    for (var b = 0; b < chatPed.length; b++){
        chatPed[b].style.visibility = 'visible'
        chatPed[b].style.order = '1'
    }
    for (var c = 0; c < chatDes.length; c++){
        chatDes[c].style.visibility = 'hidden'
        chatDes[c].style.order = '3'
    }
})

contactDes.addEventListener('click', function(){
    chatContactPicture.src = "assets/contact-design-picture.jpeg"
    chatContactName.innerHTML = "Cliente Design"
    chatContactLastMessage.innerText = "last seen today at 08:00pm"
    contactDes.style.bakground   = 'red'
    for (var a = 0; a < chatDev.length; a++){
        chatDev[a].style.visibility = 'hidden'
        chatDev[a].style.order = '2'
    }
    for (var b = 0; b < chatPed.length; b++){
        chatPed[b].style.visibility = 'hidden'
        chatPed[b].style.order = '3'
    }
    for (var c = 0; c < chatDes.length; c++){
        chatDes[c].style.visibility = 'visible'
        chatDes[c].style.order = '1'
    }
})
/*
img.addEventListener('click', function(){
    cv.style.visibility = 'hidden'
})

img.addEventListener('click', function(){
    cv.style.visibility = 'visible'
})

*/