const startButton = document.getElementById("start");
const yes = document.getElementById("yesButton");
const no = document.getElementById("noButton");
const p = document.getElementById("pInitial");
let currentQ = "Q1";
let world = {
  money: 50,
  smiles: 50,
  nature: 50,
  energy: 50,
  future: 50
};
 HEAD

let current = "Q1";

const story = {
  Q1: {
    text: "Ruler, bugs are eating 20% of crops. Ban pesticides?",
    yes: {
      next: "Q2",
      effects: { nature: +20, money: -10, future: +10, smiles: +10, energy: +10 }
    },
    no: {
      next: "Q3",
      effects: { money: +15, nature: -20, future: -10,smiles: +10, energy: +10  }
    }
  },

  Q2: {
    text: "Crop yields drop. Force everyone to farm by hand?",
    yes: {
      next: "Q4",
      effects: { smiles: -20, nature: +30, energy: -10, future: +10, money: +10  }
    },
    no: {
      next: "Q5",
      effects: { energy: +20, smiles: +10, nature: -10, money: +10, future: +10  }
    }
  },

  Q3: {
    text: "Chemicals are leaking into water. Build filtration domes?",
    yes: {
      next: "Q6",
      effects: { money: -40, nature: +25, future: +10, smiles: +10, energy: +10  }
    },
    no: {
      next: "Q7",
      effects: { smiles: +10, nature: -30, energy: +10, future: +10, money: +10  }
    }
  },

  Q4: {
    text: "Manual farming is exhausting. Replace workers with AI robots?",
    yes: {
      next: "Q8",
      effects: { energy: -30, money: -10, future: +20, smiles: +10, nature: +10  }
    },
    no: {
      next: "Q9",
      effects: { smiles: +20, nature: +10, future: -10,money: +10, energy: +10  }
    }
  },

  Q5: {
    text: "People hate lab food. Ban real meat to force adoption?",
    yes: {
      next: "Q10",
      effects: { smiles: -30, nature: +30, future: +20, money: +10, energy: +10  }
    },
    no: {
      next: "Q8",
      effects: { smiles: +10, money: -10, energy: +10, future: +10, nature: +10  }
    }
  },

  Q6: {
    text: "Domes are too expensive. Tax the air people breathe?",
    yes: {
      next: "Q9",
      effects: { money: +40, smiles: -40, future: -10, nature: +10, energy: +10  }
    },
    no: {
      next: "Q10",
      effects: { money: -20, nature: -10, energy: +10, smiles: +10, future: +10  }
    }
  },

  Q7: {
    text: "People drink soda instead of water. Ban sugar?",
    yes: {
      next: "Q9",
      effects: { smiles: -30, future: +20, nature: -10, money: +10, energy: +10  }
    },
    no: {
      next: "Q10",
      effects: { smiles: +20, nature: -40, future: -10, money: +10, energy: +10  }
    }
  },

  Q8: {
    text: "Energy demand skyrockets. Build nuclear plants everywhere?",
    yes: {
      next: "END_GOOD",
      effects: { energy: +40, future: +20, nature: -10, smiles: +10, money: +10  }
    },
    no: {
      next: "END_BAD",
      effects: { energy: -40, future: -20, nature: +20, smiles: +10, money: +10  }
    }
  },

  Q9: {
    text: "People revolt at your rule. Step down?",
    yes: {
      next: "END_DEMOCRACY",
      effects: { smiles: +20, money: -20, future: +10,nature: +10, energy: +10  }
    },
    no: {
      next: "END_TYRANT",
      effects: { smiles: -40, future: -30, money: +10, nature: +10, energy: +10  }
    }
  },

  Q10: {
    text: "Earth is collapsing. Send humans to Mars?",
    yes: {
      next: "END_SPACE",
      effects: { future: +40, money: -40, nature: -10, smiles: +10, energy: +10  }
    },
    no: {
      next: "END_NATURE",
      effects: { nature: +40, smiles: +10, money: -10, future: +10, energy: +10  }
    }
  }
};
function startGame(){
    p.style.display = (p.style.display === "none") ? "block" : "none";


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
<<<<<<< HEAD
function choose(answer) {
  let option = story[current][answer];

  // Apply effects
  let effects = option.effects;

  for (let stat in effects) {
    world[stat] += effects[stat];
  }

  // Move to next question
  current = option.next;

  showQuestion();
  updateWorld();


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
function showQuestion() {
  document.getElementById("question").innerText =
    story[current].text;
}
function updateWorld() {
  document.getElementById("money").innerText = world.money;
  document.getElementById("smiles").innerText = world.smiles;
  document.getElementById("nature").innerText = world.nature;
  document.getElementById("energy").innerText = world.energy;
  document.getElementById("future").innerText = world.future;
}