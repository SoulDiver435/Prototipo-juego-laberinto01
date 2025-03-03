let canvas = document.querySelector(".canvas-juego");
let ctx = canvas.getContext("2d");

let directioninput = new DirectionInput();
directioninput.init();
directioninput.direccion;

let touchA= document.querySelector(".botonCirc")

//MAPA
let imgMapa = new Image();
imgMapa.src = "img/tileset_juego001.png";
let imgMapaCargada = false;

imgMapa.onload = () => {
  imgMapaCargada = true;
};

//COFRES

let cofres = [
  { x: utils.conCelda(11), y: utils.conCelda(5), abierto: false },
  { x: utils.conCelda(25), y: utils.conCelda(12), abierto: false },
  { x: utils.conCelda(3), y: utils.conCelda(11), abierto: false },
  { x: utils.conCelda(9), y: utils.conCelda(14), abierto: false },
  { x: utils.conCelda(1), y: utils.conCelda(24), abierto: false },
  { x: utils.conCelda(18), y: utils.conCelda(32), abierto: false },
  { x: utils.conCelda(36), y: utils.conCelda(26), abierto: false },
];

let cofreCerca = false;

let imgCofre = new Image();
imgCofre.src = "img/chest000.png";

//WALLS/PAREDES

const mapLayout = [
  ".......................................",
  "##################...##################",
  "#................#...#.......####....##",
  "#.............#..#...#..#....#####..###",
  "#...#######......#####.......####....##",
  "#...#######...............##.####....##",
  "#...###############.......##.####....##",
  "#...###############.####..##.####....##",
  "#.#################.####..##.####..#.##",
  "#.###########.......####..##.........##",
  "#.###########..##.........##.#####...##",
  "#...#########..##......#..##.#####...##",
  "#.#.#########..##.........##.#####...##",
  "#...#####.###..##.........##.#####...##",
  "#...####..##################.##########",
  "#...####..##################.##########",
];

