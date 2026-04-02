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





/*
Creamos un arreglo que va a ir guardando los número generados por la fórmula Fibonacci.
"Numero_Inicio_1" y "Numero_Inicio_2" van a ser las bases para que la operación
Fibonacci funcione. Algunas fórmulas muestran que los 2 números bases inician con
("1" - "1") y otras con ("0" - "1"). Yo escogí la segunda, puesto que la mayoría de las
cosas inician desde 0.

En el bucle "for" hacemos algo muy interesante y a la vez muy confuso; 
se entiende mejor cuando se escribe sobre papel.
Puesto que la operación sólo se inicia con dos números,
vámos a jugar con el resultados que generan éstos dos.

Le decimos al sistema que "Numero_Acumulador" es 
el resultado de la suma de ("Numero_Inicio_1") y ("Numero_Inicio_2").
Aquí viene lo confuso.

Vámos a modificicar las variables dentro del bucle y a reemplazar su valor,
de forma que, cuando termine una iteración, éstas variables tengan nuevos valores
para el cálculo de la próxima iteración.

Para ello, le decimos al sistema:

"Numero_Inicio_1" ahora va a tener el valor de "Numero_Inicio_2".
Y "Numero_Inicio_2" ahora va a tener el valor de "Numero_Inicio_2".

De tal manera que ocurre lo siguiente:

Operación Inicial
Numero_Inicio_1=0
Numero_Inicio_2=1
Numero_Acumulador=Numero_Inicio_1+Numero_Inicio_2

Por ende:
(Numero_Inicio_1) 0 + (Numero_Inicio_2) 1 = (Numero_Acumulador) 1

Y luego
(Numero_Inicio_1) 1 + (Numero_Inicio_2) 1 = (Numero_Acumulador) 2

Y luego:
(Numero_Inicio_1) 1 + (Numero_Inicio_2) 2 = (Numero_Acumulador) 3

Y luego:
(Numero_Inicio_1) 2 + (Numero_Inicio_2) 3 = (Numero_Acumulador) 5

Y así sucesivamente, se van cambiando las posiciones de las variables
involucradas en la ecuación.

Por último, le decimos al sistema que imprima el último valor 
almacenado en el arreglo, y luego muestre el arreglo completo.
*/





function Fibonacci(){
    Elementos_Fibonacci=[]
    Numero_Inicio_1=0
    Numero_Inicio_2=1
    
    Ingreso=parseInt(document.getElementById("Secuencia").value)

    for (let r = 1; r <= Ingreso; r++) {
        Numero_Acumulador=(Numero_Inicio_2+Numero_Inicio_1)
        Elementos_Fibonacci.push(Numero_Acumulador)
        Numero_Inicio_1=Numero_Inicio_2
        Numero_Inicio_2=Numero_Acumulador
        console.log("iteración"+r)
    }
    document.getElementById("Resultado_F").textContent="El número al final de la secuencia es: "+Elementos_Fibonacci.at(-1)
    document.getElementById("Arreglo_Secuencia").textContent="La secuencia es: "+Elementos_Fibonacci
}





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
N_R_F
Significa Numeros Relacionados al Factorial. 
Éste arreglo conserva ésos números obtenidos por el factor.

Numero_I
Ésta es la variable que captura el numero ingresado por el usuario.
Con ésta variable, vamos a crear un bucle "for" donde el límite va
a ser determinado por ésta variable.

Total=1
Ésta variable va a ir aumentando gradualmente por el comando
Total=Total*1, donde se le está indicando el sistema que se almacene
en el bucle el resultado de una multiplicación, y el resultado de ésa
multiplicación luego se volverá el inicio de la operación en la próxima
iteración. 
Resultado 5!= (1*1=1), (1*2=2), (2*3=6), (6*4=24), (24*5=120)
Ecuación=(Total*Numero_Iteración)=(Nuevo_Total)
*/
N_R_F=[]
function Factorial_Operacion(){
    Numero_I=parseInt(document.getElementById("Numero_Inicial").value)
    Total=1
    if(Numero_I>1){
        for (let p = 1; p <= Numero_I; p++) {
            Total=Total*p
            N_R_F.push(Total)
        }
        document.getElementById("Total_Factor").textContent="El resultado del factorial "+Numero_I+" es: "+Total
        document.getElementById("Arreglo_Factor").textContent="Numeros relacionados al factorial: "+N_R_F.join(", ")
    }

    if(Numero_I===0){
        document.getElementById("Total_Factor").textContent="El resultado del factorial "+Numero_I+" es: 1"
    }

    if(Numero_I===1){
        document.getElementById("Total_Factor").textContent="El resultado del factorial "+Numero_I+" es: 0"
    }

    if (Numero_I<0){
        alert("Número Invalido. Digite un numero entero positivo.")
    }
}





