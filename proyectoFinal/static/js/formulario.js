const $formulario = document.querySelector('#formulario')

$formulario.addEventListener('submit', handlesubmit)

async function handlesubmit(event){
    event.preventDefault()
    const formulario = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: formulario,
        headers: {
            'Accept': 'application/json'
        }
    })
    if( response.ok ){
        this.reset() //para limpiar el formulario
        alert('Gracias por contactarnos, en breve nos comunicaremos.')
    }
}