let walls = {
  // [utils.coordCelda(1, 1)]: true,
  // [utils.coordCelda(2, 1)]: true,
  // [utils.coordCelda(3, 1)]: true,
  // [utils.coordCelda(4, 1)]: true,
  // [utils.coordCelda(5, 1)]: true,
  // [utils.coordCelda(6, 1)]: true,
  // [utils.coordCelda(7, 1)]: true,
  // [utils.coordCelda(8, 1)]: true,
  // [utils.coordCelda(9, 1)]: true,
  // [utils.coordCelda(10, 1)]: true,
  // [utils.coordCelda(11, 1)]: true,
  // [utils.coordCelda(12, 1)]: true,
  // [utils.coordCelda(13, 1)]: true,
  // [utils.coordCelda(14, 1)]: true,
  // [utils.coordCelda(15, 1)]: true,
  // [utils.coordCelda(16, 1)]: true,
  // [utils.coordCelda(17, 2)]: true,
  // [utils.coordCelda(17, 3)]: true,
  // [utils.coordCelda(17, 4)]: true,
  // [utils.coordCelda(0, 2)]: true,
  // [utils.coordCelda(0, 3)]: true,
  // [utils.coordCelda(0, 4)]: true,
  // [utils.coordCelda(0, 5)]: true,
  // [utils.coordCelda(0, 6)]: true,
  // [utils.coordCelda(0, 7)]: true,
  // [utils.coordCelda(0, 8)]: true,
  // [utils.coordCelda(0, 9)]: true,
  // [utils.coordCelda(0, 10)]: true,
  // [utils.coordCelda(0, 11)]: true,
  // [utils.coordCelda(0, 12)]: true,
  // [utils.coordCelda(0, 13)]: true,
  // [utils.coordCelda(0, 14)]: true,
  // [utils.coordCelda(0, 15)]: true,
  // [utils.coordCelda(0, 16)]: true,
  // [utils.coordCelda(0, 17)]: true,
  // [utils.coordCelda(0, 18)]: true,
  // [utils.coordCelda(0, 19)]: true,
  // [utils.coordCelda(0, 20)]: true,
  // [utils.coordCelda(1, 21)]: true,
  // [utils.coordCelda(2, 21)]: true,
  // [utils.coordCelda(3, 21)]: true,
  // [utils.coordCelda(4, 21)]: true,
  // [utils.coordCelda(5, 21)]: true,
  // [utils.coordCelda(2, 12)]: true,
  // [utils.coordCelda(6, 21)]: true,
  // [utils.coordCelda(4, 4)]: true,
  // [utils.coordCelda(4, 5)]: true,
  // [utils.coordCelda(4, 6)]: true,
  // [utils.coordCelda(4, 7)]: true,
  // [utils.coordCelda(5, 4)]: true,
  // [utils.coordCelda(6, 4)]: true,
  // [utils.coordCelda(7, 4)]: true,
  // [utils.coordCelda(8, 4)]: true,
  // [utils.coordCelda(9, 4)]: true,
  // [utils.coordCelda(10, 4)]: true,
  // [utils.coordCelda(2, 8)]: true,
  // [utils.coordCelda(3, 8)]: true,
  // [utils.coordCelda(2, 9)]: true,
  // [utils.coordCelda(2, 10)]: true,
  // [utils.coordCelda(10, 5)]: true,
  // [utils.coordCelda(10, 6)]: true,
  // [utils.coordCelda(11, 6)]: true,
  // [utils.coordCelda(12, 6)]: true,
  // [utils.coordCelda(13, 6)]: true,
  // [utils.coordCelda(14, 6)]: true,
  // [utils.coordCelda(15, 6)]: true,
  // [utils.coordCelda(16, 6)]: true,
  // [utils.coordCelda(17, 6)]: true,
  // [utils.coordCelda(18, 6)]: true,
  // [utils.coordCelda(18, 7)]: true,
  // [utils.coordCelda(18, 8)]: true,
  // [utils.coordCelda(17, 8)]: true,
  // [utils.coordCelda(16, 8)]: true,
  // [utils.coordCelda(15, 8)]: true,
  // [utils.coordCelda(14, 8)]: true,
  // [utils.coordCelda(13, 8)]: true,
  // [utils.coordCelda(3, 10)]: true,
  // [utils.coordCelda(4, 10)]: true,
  // [utils.coordCelda(4, 11)]: true,
  // [utils.coordCelda(4, 12)]: true,
  // [utils.coordCelda(4, 13)]: true,
  // [utils.coordCelda(4, 14)]: true,
  // [utils.coordCelda(4, 15)]: true,
  // [utils.coordCelda(4, 16)]: true,
  // [utils.coordCelda(4, 17)]: true,
  // [utils.coordCelda(4, 18)]: true,
  // [utils.coordCelda(4, 19)]: true,
  // [utils.coordCelda(5, 19)]: true,
  // [utils.coordCelda(6, 19)]: true,
  // [utils.coordCelda(7, 19)]: true,
  // [utils.coordCelda(7, 18)]: true,
  // [utils.coordCelda(7, 17)]: true,
  // [utils.coordCelda(7, 16)]: true,
  // [utils.coordCelda(7, 15)]: true,
  // [utils.coordCelda(7, 14)]: true,
  // [utils.coordCelda(7, 13)]: true,
  // [utils.coordCelda(7, 12)]: true,
  // [utils.coordCelda(8, 12)]: true,
  // [utils.coordCelda(9, 12)]: true,
  // [utils.coordCelda(10, 12)]: true,
  // [utils.coordCelda(10, 13)]: true,
  // [utils.coordCelda(10, 14)]: true,
  // [utils.coordCelda(10, 15)]: true,
  // [utils.coordCelda(10, 16)]: true,
  // [utils.coordCelda(11, 16)]: true,
  // [utils.coordCelda(12, 16)]: true,
  // [utils.coordCelda(13, 16)]: true,
  // [utils.coordCelda(14, 16)]: true,
  // [utils.coordCelda(15, 17)]: true,
  // [utils.coordCelda(15, 18)]: true,
  // [utils.coordCelda(16, 18)]: true,
  // [utils.coordCelda(9, 18)]: true,
  // [utils.coordCelda(10, 18)]: true,
  // [utils.coordCelda(11, 18)]: true,
  // [utils.coordCelda(12, 18)]: true,
  // [utils.coordCelda(13, 18)]: true,
  // [utils.coordCelda(13, 19)]: true,
  // [utils.coordCelda(13, 20)]: true,
  // [utils.coordCelda(13, 21)]: true,
  // [utils.coordCelda(12, 21)]: true,
  // [utils.coordCelda(11, 21)]: true,
  // [utils.coordCelda(10, 21)]: true,
  // [utils.coordCelda(9, 21)]: true,
};

