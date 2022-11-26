
const saludo = document.querySelector('#saludoUsuario')
const modal = document.querySelector('#modal')
const backdrop = document.querySelector('#backdrop')
const closeButtonModal = document.querySelector('#modal span')
const closeBackModal = document.querySelector('#backdrop')

closeButtonModal.addEventListener('click', () => {
    modal.toggleAttribute('hidden')
    backdrop.toggleAttribute('hidden')
})

closeBackModal.addEventListener('click', () =>{
    modal.toggleAttribute('hidden')
    backdrop.toggleAttribute('hidden')
})

document.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(window.sessionStorage.getItem('currentUser'))
    console.log(currentUser.nombre)
    saludo.innerHTML = `Hola, ${currentUser.nombre}`
})

const consultaSaldo = document.querySelector('#saldo')
consultaSaldo.addEventListener('click', () => {
    modal.removeAttribute('hidden')
    backdrop.removeAttribute('hidden')

    const { saldo } = JSON.parse(window.sessionStorage.getItem('currentUser'))
    const bodyModal = document.querySelector('#modal div')
    bodyModal.innerHTML = `<h1>$ ${saldo}</h1>`
    const tituloModal = document.querySelector('#modal h5')
    tituloModal.innerHTML = 'Saldo actual'
})