Multiplos_Contenedor=[]
function Multiplo_Numeros(){
    Numero_1=parseInt(document.getElementById("Primer_Numero").value)
    Numero_2=parseInt(document.getElementById("Segundo_Numero").value)

    if(Numero_1>Numero_2){
        Multiplos_Contenedor.unshift(Numero_2)
        for (let i = Numero_2; i < Numero_1; i++) {
            Calculo=6*i
            Multiplos_Contenedor.push(Calculo)
        }
        Multiplos_Contenedor.push(Numero_1)
    }

    if (Numero_1<Numero_2){
        Multiplos_Contenedor.unshift(Numero_1)
        for (let i = Numero_1; i < Numero_2; i++) {
        Calculo=6*i
        Multiplos_Contenedor.push(Calculo)
        }
        Multiplos_Contenedor.push(Numero_2)
    }

    document.getElementById("Multiplos").textContent=Multiplos_Contenedor.join(' - ')
}





Inicial=[]
Pares=[]
Impares=[]
function Arreglo_20(){
    
    for (let a = 1; a <=20; a++) {
        Numeros_Alazar=Math.floor(Math.random()*101)
        Inicial.push(Numeros_Alazar)

        if(Numeros_Alazar%2==0) {
            Pares.push(Numeros_Alazar)
        }

        if(Numeros_Alazar%2==1){
            Impares.push(Numeros_Alazar)
        }
    }
    document.getElementById("A_Inicial").textContent="Arreglo Inicial: "+Inicial.join(' - ')
    document.getElementById("A_Pares").textContent="Arreglo - Pares: "+Pares.join(' - ')
    document.getElementById("A_Impares").textContent="Arreglo - Impares: "+Impares.join(' - ')
}

 
Normal=[]
function Generar_Arreglos_3(){
    for (let l = 0; l < 10; l++) {
        Numero_A=Math.floor(Math.random()*(20 - 10 + 1)+10)
        Normal.push(Numero_A)  
    }

    let Multiplos_3= Normal.filter(elemento => elemento %3 !==0)
    
    document.getElementById("Arreglo_Normal").textContent="Arreglo Normal: "+Normal
    document.getElementById("Arreglo_3").textContent="Arreglo sin multiplos de 3: "+Multiplos_3
}





