var val1,val2,res, caja
/*v1= parseFloat(prompt("Captura el valor 1"))
v2= parseFloat(prompt("Captura el valor 2"))
//v2.parseFloat(prompt("Captura el valor 2"))
res=v1+v2
alert("La suma de los valores es : "+res)*/

caja=document.getElementById("res")

function calcular(){
    val1=parseFloat(document.getElementById("v1").value)
    val2=parseFloat(document.getElementById("v2").value)
    console.log(val1+" "+val2)
    res=val1 / (val2*val2)
    if (res < 18.5)
        caja.value=res.toFixed(2) + " Bajo peso"
    else if (res < 25)
        caja.value=res.toFixed(2) + " Adecuado"
    else if (res < 30)
        caja.value=res.toFixed(2) + " Sobrepeso"
    else if (res < 35)
        caja.value=res.toFixed(2) + " Obesidad grado 1"
    else if (res < 40)
        caja.value=res.toFixed(2) + " Obesidad grado 2"
    else if (res > 40)
        caja.value=res.toFixed(2) + " Obesidad grado 3"
}