mapLayout.forEach((row, y) => {
  row.split("").forEach((cell, x) => {
    if (cell === "#") {
      walls[utils.coordCelda(x, y)] = true;
    }
  });
});

//JUGADOR
let player = {
  x: utils.conCelda(1),
  y: utils.conCelda(2),
  src: "img/spritesheet_bluya.png",
  movRestante: 0,
  direccion: "abajo",
  //Animaciones
  animActual: "quieto-abajo",
  frameActual: 0,
  limiteTicksAnim: 11,
};

player.ticks = player.limiteTicksAnim;

let imgPlayer = new Image();
imgPlayer.src = player.src;

let imgPlayerCargada = false;

imgPlayer.onload = () => {
  imgPlayerCargada = true;
};

//DIRECCIONES A ACTUALIZAR
let actualizacionDireccion = {
  arriba: ["y", -1],
  abajo: ["y", 1],
  izquierda: ["x", -1],
  derecha: ["x", 1],
};

//PERSONA CAMARA
let personaCamara = player;

//ANIMACIONES DEL JUGADOR
let animaciones = {
  "quieto-arriba": [[0, 1]],
  "caminar-arriba": [
    [0, 1],
    [1, 1],
    [2, 1],
    [3, 1],
  ],
  "quieto-abajo": [[0, 0]],
  "caminar-abajo": [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
  ],
  "quieto-derecha": [[1, 3]],
  "caminar-derecha": [
    [0, 3],
    [1, 3],
    [2, 3],
    [3, 3],
  ],
  "quieto-izquierda": [[0, 2]],
  "caminar-izquierda": [
    [0, 2],
    [1, 2],
    [2, 2],
    [3, 2],
  ],

  get frame() {
    return animaciones[player.animActual][player.frameActual];
  },
};

//MENSAJES Y TEXTO

let mostrarMensaje = false;
let mensajeActual= "";
let clicksMsj= 0;
let imgCajaTexto = new Image();
imgCajaTexto.src = "img/text_box.png"

//LETRAS Y CARACTERES

const charAncho= 8;
const charAlto= 8;

const chars = [
  "!$%&'()+,-.¡¿",
"0123456789:;<=>?",
"@ABCDEFGHIJKLMNO",
"PQRSTUVWXYZ[/]_",
"abcdefghijklmno",
"pqrstuvwxyz{|}"
]

let imgFonts = new Image();
imgFonts.src = "img/font_juego_prac02.png"


//FUNCIONES DEL JUEGO----------------------------------------------

//CAPTURAR CARACTERES

function capturarPosicionCaracter(letra) {
  for (let row = 0; row < chars.length; row++) {
      let index = chars[row].indexOf(letra);
      if (index !== -1) {
          return {
              x: index * charAncho,
              y: row * charAlto // Filas diferentes para mayúsculas, minúsculas y números
          };
      }
  }
  return null; // Si la letra no está en el sprite sheet
}



//MONTAR OBJETOS

function montarObjetos() {
  cofres.forEach((cofre) => {
    const cofreX = cofre.x;
    const cofreY = cofre.y;

    añadirPared(cofreX, cofreY);
  });
}

//AÑADIR PAREDES
function añadirPared(x, y) {
  walls[`${x},${y}`] = true;
}

//COLISIONES

function estaEspacioOcupado(actualX, actualY, direccion) {
  const { x, y } = utils.siguientePosicion(actualX, actualY, direccion);
  return walls[`${x},${y}`] || false;
}

//ANIMACION

function prepararAnimacion(key) {
  if (player.animActual !== key) {
    player.animActual = key;
    player.frameActual = 0;

    player.ticks = player.limiteTicksAnim;
  }
}

