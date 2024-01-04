//estamos llamando a el btn y la ventana Modal que existen en el html
//const nombreVariable = 10
//deseo buscar el elemento con el id btnModal en el HTML
const btnModalVariable = document.getElementById("btnModal");

const ventanaModalVariable = document.getElementById("ventanaModal");

console.log(btnModalVariable);

//despues que lo obtengo como btnModalVariable
//addEventListener me permite escuchar eventos como quien escucha un interruptor una llamada
//al ejecutarse el evento se dispara una funcion que es una acción a ejecutar
btnModalVariable.addEventListener('click', function(){
    //es hacer una transformacion que me pide bootstrap
    const modal = new bootstrap.Modal('#ventanaModal');
    modal.show()

})