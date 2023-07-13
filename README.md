# Hub de juegos

## PROYECTO 6: Hub de juegos - EN DESARROLLO

## Descripción

Este proyecto puede llevarse al alcance que cada cual estime posible dentro de lo que hemos aprendido y sabemos poner el práctica. Vamos a crear un Hub de juegos en el que tendremos tres actividades sobre las que elegir.

## <a href="https://pasatiempos.netlify.app/">- ENLACE DE VISUALIZACIÓN </a>

## Requerimentos
<ul>
<li> [✅] TRES EN RAYA </li>
[✅] Tendrás que usar React Router para crear una página o ruta específica para este juego en /tictactoe. En la pantalla encontraremos:<br>
[✅] 1. Un botón para comenzar partida, que dependa del estado isStarted (yo he usado otra forma), esta será un boolean. Si el juego ha comenzado, el botón debe poder acabar la partida en cualquier momento y resetear la información. <br>
[✅] 2. Un mensaje que indique el jugador actual. Como en este juego usaremos el símbolo X para un jugador y el O para otro (¡puedes cambiarlos a tu gusto, usa emojis si prefieres!), informaremos de esto en el mensaje.  Por ejemplo: Es el turno de X o Es el turno de O.<br>
[✅] 3. Un tablero que será un estado que actualizaremos, y consistirá de un array de arrays de 3x3 en el que tendremos cada casilla o celda con un valor inicial null, aquí un ejemplo <br>

    [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]

[✅] 4. Cada celda podrá ser un botón que, al ser clickado, añada el símbolo del jugador al array: <br>

    [
        ['X', null, null],
        ['O', 'X', null],
        [null, null, 'O'],
    ]

[✅] 5. Usando un sistema de turnos a través de otro elemento del estado, validaremos si el juego ha terminado cuando un jugador haya conseguido que su símbolo correspondiente esté repetido en las siguientes condiciones:.<br>

    1 - Todas las celdas de una fila son del mismo símbolo
    2 - Todas las celdas de una columna son del mismo símbolo
    3 - Todas las celdas de una diagonal son del mismo símbolo

[✅] 6. Te recomendamos comprobar cada caso por separado siempre que un jugador cualquiera añada un nuevo símbolo al tablero (useEffect podría ser buena idea para lanzar la comprobación).<br>
[✅] 7. Cuando el tablero se llene sin un jugador ganador, tendremos un empate y el juego terminará y todo volverá al estado original.<br>

<li> [✅] EL AHORCADO </li>
[✅] Tendrás que usar React Router para crear una página o ruta específica para este juego en /hangman.<br>
[✅] Para empezar, te recomendamos que busques una lista de N palabras (10 como mínimo) para jugar al ahorcado.<br>
Ahora, esperaremos que la pantalla contenga:<br>
[✅] 1. Crea un botón de empezar partida que al ser clickado recoja una palabra aleatoria del array de palabras y genere la pista inicial:<br>
    
    Palabra: 'Coche'
    Pista: _ _ _ _ _

[✅] 2. Crea ahora un sistema de input de letras por parte de los usuarios, ya sea un conjunto de botones con el abecedario, un input, que cada letra de la pista sea un botón inicialmente... Te dejamos libertad completa, la idea es que el usuario podrá clickar o introducir letras en el juego para ser usadas en la solución <br>
[✅] 3. Cada vez que un usuario introduzca una letra, comprobaremos si está en nuestra palabra. De ser así, la mostraremos donde corresponde, en caso contrario, mostraremos la letra en la pantalla bajo una lista de letras erróneas utilizadas y no permitiremos que nuestro usuario la introduzca de nuevo (puedes almacenarlas en un array de letras utilizadas para comprobar 😆).<br>
[✅] 4. Daremos un número de intentos máximos al usuario, por lo que si el usuario falla el máximo de veces permitidas le informaremos de que la partida se ha terminado y tendrá que comenzar una nueva partida usando el botón de inicio.<br>
[✅] 5. Si acierda todas las letras, ¡habrá ganado! Muestra de alguna forma las vidas que le quedan al usuario cuando intenta adivinar una palabra para que sepa como avanzar con el ejercicio 🔮<br>

<li> [✅] SUDOKU </li>
[✅] Tendrás que usar React Router para crear una página o ruta específica para este juego en /sudoku.<br>
[✅] 1. Como imaginarás, crear y validar un sudoku es algo bastante complicado que lleva tiempo, pero vamos a echarte una mano en la parte que no está tan relacionada con React y te vamos a recomendar el uso de una librería que por nuestra experiencia, funciona bastante bien: https://www.npmjs.com/package/sudoku (siéntente libre de usar alguna otra alternativa si lo deseas).<br>

    npm i sudoku

[✅] 2. Esta librería genera un array de un solo nivel con `81` celdas, es decir, `9x9` elementos que podremos renderizar sin problemas 🎉 Algunos números vienen ya en el array y tendremos que sustituir los valores `null` por nuevos números adecuados según el usuario lo complete en la interfaz.<br>
[✅] 3. Para generar el tablero inicial que debemos renderizar, hay que usar un estado, no te preocupes por ello que ya te dejamos esta pista también, queremos que te centres en React principalmente:<br>

    const [sudokuBoard, setSudokuBoard] = useState(null);
    
    useEffect(() => {
        const newBoard = sudoku.makepuzzle();
        setSudokuBoard(newBoard);
    }, []);

[✅] 4. Ahora tendrás que maquetar por medio de CSS y JSX, el tablero (recomendamos que uses botones o inputs), para que un usuario pueda introducir un número del 1 al 9 en el sudoku. Te dejamos libertad para decidir como hacerlo, pero debes permitir que vaya rellenando las casillas vacías hasta completar el sudoku. <br>
[✅] 5. La función que comprueba si el sudoku se ha completado es parte de la librería también:<br>

    // Comprobamos si solved es truthy, y sudokuBoard está correctamente solucionado
    const solved = sudoku.solvepuzzle(sudokuBoard);

