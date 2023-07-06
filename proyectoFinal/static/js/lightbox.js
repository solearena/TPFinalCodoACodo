document.addEventListener('DOMContentLoaded', () =>{
    
    const imagenes = document.querySelectorAll('.img_galeria');
    const imagenLight = document.querySelector('.agregar-imagen');
    const contenedorLight = document.querySelector('.imagen-light')
    const closeLight = document.querySelector('.close')
    imagenes.forEach(imagen => {
        imagen.addEventListener('click',()=>{
            aparecerImagen(imagen.getAttribute('src'));
        })
    });
    
    contenedorLight.addEventListener('click',(e)=>{
        if(e.target !== imagenLight){
            contenedorLight.classList.toggle('show')
            imagenLight.classList.toggle('showImage')

        }
    })
    
    
    const aparecerImagen = (imagen)=>{
        imagenLight.src = imagen;
        contenedorLight.classList.toggle('show')
        imagenLight.classList.toggle('showImage')
    }
})








/* const imagen = document.querySelectorAll('.img_galeria');
const imagenLight =document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');

console.log(imagen)
console.log(imagenLight)
console.log("hola")

const aparecerImg = (img)=>{
    imagenLight.src = img;
    contenedorLight.classList.toggle('show');
    imagenLight.classList.toggle('showImage');
}
imagen.forEach(img =>{
    img.addEventListener('click', ()=>{
        alert("hola")
        aparecerImg(img.getAttribute('src'))
    })
})

contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenLight){
        contenedorLight.classList.toggle('show');
        imagenLight.classList.toggle('showImage')
    }
})
 */