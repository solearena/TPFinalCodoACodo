(function() {
    const titleQuestion = [...document.querySelectorAll('.questions__title')];
 
    titleQuestion.forEach(question => {
        question.addEventListener('click', () => {
            let height = 0;
            let answer = question.nextElementSibling; // obtiene el hermano siguiente de question(titulo), que es el p
            let addPadding = question.parentElement.parentElement; //obtengo el padre del padre de question(title)   
                                                                    //  que es question__padding
            addPadding.classList.toggle('questions__padding--add');

            //Para voltear la flecha del question
            question.children[0].classList.toggle('questions__arrow--rotate');

            //Si es 0 es porque le quitamos el height
            if(answer.clientHeight === 0){
                //quiero q muestre el p
                height = answer.scrollHeight; // scroollheight nos da el alto minimo para que un elemento se muestre
            }

            answer.style.height = `${height}px`; //estoy asignando el height del if a los estilos de title
        })
    });
    
})();