function actualizarAnimacion() {
  if (player.ticks > 0) {
    player.ticks -= 1;
    return;
  }

  player.ticks = player.limiteTicksAnim;
  player.frameActual += 1;

  if (player.frameActual >= animaciones[player.animActual].length) {
    player.frameActual = 0; // Reinicia la animación si ya llegó al final
  }
}

function actualizarSprite() {
  if (player.movRestante > 0) {
    prepararAnimacion("caminar-" + player.direccion);
    return;
  }
  prepararAnimacion("quieto-" + player.direccion);
}

//DIBUJADO DE GRAFICOS
function dibujarTodo() {
  const x = player.x - 8 + utils.conCelda(6) - personaCamara.x;
  const y = player.y - 16 + utils.conCelda(4.5) - personaCamara.y;

  if (imgMapaCargada && imgPlayerCargada) {
    ctx.drawImage(
      imgMapa,
      utils.conCelda(6) - personaCamara.x,
      utils.conCelda(4.5) - personaCamara.y
    );

    dibujarCofres(ctx, utils.conCelda(1), 0, 0, 0);
    const [frameX, frameY] = animaciones.frame;

    ctx.drawImage(imgPlayer, frameX * 32, frameY * 32, 32, 32, x, y, 32, 32);

    actualizarAnimacion();
  }
}

//ACTUALIZACION DEL JUGADOR

function actualizarPlayer(estado) {
  actualizarPosicionPlayer();

  if (player.movRestante === 0 && estado.flecha) {
    player.direccion = estado.flecha;
    if (estaEspacioOcupado(player.x, player.y, directioninput.direccion)) {
      return;
    }
    player.movRestante = 16;
  }
}

// ACTUALIZACION MOVIMIENTO DEL JUGADOR

function actualizarPosicionPlayer() {
  if (player.movRestante > 0) {
    const [propiedad, cambio] = actualizacionDireccion[player.direccion];

    player[propiedad] += cambio;
    player.movRestante -= 1;
  }
}

//DIBUJAR COFRES
function dibujarCofres(ctx, Xabierto, Yabierto, Xcerrado, Ycerrado) {
  cofres.forEach((cofre) => {
    const cofreX = cofre.x + utils.conCelda(6) - personaCamara.x;
    const cofreY = cofre.y + utils.conCelda(4.5) - personaCamara.y;

    if (cofre.abierto) {
      ctx.drawImage(
        imgCofre,
        Xabierto,
        Yabierto,
        16,
        16,
        cofreX,
        cofreY,
        16,
        16
      );
    } else if (!cofre.abierto) {
      ctx.drawImage(
        imgCofre,
        Xcerrado,
        Ycerrado,
        16,
        16,
        cofreX,
        cofreY,
        16,
        16
      );
    }
  });
}

//DETECTAR COFRES
function estaCercaCofre(actualX, actualY, direccion) {
  const { x, y } = utils.siguientePosicion(actualX, actualY, direccion);

  return cofres.some((cofre) => cofre.x === x && cofre.y === y);
}

//INICIALIZAR INTERACCION CON COFRES
function initInterCofres() {
  if (estaCercaCofre(player.x, player.y, player.direccion)) {
    cofreCerca = true;
    return;
  }
  if (!estaCercaCofre(player.x, player.y, player.direccion)) {
    cofreCerca = false;
  }
}

//ACCIONAR INTERACCION CON COFRES

function interaccionCofres() {
  document.addEventListener("keydown", (e) => {
    const keypressed = e.code;
    if (keypressed === "KeyX" && cofreCerca) {
      const { x, y } = utils.siguientePosicion(
        player.x,
        player.y,
        player.direccion
      );

      let cofreEncontrado = cofres.find(
        (cofre) => cofre.x === x && cofre.y === y
      );

      if (cofreEncontrado && cofreEncontrado.abierto ===false) {
        cofreEncontrado.abierto = true;
        mostrarMensaje=true;
        clicksMsj=0;
        mensajeActual= "¡Abriste un cofre!";           
      } 
    }
  });

  touchA.addEventListener("touchstart", (e) => {
    if (cofreCerca) {
      const { x, y } = utils.siguientePosicion(
        player.x,
        player.y,
        player.direccion
      );

      let cofreEncontrado = cofres.find(
        (cofre) => cofre.x === x && cofre.y === y
      );

      if (cofreEncontrado && cofreEncontrado.abierto ===false) {
        cofreEncontrado.abierto = true;
        mostrarMensaje=true;
        clicksMsj=0;
        mensajeActual= "¡Abriste un cofre!";           
      } 
    }
  });


}

