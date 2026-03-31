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
Con el siguiente código concluí lo siguiente:

Estaba intentando realizar un bucle con el "for", pero para hacerlo de ésa forma, 
tocaba crear otra función que permitiera hacer una pausa en el bucle, 
y de ésa forma, el usuario podía ingresar otro valor.
Pero era hacer que una función dependiera de otra, y éso era muy...raro desde mi gusto.
Me gusta que todo funcione en una sola función, valga la redundancia.

Me acordé de lo que hizo el profe; no usar un ciclo "for" sino usar un arreglo
como una especie de contador, donde los elementos representan los intentos,
y el largo del arreglo puede ser el límite de intentos.

Intenté hacer que "Numeros_Ingresados" y "Numeros_Random" estuvieran dentro de la función,
pero al hacerlo de ésa forma, no se guardan los elementos, y por ende,
tampoco se cuentan los intentos. Así que tocó ponerlos dentro.

Se hicieron diferentes "if" con diferentes propósitos:

"if" Principales
El primer "if" verifica si hay intentos disponible para seguir ejecutando el código
El segundo "if" es cuando se agotan los intentos. Si el usuario no adivina el número y la cantidad de intentos
se agotan, el input se inhabilita y se le muestran los número ingresados
junto con los intentos

"if" Secundarios
Primer "if": En caso de que el usuario adivine el número random,
ése numero se agrega al arreglo, se reemplazan los "textContent" y el input
se inhabilita.
Segundo "if": Es parecido al primer "if", solo que el mensaje de "Acierto"
 y la alerta cambia.
Tercer "if": Es como el segundo "if", solo que se indica 
que el número debe ser mayor.
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
            alert("El número a adivinar es menor. Tiene "+(15-Numeros_Ingresados.length)+" intentos restantes.")
        }

        if (Valor_Ingresado<Numero_Random){
            Numeros_Ingresados.push(Valor_Ingresado)
            document.getElementById("Acierto").textContent="El numero ingresado es INCORRECTO"
            alert("El número a adivinar es mayor. Tiene "+(15-Numeros_Ingresados.length)+" intentos restantes.")
        }
    }
    
    if (Numeros_Ingresados.length>14){
        document.getElementById("Acierto").textContent="Endgame"
        document.getElementById("Cantidad_Intentos").textContent="Numero de intentos: "+Numeros_Ingresados.length
        document.getElementById("Numeros_Ingresados").textContent="Numeros Ingresados: "+Numeros_Ingresados
        document.getElementById("Adivinado").readOnly=true
    }
}


function numero6(){}

function Cual_es_cual(){
    Primer_Ingreso= parseInt(document.getElementById("Numero_1").value)
    Segundo_Ingreso= parseInt(document.getElementById("Numero_2").value)

    if (Primer_Ingreso>Segundo_Ingreso){
        document.getElementById("Respuesta_Numeros").textContent=Primer_Ingreso+" es mayor, y "+Segundo_Ingreso+" es menor."
    }

    if (Segundo_Ingreso>Primer_Ingreso){
        document.getElementById("Respuesta_Numeros").textContent=Segundo_Ingreso+" es mayor, y "+Primer_Ingreso+" es menor."
    }

    if (Primer_Ingreso===Segundo_Ingreso && Segundo_Ingreso===Primer_Ingreso){
    document.getElementById("Respuesta_Numeros").textContent="Ambos números son iguales."
    }
}

/*
N_R_F significa Numeros Relacionados al Factor.
*/
N_R_F=[]
function Factor_Operacion(){
    Numero_I=parseInt(document.getElementById("Numero_Inicial").value)
    Total=1
    if(Numero_I>1){
        for (let p = 1; p <= Numero_I; p++) {
            Total=Total*p
            N_R_F.push(Total)
        }
        document.getElementById("Total_Factor").textContent="El resultado del factor "+Numero_I+" es: "+Total
        document.getElementById("Arreglo_Factor").textContent="Numeros relacionados al factor: "+N_R_F.join(", ")
    }

    if(Numero_I===0){
        document.getElementById("Total_Factor").textContent="El resultado del factor "+Numero_I+" es: 1"
    }

    if(Numero_I===1){
        document.getElementById("Total_Factor").textContent="El resultado del factor "+Numero_I+" es: 0"
    }

    if (Numero_I<0){
        alert("Número Invalido. Digite un numero entero positivo.")
    }
}


