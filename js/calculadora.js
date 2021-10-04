let firstValue = document.getElementById('n1');
let secondValue = document.getElementById('n2');


function prueba(operation) {
    if (firstValue.value === `` || secondValue.value === ``){
        alert("Aún no has ingresado ambos valores")
    } else {
    const operator = operation.target.textContent
    let resultado = eval (` ${firstValue.value} ${operator} ${secondValue.value}`);
    alert(`El resultado es ${resultado}`)
    }
}
 document.getElementById('btngrup').addEventListener('click', prueba);