/* 
El siguiente ejercicio se realiza de la siguiente manera.

Traemos los valores de lados ingresados en los input de HTML y
luego los renombramos en JS para poderlos manejar para ecuaciones.

El ejercicio inicialmente decía que se tenían que calcular el área de un triángulo
con base a los tres lados ingresados por el usuario, así mismo como el tipo de triangulo
de acuerdo a las medidas de los lados.
Sin embargo, estuve investigando y encontre que la manera de calcular el área
de un triángulo es por usando la fórmula ((altura * base)/2), cosa que en éste caso
no servía ya que teníamos los lados, más no la base ni la altura como tal.
Además, la fórmula anterior tiende a servir más para triángulos tipo Isosceles.
Así que, por la forma en que está escrito el ejercicio, preferí hacer tanto el perímetro
como el área del triángulo. 

Por ello, investigue un poco más, y encontré la fórmula de Herón.
La fórmula dice que si tienes la medida de los tres lados del triángulo,
entonces ya puedes calcular el Semiperimetro con el cual también se podría
calcular el área.

Semiperimetro = (Lado 1 + Lado 2 + Lado 3)/2

Entonces, una vez que ya sabemos cómo calcular el Semiperimetro,
hacemos la siguiente fórmula.

Área del Triangulo = (RaizCuadrada(Semiperimetro*(Semiperimetro - Lado 1)*(Semiperimetro - Lado 2)*(Semiperimetro - Lado 3))).

De ésa forma resolvemos el problema del área y del perímetro del triángulo.

Pero entonces, ¿cómo se supone que voy a saber si es un triángulo equilatero, isosceles, o Escaleno?
Buscando un poco más, y teniendo en cuenta que fue más fácil encontrar éste dato que el de la fórmula de Herón,
se sabe que si todos los lados de un triángulo son iguales, es equilatero.
Si solo 2 de los 3 lados son iguales, entonces es Isosceles.
Y si ninguno de los lados son iguales entre sí, entonces es escaleno.

Teniendo ello en mente, le decimos al sistema que por medio del primer "if",
verifique que sí o sí todos los lados digitados por el usuario sean iguales.
De ser así, manda el mensaje en texto de que el triángulo es equilatero.
Si alguno de los 3 lados no es igual, el sistema revisa si al menos hay 2 lados iguales
para determinar si es Isosceles, y de ser así, mandar el mensaje en texto
de que es Isoceles. Éso lo hace el "else if".
Si no se cumple el primer "if" ni tampoco el "else if", entonces el sistema procede
con el "else" para mandar el mensaje de texto de que es un triángulo escaleno.

Ésa...es la lógica detrás del código.
*/
function Triangulo(){
    Primer_Lado = parseInt(document.getElementById("Lado_1").value)
    Segundo_Lado = parseInt(document.getElementById("Lado_2").value)
    Tercer_Lado = parseInt(document.getElementById("Lado_3").value)

    Perimetro=Primer_Lado+Segundo_Lado+Tercer_Lado
    Medida_Area_T= Primer_Lado
    Semiperimetro=Perimetro/2
    Area_T=Math.sqrt(Semiperimetro*(Semiperimetro-Primer_Lado)*(Semiperimetro-Segundo_Lado)*(Semiperimetro-Tercer_Lado))
    console.log(Area_T)

    if (Primer_Lado===Segundo_Lado && Segundo_Lado===Tercer_Lado){
        document.getElementById("Tipo_Triangulo").textContent="El triángulo es: Equilatero."
    }

    else if (Primer_Lado===Segundo_Lado || Segundo_Lado===Tercer_Lado || Primer_Lado===Tercer_Lado){
        document.getElementById("Tipo_Triangulo").textContent="El triángulo es: Isosceles."
    }

    else {
        document.getElementById("Tipo_Triangulo").textContent="El triángulo es: Escaleno."
    }

    document.getElementById("Perimetro_Triangulo").textContent="El perímetro del triangulo es: "+Perimetro
    document.getElementById("Area_Triangulo").textContent="El área del triángulo es: "+Medida_Area_T
}





