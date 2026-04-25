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

// Function to determine color based on metrics
function updateBackgroundColor() {
  let color;
  
  // Check nature first (green = healthy environment)
  if (world.nature > 70) {
    color = '#1a4d2e'; // Dark green
  } else if (world.nature > 50) {
    color = '#2d6a3e'; // Medium green
  } else if (world.nature > 30) {
    color = '#5d4d2d'; // Brown
  } else {
    color = '#6b2d1f'; // Dark red/brown
  }

  if (world.energy > 70) {

  }
  document.body.style.backgroundColor = color;
}

function updateFog(world) {
  let intensity = Math.min(world.energy / 100, 1); // 0 to 1

  const fog = document.getElementById("fog");

  fog.style.background = `rgba(180, 180, 180, ${0.6 * intensity})`;
  fog.style.backdropFilter = `blur(${10 * intensity}px)`;
}

function updateFont() {
  let font;
  
  if (world.money > 70) {
    font = 'Garamond, serif';
  } else if (world.money > 50) {
    font = 'Times New Roman, serif';
  } else if (world.money > 30) {
    font = 'Arial, sans-serif';
  } else {
    font = 'Comic Sans MS, cursive';
  }
  
  document.body.style.fontFamily = font;
}

function yesButtonClicker(event){
    if(event.target == yes){
        question.textContent = ""
    }
}