[✅] 6. En el momento en que el usuario haya completado la última celda disponible, permitiremos que esté disponible un botón para validar su sudoku contra la solución.<br>
[✅] 7. Si la solución no es correcta, le daremos a nuestros usuarios las siguientes posibilidades:<br>

    - Ver la solución y acabar la partida.
    - Seguir intentándolo y comprobar más tarde.

[✅] 8. Por último, añade un botón para empezar una nueva partida siempre que queramos, pisando los datos anteriores de nuestro estado.<br>

<li> [✅] CRITERIOS DE ACEPTACIÓN </li>
[✅] 1. Tu proyecto debe estar desplegado en **Netlify** y superar los siguientes criterios de aceptación para que el equipo de Rock{theCode} te certifique como Frontend Developer. <br>
[✅] 2. Veré una Home en la que se muestran los tres juegos enumerados.<br>
    - [✅] La Home tendrá un Link apuntando a cada ruta juego para navegar en la aplicación.<br>
[✅] 3.En la ruta `/tictactoe` encontraré un Tres en Raya que será jugable.<br>
    - [✅] Podré empezar nueva partida pulsando un botón.<br>
    - [✅] El jugador que comienza se seleccionará de forma alreatoria (random).<br>
    - [✅] Cada jugador está representado por un símbolo propio (X o O sirven).<br>
    - [✅] Si un jugador gana el tres en raya, se lanzará un mensaje en pantalla validando su victoria.<br>
    - [✅] Si los jugadores empatan, se lanzará un mensaje en pantalla anunciando el empate.<br>
    - [✅] Cuando una partida acabe, el botón de empezar nueva partida volverá a estar disponible.<br>
[✅] 4.En la ruta `/hangman` encontraré el Juego del Ahorcado.<br>
    - [✅] Podré empezar una partida pulsando un botón.<br>
        -- [✅]  Esto mostrará en pantalla una palabra incompleta (todas las letras son guiones bajos) usando una palabra aleatoria como referencia.<br>
    - [✅] Tendré disponible un `input` o un botón que represente cada letra del abecedario, de forma que pueda introducir nuevas letras.<br>
    - [✅] Cada vez que me equivoque con una letra, esta aparecerá listada como error en pantalla.<br>
    - [✅] Si acierto con una letra, los espacios de la palabra incompleta se llenarán con esa letra donde corresponda.<br>
    - [✅] Tendré un límite máximo de intentos para probar, si me equivoco acabará la partida y se anunciará con un mensaje.<br>
        -- [✅] Esto mostrará la palabra a adivinar completa, para enseñarme cual era.<br>
        -- [✅] Las vidas deben ser visibles en cualquier momento y reducirse en 1 a cada fallo.<br>
    - [✅] Cuando acabo una partida, podré empezar una nueva con otra palabra aleatoria.<br>
- [✅] 5.En al ruta `/sudoku` encontraré el juego Sudoku.<br>
    -- [✅] El juego usará la librería `sudoku` que hemos recomendado, o una alternativa similar en caso de que lo prefieras.<br>
    -- [✅] Pulsando un botón para empezar partida, se generará un nuevo tablero de Sudoku con números incompletos.<br>
    -- [✅] Cada celda de número incompleto debe ser un elemento que puedo editar (un botón para pulsar y seleccionar después un número, un input para introducir un número…).<br>
    -- [✅] Debo poder ver un botón para completar el sudoku si me rindo, que muestre el tablero completo con la solución final.<br>
    -- [✅] Debo poder ver un botón (disabled y no clickable por defecto) que se activará cuando tenga todos los números del sudoku llenos. Este botón me permitirá comprobar mi solución.<br>
        --- [✅] Mostrará un mensaje en pantalla si he acertado el sudoku, dejándome empezar una nueva partida tras mi victoria.<br>
        --- [✅] Mostrará un mensaje en pantalla si no he acertado.<br>
        </ul>
<br>

## Ideas

<ol>
<li> [✅] Diseño </li>
[✅] Usar una temática general <br>
[✅] Diseñar en Canva <br>

<li> [] Tres en raya </li>
[] Emojis en base a la temática <br>
[] Si western pues fichas casino <br>

<li> [] Ahorcado </li>
[] Crear un state que almacene el número de vidas <br>
[] A través del usestate crear un array que refleje las vidas y la secuencia <br>
[] Secuencia de imágenes para el ahorcado <br>
[] Un duelo por ejemplo, o un lazo que se tira al ahorcado <br>

<li> [] Sudoku </li>
[] Aplicar el estilo general <br>
</ol>

## Pasos

<ol>
<li> [] HTML </li>
[] Código redactado en REACT <br>
[] Metdatos <br>

<li> [] CSS </li>
[] General <br>
[] Componentes <br>
[] Pages <br>
[] Root limpio <br>
[] Propiedades de acuerdo al root <br>
[] Medias queries <br>

<li> [] REACT </li>
[] General <br>
[] Componentes <br>
[] Pages <br>
[] Investigar hooks <br>
<br>

<li> [] Componentes y pages finalizados y comentados </li>
[] App <br>
[] Main <br>
[] Index <br>
<br>

<li> [] Diseño </li>
[] Estilos generales <br>
[] Iconos generales <br>
[] Fuentes tipográficas <br>

<li> [] General </li>
[] Carpetas organizadas <br>
[] Componentes separados <br>
[] Código comentado <br>
[] Repasar app, main e index <br>
[] README final <br>
</ol>