/* 
El siguiente ejercicio me parecía bastante sencillo...pero en realidad me tomó mucho tiempo.

En especial porque no sabía que función usar. Busque en varias partes cómo hacerlo
y la mayoría ingresaba las palabras por consola más no las estudiaba por listas o arreglos.

Por ende, ésos ejercicios no me servían.

Investigué más y encontré que existía la función forEach() o map().
Como se puede ver en el ejercicio, implemente forEach; no por alguna característica en particular,
sino porque fue la primera función que encontré al buscar solución al problema.
A medida que fuí avanzando encontré map() pero no sé si sería una buena opción o no.
Parece ser que, a pesar de ser otra función, conducía al mismo resultado; solo que
cada función se ejecuta diferente obviamente.

Ahora sí; la explicación oficial.

Creamos una lista con una cantidad de palabras; la lista se llama "Palabras".
Luego, creamos una lista donde almacenan palabras al azar de la lista "Palabras"
Ésta segunda lista se llama "Palabras_Alazar".

Ésto se hizo con el fin de hacer el ejercicio más dinámico.
Más adelante se verá por qué.

Posteriormente, creamos otra lista donde se van a guardar la cantidad
de carácteres por cada una de las palabras en la lista "Palabras_Alazar".
Ésta lista se llama "Carácteres_por_Palabra".

Y por último, un acumulador que va a sumar la cantidad de carácteres de cada palabra
para dar el total de los mismos si todos los carácteres en la lista
fuesen una oración.

En el primer bucle "for", le decimos al sistema que va a seleccionar 5 palabras
al azar de la lista llamada "Palabras".
Para ello, va a tomar como referente la longitud del arreglo como
el límite de los números al azar que puede escoger.
En éste caso, el límite para escoger un número al azar es de 0 a 14.
Ahora, cuando el sistema ya elige un número al azar de 0 a 14, va a tomar
ése número cómo el localizar del elemento (el índice), y va tomar el elemento
que se encuentra en él para luego agregarlo a la lista "Palabras_Alazar".

Ahora que ya tiene las palabras, debe tomar los carácteres de cada una de ellas.
Aquí vamos a usar la función forEach (que es una función flecha), donde le decimos
al sistema que va a recorrer elemento por elemento de la lista "Palabras_Alazar",
y que cuando pase por cada elemento, 
tome la longitud del elemento (que sería la cantidad de carácteres en la palabra),
agrege la longitud del elemento en cuestión a la lista "Caracteres_por_Palabra",
y además, vaya acumulando en la variable "Cantidad_Total_Caracteres" ésa longitud.

Así, al final, tendremos en la lista "Caracteres_por_Palabra" la cantidad de
carácteres que contiene cada palabra de la lista "Palabras_Alazar",
y en "Cantidad_Total_Caracteres" tendremos la suma total de todos los carácteres
de todas las palabras de ésa misma lista ("Palabras_Alazar").

Finalmente, las mandamos como mensaje en texto a la página de HTML.
*/
function Caracteres(){
    Palabras=["Avión","Aeropuerto","Pasaporte","Equipaje","Servicios","Comidas","Restaurantes","Hoteles","Transporte","Pertenencias","Reservas","Turismo","Visitas","Fotografías","Aduanas",]
    Palabras_Alazar=[]
    Caracteres_por_Palabra=[]
    Cantidad_Total_Caracteres=0
    for (let z = 1; z <= 5; z++) {
        P_Alazar=Math.floor(Math.random()*Palabras.length)
        Palabras_Alazar.push(Palabras[P_Alazar])
    }
    
    Palabras_Alazar.forEach(elemento => {
        Caracteres_por_Palabra.push(elemento.length)
        Cantidad_Total_Caracteres=Cantidad_Total_Caracteres+(elemento.length)
    })

    document.getElementById("Arreglo_Palabras").textContent="El arreglo creado para éste ejercicio es: "+Palabras_Alazar
    document.getElementById("Caracteres_Palabra").textContent="La cantidad de carácteres por palabras es: "+Caracteres_por_Palabra
    document.getElementById("Caracteres_Oracion").textContent="La cantidad de carácteres totales en la oración son: "+Cantidad_Total_Caracteres
}





