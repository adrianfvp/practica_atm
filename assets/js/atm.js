
const saludo = document.querySelector('#saludoUsuario')
const modal = document.querySelector('#modal')
const backdrop = document.querySelector('#backdrop')
const closeButtonModal = document.querySelector('#modal span')
const closeBackModal = document.querySelector('#backdrop')

const abrirModal = () => {
    modal.removeAttribute('hidden')
    backdrop.removeAttribute('hidden')
}

const cerrarrModal = () => {
    modal.toggleAttribute('hidden')
    backdrop.toggleAttribute('hidden')
}


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
    abrirModal()

    const { saldo } = JSON.parse(window.sessionStorage.getItem('currentUser'))

    const bodyModal = document.querySelector('#modal div')
    const tituloModal = document.querySelector('#modal h5')

    bodyModal.innerHTML = `<h1>$ ${saldo}</h1>`
    tituloModal.innerHTML = 'Saldo actual'
})

const botonDepositos = document.querySelector('#depositos')
botonDepositos.addEventListener('click', () => {
    abrirModal()

    const bodyModal = document.querySelector('#modal div')
    const tituloModal = document.querySelector('#modal h5')

    bodyModal.innerHTML = `
    <input id="nuevoDeposito" placeholder="Ingresa un monto" type="numer" />
    <button id="submitDeposito" type="submit">confirmar</button>`
    tituloModal.innerHTML = 'Depositos'

        const currentUser = JSON.parse(window.sessionStorage.getItem('currentUser'))
        const saldoActual = Number(currentUser.saldo)

        const nuevoDeposito = document.querySelector('#nuevoDeposito')
        const submitDeposito = document.querySelector('#submitDeposito')

        submitDeposito.addEventListener('click', () => {
            const updateCurrentUser = {
                ...currentUser,
                saldo: saldoActual + Number(nuevoDeposito.value),
            }

            window.sessionStorage.setItem('currentUser', JSON.stringify(updateCurrentUser))

            if (updateCurrentUser.saldo > 999) {
                alert ('No puedes tener más de $999 en tu cuenta')
            } else {
                cerrarrModal()
            }
        })
})

const botonRetiros = document.querySelector('#retiros')
botonRetiros.addEventListener('click', () => {
    abrirModal()

    const bodyModal = document.querySelector('#modal div')
    const tituloModal = document.querySelector('#modal h5')

    bodyModal.innerHTML = `
    <input id="nuevoRetiro" placeholder="Ingresa un monto" type="numer" />
    <button id="submitRetiro" type="submit">confirmar</button>`
    tituloModal.innerHTML = 'Retiros'

        const currentUser = JSON.parse(window.sessionStorage.getItem('currentUser'))
        const saldoActual = Number(currentUser.saldo)

        const nuevoRetiro = document.querySelector('#nuevoRetiro')
        const submitRetiro = document.querySelector('#submitRetiro')

        submitRetiro.addEventListener('click', () => {
            const updateCurrentUser = {
                ...currentUser,
                saldo: saldoActual - Number(nuevoRetiro.value),
            }

            window.sessionStorage.setItem('currentUser', JSON.stringify(updateCurrentUser))

            if (updateCurrentUser.saldo < 10) {
                alert ('Debes dejar por lo menos $10 en tu cuenta')
            } else {
                cerrarrModal()
            }
        })
})

const botonSalir = document.querySelector('#salir')

botonSalir.addEventListener('click', () => {
    // const currentUser = JSON.parse(window.sessionStorage.getItem('currentUser'))
    // window.sessionStorage.setItem('currentUser', JSON.stringify(currentUser.saldo))
    window.location.href = './index.html'
})

const botonMovimientos = document.querySelector('#movimientos')

botonMovimientos.addEventListener('click', () =>{
    abrirModal()

    const bodyModal = document.querySelector('#modal div')
    const tituloModal = document.querySelector('#modal h5')

    bodyModal.innerHTML = `<h1>Función no disponible actualmente</h1>`
    tituloModal.innerHTML = 'ERROR'
})

const botonClave = document.querySelector('#cambiarClave')

botonClave.addEventListener('click', () =>{
    abrirModal()

    const bodyModal = document.querySelector('#modal div')
    const tituloModal = document.querySelector('#modal h5')

    bodyModal.innerHTML = `<h1>Función no disponible actualmente</h1>`
    tituloModal.innerHTML = 'ERROR'
})

const botonImprimir = document.querySelector('#imprimir')

botonImprimir.addEventListener('click', () =>{
    abrirModal()

    const bodyModal = document.querySelector('#modal div')
    const tituloModal = document.querySelector('#modal h5')

    bodyModal.innerHTML = `<h1>Función no disponible actualmente</h1>`
    tituloModal.innerHTML = 'ERROR'
})

const botonTransferencias = document.querySelector('#transferencias')

botonTransferencias.addEventListener('click', () =>{
    abrirModal()

    const bodyModal = document.querySelector('#modal div')
    const tituloModal = document.querySelector('#modal h5')

    bodyModal.innerHTML = `<h1>Función no disponible actualmente</h1>`
    tituloModal.innerHTML = 'ERROR'
})