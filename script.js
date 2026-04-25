const startButton = document.getElementById("start");
const yes = document.getElementById("yesButton");
const no = document.getElementById("noButton");
const p = document.getElementById("pInitial");
const question = document.getElementById("next");
let world = {
  money: 50,
  smiles: 50,
  nature: 50,
  energy: 50,
  future: 50
};
function startGame(){
    p.style.display = (p.style.display === "none") ? "block" : "none";
}
function yesButtonClicker(event){
    if(event.target == yes){
        question.textContent = ""
    }
}