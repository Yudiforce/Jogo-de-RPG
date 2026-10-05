let atacar = document.getElementById("atacar");
let HpNun = document.getElementById("vidaMago");
let HpvidaOrc = document.getElementById("vidaOrc");
let Freira = document.getElementById("Freira");
let Cavaleiro = document.getElementById("Cavaleiro");
const bg = new Audio("Overture_to_Il_Guarany_-_U.S._Marine_Band.ogg");
const espada = new Audio("dragon-studio-violent-sword-slice-393848.mp3")
const CavaleiroGrito = new Audio("kuzu420-dying-guy-288051.mp3");
const bell = new Audio("universfield-single-church-bell-156463.mp3");

let vidaNun = 100;
let vidaOrc = 200;

atacar.addEventListener("click", () => {
    bg.play()
    vidaNun -= 2 * Math.floor(Math.random() + 1);
    vidaOrc -= 5 * Math.floor(Math.random() + 1);
    HpNun.textContent = vidaNun;
    HpvidaOrc.textContent = vidaOrc;
    if (vidaNun <= 0) {
        HpNun.textContent = "Derrota";
        HpvidaOrc.textContent = "Vitória";
        Freira.src = "Perdeu.png"
    } 
    if (vidaOrc <= 0) {
        HpNun.textContent = "Vitória";
        HpvidaOrc.textContent = "Derrota";
        Cavaleiro.src = "Perdeu.png"
    }
    if (vidaNun > 0 && vidaOrc > 0){ 
        bg.volume = 0.3
        Freira.src = "Nun2.png";
        bell.play();
        Cavaleiro.src = "Cavaleiro2.png";
        espada.play();
    setTimeout(() => {
        Freira.src = "Nun1.png";
        Cavaleiro.src = "Cavaleiro.png"
      }, 500);
      setTimeout(() => {
        CavaleiroGrito.play();
      }, 600);}}
)
if (vidaNun <= 0) {
    Freira.src = "Perdeu.png"
} 
if (vidaOrc <= 0) {
    Cavaleiro.src = "Perdeu.png"}