/*
Con respecto a la siguiente función, vámos a aclarar lo siguiente.

Creamos el arreglo que va a guardar 10 números que se generen al azar, el cual es "Arreglo_S_Modificar".

Usando un ciclo "for", dentro de él, creamos una variable
que va a hacer números al azar entre el 0 y 10.
"Math.random" crea un número al azar en decimales, mientras que "Math.floor" 
redondea ése número.
Una vez que se crea el número random en la iteración correspondiente, 
antes de empezar la próxima iteración, envíamos ése número al arreglo "Arreglo_S_Modificar".

El otro arreglo que vámos a crear ("Arreglo_Algorit"), es para invertir el arreglo principal
usando un bucle "for"...a diferencia de que éste bucle lo vámos a realizar de forma invertida.

Una vez creado el arreglo "Arreglo_S_Modificar" con sus elementos, creamos una valiable
que represente la longitud de éste arreglo, el cual se va a llamar "Longitud_Arreglo".
Ésta variable sirve para determinar la cantidad de veces que se vá a repetir el bucle,
pero además de éso, también sirve para indicar el índice donde se ubican los elementos en el arreglo.
Con la Longitud del arreglo y el descontador ("index--"), el sistema empezará por el índice 10 y 
luego descontará 1 índice, y así será indice 9, y luego descontará 1 índice, y ahora será índice 8. 
Y así sucesivamente.

¿Por qué le descontamos -1 a "Longitud_Arreglo"?
Porque el arreglo contiene 10 elementos con las siguientes posiciones [0,1,2,3,4,5,6,7,8,9].
Si dejamos la cantidad de elementos, como si fueran el número de índices (posiciones), 
el sistema creará un nuevo elemento que será "undefined" debido a que no existe la posición 10.

Así que, al hacer "Arreglo_S_Modificar.length", conocemos la CANTIDAD de elementos en el arreglo,
más no la POSICIÓN de ellos.

El sistema empieza a contar los elementos desde 1, lo cual sería (1-10).
Pero al contar las posiciones, el sistema empieza a contar desde 0, lo cual sería (0-10).
Por tanto, de acuerdo a lo que hicimos, quedaría:
ELEMENTOS[ ,1,2,3,4,5,6,7,8,9,10]
POSICION [0,1,2,3,4,5,6,7,8,9,10] 

El "0" va a sobrar, porque solo existen 10 elementos, no 11; 
como son 11 posiciones (incluyendo el 0), una de ésas posiciones va a quedar vacía.
Así que, cuando restamos -1 a la longitud del arreglo, ya no quedaría (0-10) sino (0-9).

Así, cada POSICION tendrá un número (elemento) correspondiente, quedando de la siguiente forma:
ELEMENTOS[1,2,3,4,5,6,7,8,9,10]
POSICION [0,1,2,3,4,5,6,7,8,9]
De ésta forma, al elemento "1" le corresponde la posición "0", 
el elemento "2" le corresponde la posición "1",
el elemento "3" le corresponde la posición "2", y así sucesivamente. 

Y el último arreglo que vámos a hacer, contiene la función ".reverse()".
La función por sí sola, toma el arreglo original y modifica sus elementos para ponerlos
de forma invertida. 
¿Qué significa? Que básicamente, el sistema va a borrar el arreglo original para poder modificarlo.
Éso no es lo que quiero; quiero que lo conserve.
Y como quiero que lo conserve, hacemos lo siguiente: "Arreglo_Reverso=[...Arreglo_S_Modificar].reverse()".

¿Qué es lo que le estoy indicando al sistema?
Le estoy diciendo: 
Vas a crear un arreglo vacio llamado "Arreglo_Reverso". 
Ése arreglo, va a ser la copia o el duplicado del "Arreglo_S_Modificar".
Una vez teniendo el duplicado, vas a modificar los elementos de ése duplicado 
para organizarlos de forma invertida.

La función "".reverse()"" hace prácticamente todo el trabajo...solo que trabaja en conjunto
con algo que, no sabía que se podía hacer.

Cuando agregas 3 puntos suspensivos (...) seguidos del nombre del arreglo,
es como si se le estuviera diciendo al sistema:
Necesito que crees una copia o duplicado del arreglo "Arreglo_S_Modificar",
de forma que todo lo que vayamos a hacer afecte al duplicado, más no al arreglo original.
Y ahora con éste duplicado, vas a a invertir sus elementos.

De ésa forma, con la función ".reverse()", tenemos el arreglo al revés.
 */
function AlReves(){
    Arreglo_S_Modificar=[]
    Arreglo_Algorit=[]

    for (let index = 1; index <=10 ; index++) {
        N_Random=Math.floor(Math.random()*10)+1
        Arreglo_S_Modificar.push(N_Random)
    }

    Longitud_Arreglo=Arreglo_S_Modificar.length - 1

    for (let index = Longitud_Arreglo; index >=0 ; index--) {
        Arreglo_Algorit.push(Arreglo_S_Modificar[index])
    }

    console.log(Arreglo_Algorit)

    Arreglo_Reverso=[...Arreglo_S_Modificar].reverse()
    
    document.getElementById("Sin_modicicaciones").textContent="Arreglo Inicial :"+Arreglo_S_Modificar
    document.getElementById("A_algoritmo").textContent="Arreglo Algorítmicamente Invertido: "+Arreglo_Algorit
    document.getElementById("A_Reverse").textContent="Arreglo Reverso: "+Arreglo_Reverso
}





