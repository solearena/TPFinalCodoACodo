let url = 'https://sheetdb.io/api/v1/lbiuac38f6dpe' //variable donde hacemos referencia al origen de los datos
var contenido = document.querySelector('#contenido')

fetch(url) //solicitud a la url
    .then(data => data.json()) //se resuelve la promesa, al obtener la respuesta la pasa a un determinado formato (json). Extraemos el contenido JSON desde la respuesta.
    .then(data => {
        console.log(data) //mostramos el objeto data por consola
        /* contenido.innerHTML = 
        `<P>Nombre: ${data[0].nombre}</P>`; */
        let result = ''
        for (let i = 0; i<data.length; i++){
          /* result += `<tr>
                      <td >${data[i].nombre}</td>
                      <td >${data[i].apellido}</td>
                      <td >${data[i].lenguaje}</td>
                      <td >${data[i].proyecto}</td>
                      <td >${data[i].marca}</td>
                      <td ><img src="${data[i].imagen}" alt="" class="img_galeria"></td>
                      
                    </tr> */
            result += `
        <div class= "tarjeta" >
            <img src="${data[i].imagen}" alt="" />
            <div class="textocard">
              <h4>Proyecto: ${data[i].marca}</h4>
              <p> Desarrollado por ${data[i].nombre} ${data[i].apellido}</p>
              <p> ${data[i].proyecto}</p>
              <p> ${data[i].lenguaje}</p>
            </div>
        </div>`
        }
          document.getElementById("contenido").innerHTML = result; 
        })
    .catch(error => console.log("Ocurrió un error", error)) // si hay un error será atrapado por catch