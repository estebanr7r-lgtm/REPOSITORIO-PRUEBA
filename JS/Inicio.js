function compras(){
    Valor_Compra=parseInt(document.getElementById("Valor_C").value)
    Valor_Iva=parseInt(document.getElementById("Valor_I").value)

    Suma_Total=Valor_Compra+Valor_Iva

    document.getElementById("resultado_c").value=Suma_Total

    document.getElementById("resultado_texto_c").textContent="El resultado es: "+Suma_Total
}


function A_P(){
    Valor_Area=parseInt(document.getElementById("Lado_C").value)

    Valor_A_F=Valor_Area*Valor_Area
    Valor_P_F=Valor_Area*4

    document.getElementById("Area_C").textContent="El area del cuadrado es: "+Valor_A_F
    document.getElementById("Perimetro_C").textContent="El perimetro del cuadrado es: "+Valor_P_F
}

 
function U_D(){
    Digitos_ingresados=parseInt(document.getElementById("Two_numbers").value)

    if (Digitos_ingresados>=10 && Digitos_ingresados<=100){
    Decenas=Math.floor(Digitos_ingresados/10)
    Unidades=Digitos_ingresados%10

    document.getElementById("Resultado_D").textContent="Numero de decenas: "+Decenas
    document.getElementById("Resultado_U").textContent="Numero de unidades: "+Unidades
    }
    else {
        alert("Por favor, digite un numero entre 10 y 100")
    }
}


function Comensales(){
    Cantidad_Comensales= parseInt(document.getElementById("Numero_Comensales").value)

    Cantidad_Patatas=Cantidad_Comensales*200
    Cantidad_Huevos=Cantidad_Comensales*1
    Cantidad_Cebollas=Cantidad_Comensales*60

    document.getElementById("Patatas").textContent="Cantidad de Patatas: "+Cantidad_Patatas+" gr"
    document.getElementById("Huevos").textContent="Cantidad de Huevos: "+Cantidad_Huevos
    document.getElementById("Cebolla").textContent="Cantidad de Cebolla: "+Cantidad_Cebollas+" gr"
}

/*
Con el siguiente código concluí lo siguiente.
Estaba intentando realizar un bucle con el "for", pero para hacerlo de ésa forma, tocaba crear otra función que permitiera hacer una pausa en el bucle, y de ésa forma, el usuario ingresara otra pregunta.
Pero era hacer que una función dependiera de otra, y éso era muy ilógico.

Me acordé de lo que hizo el profe; no usar un ciclo "for" sino usar el arreglo como una especie de contador que iba a contener los numeros ingresados como elementos.
En el próximo código, vámos a hacer varias cosas.


*/

Numeros_Ingresados=[]
Numero_Random=Math.floor(Math.random()*100)+1

function Adivinanza(){
    
    Valor_Ingresado=parseInt(document.getElementById("Adivinado").value)
    
    if (Numeros_Ingresados.length<=14){
        if (Valor_Ingresado===Numero_Random){
            Numeros_Ingresados.push(Valor_Ingresado)
            document.getElementById("Acierto").textContent="El numero ingresado es CORRECTO"
            document.getElementById("Cantidad_Intentos").textContent="Numero de intentos: "+Numeros_Ingresados.length
            document.getElementById("Numeros_Ingresados").textContent="Numeros Ingresados: "+Numeros_Ingresados
            document.getElementById("Adivinado").readOnly = true
        }

        if (Valor_Ingresado>Numero_Random) {
            Numeros_Ingresados.push(Valor_Ingresado)
            document.getElementById("Acierto").textContent="El numero ingresado es INCORRECTO"
            alert("El número es menor. Tiene "+(15-Numeros_Ingresados.length)+" intentos restantes.")
        }

        if (Valor_Ingresado<Numero_Random){
            Numeros_Ingresados.push(Valor_Ingresado)
            document.getElementById("Acierto").textContent="El numero ingresado es INCORRECTO"
            alert("El número es mayor. Tiene "+(15-Numeros_Ingresados.length)+" intentos restantes.")
        }
    }
    
    if (Numeros_Ingresados.length>14){
        document.getElementById("Acierto").textContent="Endgame"
        document.getElementById("Adivinado").readOnly=true
    }
}


function numero6(){}
function numero7(){}
function numero8(){}
function numero9(){}
function numero10(){}
function numero11(){}
function numero12(){}
function numero13(){}
function numero14(){}
function numero15(){}

function Random(){}