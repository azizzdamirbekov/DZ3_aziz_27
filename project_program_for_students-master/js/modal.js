const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const modalCloseButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}


const showModal = (callback) => {
    setTimeout(callback, 10000)
}
showModal(openModal)


modalTrigger.onclick = () => openModal()
modalCloseButton.onclick = () => closeModal()
modal.onclick = (event) => event.target === modal && closeModal() 

let isModalShown = false

const scrollEnd = () =>{
    const equalAngles = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight

    if (equalAngles && !isModalShown) {
        openModal()
        isModalShown = true
    }
}

window.addEventListener('scroll', scrollEnd)