function numero9(){}
function numero10(){}
function numero11(){}
function numero12(){}
function numero13(){}
function numero14(){}
function numero15(){}


/*
const Categoria= document.getElementById("Esquema_Tarifario")
Es una variable para determinar una categoria y su valor de HTML a JS.

let Precio=0
Es una variable modificable que se puede alterar a medida
que se van presentando diferentes eventos.

const Radios=document.querySelectorAll('input[name="Tipo_pago"]')
Ésta variable nos permite localizar y rastrear las modificaciones
que se presenten en los <input type="radios" name="Tipo_pago"
 */
const Categoria= document.getElementById("Esquema_Tarifario")
let Precio=Categoria.value
const Radios=document.querySelectorAll('input[name="Tipo_pago"]')

/*
Ésta función se ejecuta automáticamente cuando detecta 
que se selecciona una categoría. Es decir, cuando se presenta
un cambio. Por eso, en la función addEventListener está "change",
para que al registrar un "cambio", se ejecute.
*/
Categoria.addEventListener("change", () => {
    Precio=parseInt(Categoria.value) //Ésta variable toma el valor de la categoría seleccionada (ver HTML). 

    const Metodo_Pago= document.querySelector('input[name="Tipo_pago"]:checked')
/*
A continuación: condicionales.

Si no existe un método de pago o éste no se ha seleccionado,
se crea la alerta para que el usuario seleccione un metodo de pago.
Pero si se seleccionó un metodo de pago, entonces se va al "else" 
que contiene las otras condicionales anidadas, debido a que entonces
sí hay un método de pago seleccionado.

Si el método de pago que seleccionó el usuario es "Efectivo",
el sistema procede a hacer el descuento de un 5% sobre el precio inicial,
y lo muestra en el <input id="Valor_Pagar">.

Ésto se realiza tanto en Categoría.addEventListener como en
Radios.forEach.
¿Por qué?
Porque estamos haciendo que el sistema actué cuando ocurran
cambios, ya sea al momento de seleccionar la categoria,
o al momento de seleccionar el método de pago.
Es decir, a que actué con ocurran cambios en cualquiera
de esas 2 entradas (inputs).
 */
    if (!Metodo_Pago){
        alert("Seleccione un método de pago.")
    }

    else {
        if (Metodo_Pago.value=="Efectivo"){
            Precio_Descuento=Precio-(Precio*0.05)
            document.getElementById("Valor_Pagar").value=Precio_Descuento
        }

        else{
            document.getElementById("Valor_Pagar").value=Precio
        }
    }
});

Radios.forEach(Radio => {
    Radio.addEventListener("change", () => {

        if (Radio.value=="Efectivo"){
            Precio_Descuento=Precio-(Precio*0.05)
            document.getElementById("Valor_Pagar").value=Precio_Descuento
        }

        else{
            document.getElementById("Valor_Pagar").value=Precio
        }

    })
});

function Random(){
    const Tipo_Documento=document.getElementById("T_D").value
    if(Tipo_Documento=="S_D"){
        alert("Ingrese un Tipo de Documento.")
    }


    const Numero_Documento=parseInt(document.getElementById("ID").value)
    if(!Numero_Documento){
    alert("Ingrese un Número de Documento.")
    }


    const Total=parseInt(document.getElementById("Esquema_Tarifario").value)


    const Pago=parseInt(document.getElementById("Pago").value)    
    if(!Pago){
    alert("Ingrese el Valor a Pagar.")
    }


    const Fecha= new Date
    console.log("Tipo de Documento: ",Tipo_Documento,"\n Numero de Documento: "
    ,Numero_Documento,"\n Pago: ",Pago,"\n Tarifa Seleccionada: ",Total,"\n Fecha de pago: ",Fecha)
}