//GESTIONAR MENSAJES 

function gestionarMensajes(){
  document.addEventListener("keydown", e => {
    const keypressed= e.code;
    if(keypressed==="KeyX" && mostrarMensaje && clicksMsj>0){
      clicksMsj -=1
      // console.log("mostrarmsj: " + mostrarMensaje);
      return
    }

    if(keypressed=== "KeyX" && mostrarMensaje && clicksMsj<=0){
        mostrarMensaje=false;   
        // console.log("mostrarmsj: " + mostrarMensaje);
      
    }
  })

  touchA.addEventListener("touchstart", e => {
    if(mostrarMensaje && clicksMsj>0){
      clicksMsj -=1
      // console.log("mostrarmsj: " + mostrarMensaje);
      return
    }

    if(mostrarMensaje && clicksMsj<=0){
        mostrarMensaje=false;   
        // console.log("mostrarmsj: " + mostrarMensaje);
      
    }
  })
}

//DIBUJAR EL MENSAJE
function dibujarMensaje(texto,inicioX,inicioY,maxAncho){
  if(!mostrarMensaje) return;

const xCajaTexto= utils.conCelda(0);
const yCajaTexto= utils.conCelda(6); 

ctx.drawImage(imgCajaTexto,xCajaTexto,yCajaTexto);

//-------------------------------------------------

let x= inicioX;
let y= inicioY;
let espacioAncho= charAncho;
let palabras = texto.split(" ");
let anchoDeLinea= 0;

for (let i = 0; i < palabras.length; i++) {
  let palabra = palabras[i];
  let anchoPalabra = palabra.length * charAncho; // Tamaño total de la palabra

  // Si la palabra no cabe, saltar a la siguiente línea
  if (anchoDeLinea + anchoPalabra > maxAncho) {
      x = inicioX;
      y += charAlto; // Mueve a la siguiente línea
      anchoDeLinea = 0;
  }

  // Dibuja cada letra de la palabra
  for (let letra of palabra) {
      let pos = capturarPosicionCaracter(letra);
      if (pos) {
          ctx.drawImage(imgFonts, pos.x, pos.y, charAncho, charAlto, x, y, charAncho, charAlto);
          x += charAncho;
          anchoDeLinea += charAncho;
      }
  }

  // Añadir espacio entre palabras (pero no al final de una línea nueva)
  if (i < palabras.length - 1) {
      x += espacioAncho;
      anchoDeLinea += espacioAncho;
  }
}


// const xTexto= utils.conCelda(4);
// const yTexto= utils.conCelda(7);

// ctx.imageSmoothingEnabled = false;

// ctx.fillStyle = "white";
// ctx.font = "8px dogicapixel";
// ctx.textAlign = "center"

// ctx.fillText(mensajeActual, xTexto ,yTexto);

// //Stroke Text
// ctx.strokeStyle = "red";
// ctx.font = "8px dogicapixel"
// ctx.strokeText(mensajeActual, xTexto ,yTexto);

}

//GAMELOOP
function gameLoop() {
  const step = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // console.log("stepping");
    actualizarPlayer({
      flecha: directioninput.direccion,
    });
    montarObjetos();
    initInterCofres();
    interaccionCofres();
    actualizarSprite();
    dibujarTodo();
    dibujarMensaje("¡Abriste un cofre! ¡Fantabuloso! :)",utils.conCelda(1),utils.conCelda(6.5), 180);
    requestAnimationFrame(() => {
      step();
    });
  };
  step();
}

gestionarMensajes();
gameLoop();

document.addEventListener("keydown", (e) => {
  const keypress = e.code;

  if (keypress === "KeyD") {
    console.log(animaciones.frame);
    console.log(utils.siguientePosicion(player.x, player.y, player.direccion));
    console.log("haycofre: " + cofreCerca);
    console.log("mostrarmsj: " + mostrarMensaje);
    
  }
});
