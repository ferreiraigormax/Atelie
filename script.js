const contactDev = document.querySelector('.contact-msg-developer')
const contactPed = document.querySelector('.contact-msg-pedagogy')
const contactDes = document.querySelector('.contact-msg-design')
const chatDev = document.querySelectorAll('.chat-message-developer')
const chatPed = document.querySelectorAll('.chat-message-pedagogy')
const chatDes = document.querySelectorAll('.chat-message-design')


contactDev.addEventListener('click', function(){
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