/*
Éste ejercicio va a ser algo difícil de describir, pero voy a hacer mi mejor intento.

Empecemos por el hecho de que, sobre la marcha...me dí cuenta que, no tenía claro para qué
era "querySelector" y "querySelectorAll". 
Sé que el profe los usó, pero ya no me acordaba para qué era que se usaban.
Algo similar ocurrió con addEventListener.

querySelectorAll
Se usa cuando queremos encontrar varios elementos de HTML con el mismo 
tipo de clase, nombre o tipo de etiqueta (inputs, parrafos, o labels, por ejemplo).

querySelector
Lo utilizamos para buscar algo más en específico.
Es decir, si "querySelectorAll" es para buscar varias cosas,
ésta herramienta solo sirve para buscar una cosa en específico.

addEventListener
Se utiliza para cuando necesitamos que el sistema reaccione ante cierta situación
provocada por el usuario; puede ser un click, un cambio, el cursor sobre una acción,
o cosas similares.

Aquí viene lo interesante; cuando estaba realizando éste código,
estaba tratando de realizar una "function" que 
iba a operar cuando el usuario presionara un botón. 
El problema: cuando dejé la "function"
y el "addEventListener", el sistema tenía que ejecutar dos cosas por la misma acción:
la función ejecutada por el botón, y la reacción del "addEventListener".
Y éso causaba que, como usuario, tuviera que hacer doble click sobre el botón para que porfin se
ejecutara el addEventListener. 
Por ésa razón, sólo deje el "addEventListener";
porque el sistema podía operar directamente sin depender de una función llamada por el botón.

Ahora, voy a explicar un poco más la teoría interna.

Lo que le indicamos al sistema por medio de la función "Opciones.forEach", 
es que debía leer cada uno de los <input type radios> que estaban capturados en la variable
"Opciones", donde cada uno de esos <input type radios> se iba a llamar
"Opcion_Seleccionada". Y si encontraba que alguno de éstos <input type radios>
había sido seleccionado por el usuario (es decir, "checked"), 
entonces, procedía a comparar su valor para así llegar a proceder con la ecuación correspondiente. 

Para que éste texto no sea tan largo, voy a aclarar brevemente qué hace cada variable a continuación.
*/
const Opciones=document.querySelectorAll('input[name="operacion"]') //Capturamos todos los <input type radios>.
const Boton_operaciones=document.querySelector('button[name="Importante"]') //Capturamos al botón por medio del nombre (también se puede por el id si se quiere).

Boton_operaciones.addEventListener("click", () => {  //Le decimos al sistema que esté atento cuando el usuario de click al botón. De ser así, procede a ejecutar lo tabulado en la misma función.  

    Opciones.forEach(Opcion_Seleccionada  => {  //El sistema leerá cada <input type radio> capturado en "Opciones", donde cada <input type radio> va a ser un elemento llamado "Opcion_Seleccionada".


        const A =parseInt(document.getElementById("Ingreso_Numero_1").value) //Traemos el primer número ingresado por el usuario y lo nombramos en JS.
        const B =parseInt(document.getElementById("Ingreso_Numero_2").value) //Traemos el segundo número ingresado por el usuario y lo nombramos en JS también.


            if(Opcion_Seleccionada.checked){ //Si algún <input type radio> fue seleccionado (.checked) por el usuario, pasa el primer filtro (es decir, pasa el primer "if").
                if (Opcion_Seleccionada.value=="Adicion"){  //Cuando pasa el primer filtro, el sistema entra a comparar su valor. Si su valor concide con algún "if", el sistema ejecutara la función dentro de ése "if". 
                Resultado_Adicion=A+B
                document.getElementById("Resultado_Operaciones").textContent=Resultado_Adicion //Finalmente, se ejecuta la operación y el sistema procede a mandar el mensaje en texto. 
            }
            if (Opcion_Seleccionada.value=="Sustraccion"){
                Resultado_Sustraccion=A-B
                document.getElementById("Resultado_Operaciones").textContent=Resultado_Sustraccion
            }
            if (Opcion_Seleccionada.value=="Multiplicacion"){
                Resultado_Multiplicacion=A*B
                document.getElementById("Resultado_Operaciones").textContent=Resultado_Multiplicacion
            }

            if (Opcion_Seleccionada.value=="Division"){
                if(A==0 || B==0){
                    alert("No se puede dividir con 0 Por favor elija otro número.")
                }
                Resultado_Division_1=A/B
                document.getElementById("Resultado_Operaciones").textContent=Resultado_Division_1
            }
        }
    })
})





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

    if(Tipo_Documento !=="S_D"){
        if(Numero_Documento){
            if(Pago){
            console.log("Tipo de Documento: ",Tipo_Documento,"\n Numero de Documento: "
            ,Numero_Documento,"\n Pago: ",Pago,"\n Fecha de pago: ",Fecha)
            
            }
        }
    }
}