
const usuariosBD = [
    {
        nombre: 'Gabriel Arango',
        email: 'gabrielar@email.com',
        cuenta: 1,
        password: 'Ga1234',
        saldo: 950,
        log: []
    },
    {
        nombre: 'Alexa Perez',
        email: 'alepe@email.com',
        cuenta: 2,
        password: 'Ap1234',
        saldo: 500,
        log: []
    },
    {
        nombre: 'Camila Catro',
        email: 'Camic@email.com',
        cuenta: 3,
        password: 'Cc1234',
        saldo: 320,
        log: [
            {
                fecha: new Date(),
                monto: 100,
                type: 'deposito'
            }
        ]
    }
]

const error = document.querySelector('#errorLogin')
const input = document.querySelector('input')
const form = document.querySelector('#login')

input.addEventListener('focus', () => {
    if (!error.classList.contains('hidden')){
        error.classList.add('hidden');
        form.reset();
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form)
    const { email: loginEmail, password: loginPassword } = Object.fromEntries(data)
    // console.log({email, password})

    for (const usuarioBD of usuariosBD) {
        const { email, password, ...restOfElements } = usuarioBD
        if (email === loginEmail && password === loginPassword) {
            window.sessionStorage.setItem('currentUser', JSON.stringify({...restOfElements, email}))
            window.location.href = './atm.html'
            break; 
        } else {
            error.classList.remove('hidden')
        }
    }
})