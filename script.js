var white = document.getElementsByClassName("white");
var black = document.getElementsByClassName("black");
var ul = document.getElementById("ul");

function C() {
  white[0].style.boxShadow =
      "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
    setTimeout(function () {
      white[0].style.boxShadow = "-1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset,0 0 3px rgba(0, 0, 0, 0.2)";
    }, 100);
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("C4", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyQ") {
    C();
    
  }
});

function D() {
  white[1].style.boxShadow =
      "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
    setTimeout(function () {
      white[1].style.boxShadow = "-1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset,0 0 3px rgba(0, 0, 0, 0.2)";
    }, 100);
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("D4", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyW") {
    D();
    
  }
});

function E() {
  white[2].style.boxShadow =
      "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
    setTimeout(function () {
      white[2].style.boxShadow = "-1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset,0 0 3px rgba(0, 0, 0, 0.2)";
    }, 100);
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("E4", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyE") {
    E();
    
  }
});

function F() {
  white[3].style.boxShadow =
      "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
    setTimeout(function () {
      white[3].style.boxShadow = "-1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset,0 0 3px rgba(0, 0, 0, 0.2)";
    }, 100);
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("F4", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyR") {
    F();
    
  }
});

function G() {
  white[4].style.boxShadow =
      "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
    setTimeout(function () {
      white[4].style.boxShadow = "-1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset,0 0 3px rgba(0, 0, 0, 0.2)";
    }, 100);
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("G4", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyT") {
    G();
    
  }
});

function A() {
  white[5].style.boxShadow =
      "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
    setTimeout(function () {
      white[5].style.boxShadow = "-1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset,0 0 3px rgba(0, 0, 0, 0.2)";
    }, 100);
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("A4", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyY") {
    A();
    
  }
});

function B() {
  white[6].style.boxShadow =
      "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
    setTimeout(function () {
      white[6].style.boxShadow = "-1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset,0 0 3px rgba(0, 0, 0, 0.2)";
    }, 100);
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("B4", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyU") {
    B();
    
  }
});

function C2() {
  white[7].style.boxShadow =
      "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
    setTimeout(function () {
      white[7].style.boxShadow = "-1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset,0 0 3px rgba(0, 0, 0, 0.2)";
    }, 100);
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("C5", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyI") {
    C2();
    
  }
});

function D2() {
  white[8].style.boxShadow =
      "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
    setTimeout(function () {
      white[8].style.boxShadow = "-1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset,0 0 3px rgba(0, 0, 0, 0.2)";
    }, 100);
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("D5", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyO") {
    D2();
    
  }
});

function E2() {
  white[9].style.boxShadow =
  "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
setTimeout(function () {
  white[9].style.boxShadow = "-1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset,0 0 3px rgba(0, 0, 0, 0.2)";
}, 100);
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("E5", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyP") {
    E2();
   
  }
});

function F2() {
  white[10].style.boxShadow =
      "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
    setTimeout(function () {
      white[10].style.boxShadow = "-1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset,0 0 3px rgba(0, 0, 0, 0.2)";
    }, 100);
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("F5", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyZ") {
    F2();
    
  }
});

function G2() {
  white[11].style.boxShadow =
      "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
    setTimeout(function () {
      white[11].style.boxShadow = "-1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset,0 0 3px rgba(0, 0, 0, 0.2)";
    }, 100);
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("G5", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyX") {
    G2();
    
  }
});

function A2() {
  white[12].style.boxShadow =
      "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
    setTimeout(function () {
      white[12].style.boxShadow = "-1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset,0 0 3px rgba(0, 0, 0, 0.2)";
    }, 100);
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("A5", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyC") {
    A2();
    
  }
});

function B2() {
  white[13].style.boxShadow =
      "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
    setTimeout(function () {
      white[13].style.boxShadow = "-1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset,0 0 3px rgba(0, 0, 0, 0.2)";
    }, 100);
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("B5", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyV") {
    B2();
    
  }
});

function CS() {
  black[0].style.boxShadow =
    "-1px -1px 2px rgba(255, 255, 255, 0.2) inset, 0 -2px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 1px 2px rgba(0, 0, 0, 0.5)";
    black[0].style.background = "linear-gradient(to right, #444 0%, #222 100%)";
    setTimeout(function () {
      black[0].style.boxShadow = "-1px -1px 2px rgba(255, 255, 255, 0.2) inset,0 -5px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 2px 4px rgba(0, 0, 0, 0.5)";
      black[0].style.background = "linear-gradient(45deg, #222 0%, #555 100%)";
    }, 100);
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("C#4", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "Digit2") {
    C2();
    
  }
});

function DS() {
  black[1].style.boxShadow =
    "-1px -1px 2px rgba(255, 255, 255, 0.2) inset, 0 -2px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 1px 2px rgba(0, 0, 0, 0.5)";
    black[1].style.background = "linear-gradient(to right, #444 0%, #222 100%)";
    setTimeout(function () {
      black[1].style.boxShadow = "-1px -1px 2px rgba(255, 255, 255, 0.2) inset,0 -5px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 2px 4px rgba(0, 0, 0, 0.5)";
      black[1].style.background = "linear-gradient(45deg, #222 0%, #555 100%)";
    }, 100);
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("D#4", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "Digit3") {
    DS();
    
  }
});

function FS() {
  black[2].style.boxShadow =
    "-1px -1px 2px rgba(255, 255, 255, 0.2) inset, 0 -2px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 1px 2px rgba(0, 0, 0, 0.5)";
    black[2].style.background = "linear-gradient(to right, #444 0%, #222 100%)";
    setTimeout(function () {
      black[2].style.boxShadow = "-1px -1px 2px rgba(255, 255, 255, 0.2) inset,0 -5px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 2px 4px rgba(0, 0, 0, 0.5)";
      black[2].style.background = "linear-gradient(45deg, #222 0%, #555 100%)";
    }, 100);
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("F#4", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "Digit5") {
    FS();
    
  }
});
function GS() {
  black[3].style.boxShadow =
    "-1px -1px 2px rgba(255, 255, 255, 0.2) inset, 0 -2px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 1px 2px rgba(0, 0, 0, 0.5)";
    black[3].style.background = "linear-gradient(to right, #444 0%, #222 100%)";
    setTimeout(function () {
      black[3].style.boxShadow = "-1px -1px 2px rgba(255, 255, 255, 0.2) inset,0 -5px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 2px 4px rgba(0, 0, 0, 0.5)";
      black[3].style.background = "linear-gradient(45deg, #222 0%, #555 100%)";
    }, 100);
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("G#4", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "Digit6") {
    GS();
    
  }
});

function AS() {
  black[4].style.boxShadow =
    "-1px -1px 2px rgba(255, 255, 255, 0.2) inset, 0 -2px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 1px 2px rgba(0, 0, 0, 0.5)";
    black[4].style.background = "linear-gradient(to right, #444 0%, #222 100%)";
    setTimeout(function () {
      black[4].style.boxShadow = "-1px -1px 2px rgba(255, 255, 255, 0.2) inset,0 -5px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 2px 4px rgba(0, 0, 0, 0.5)";
      black[4].style.background = "linear-gradient(45deg, #222 0%, #555 100%)";
    }, 100);
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("A#4", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "Digit7") {
    AS();
    
  }
});

function CS2() {
  black[5].style.boxShadow =
    "-1px -1px 2px rgba(255, 255, 255, 0.2) inset, 0 -2px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 1px 2px rgba(0, 0, 0, 0.5)";
    black[5].style.background = "linear-gradient(to right, #444 0%, #222 100%)";
    setTimeout(function () {
      black[5].style.boxShadow = "-1px -1px 2px rgba(255, 255, 255, 0.2) inset,0 -5px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 2px 4px rgba(0, 0, 0, 0.5)";
      black[5].style.background = "linear-gradient(45deg, #222 0%, #555 100%)";
    }, 100);
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("C#5", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "Digit9") {
    CS2();
    
  }
});

function DS2() {
  black[6].style.boxShadow =
    "-1px -1px 2px rgba(255, 255, 255, 0.2) inset, 0 -2px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 1px 2px rgba(0, 0, 0, 0.5)";
    black[6].style.background = "linear-gradient(to right, #444 0%, #222 100%)";
    setTimeout(function () {
      black[6].style.boxShadow = "-1px -1px 2px rgba(255, 255, 255, 0.2) inset,0 -5px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 2px 4px rgba(0, 0, 0, 0.5)";
      black[6].style.background = "linear-gradient(45deg, #222 0%, #555 100%)";
    }, 100);
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("D#5", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "Digit0") {
    DS2();
    
  }
});

function FS2() {
  black[7].style.boxShadow =
    "-1px -1px 2px rgba(255, 255, 255, 0.2) inset, 0 -2px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 1px 2px rgba(0, 0, 0, 0.5)";
    black[7].style.background = "linear-gradient(to right, #444 0%, #222 100%)";
    setTimeout(function () {
      black[7].style.boxShadow = "-1px -1px 2px rgba(255, 255, 255, 0.2) inset,0 -5px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 2px 4px rgba(0, 0, 0, 0.5)";
      black[7].style.background = "linear-gradient(45deg, #222 0%, #555 100%)";
    }, 100);
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("F#5", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyS") {
    FS2();
    
  }
});

function GS2() {
  black[8].style.boxShadow =
    "-1px -1px 2px rgba(255, 255, 255, 0.2) inset, 0 -2px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 1px 2px rgba(0, 0, 0, 0.5)";
    black[8].style.background = "linear-gradient(to right, #444 0%, #222 100%)";
    setTimeout(function () {
      black[8].style.boxShadow = "-1px -1px 2px rgba(255, 255, 255, 0.2) inset,0 -5px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 2px 4px rgba(0, 0, 0, 0.5)";
      black[8].style.background = "linear-gradient(45deg, #222 0%, #555 100%)";
    }, 100);
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("G#5", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyD") {
    GS2();
    
  }
});

function AS2() {
  black[9].style.boxShadow =
    "-1px -1px 2px rgba(255, 255, 255, 0.2) inset, 0 -2px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 1px 2px rgba(0, 0, 0, 0.5)";
    black[9].style.background = "linear-gradient(to right, #444 0%, #222 100%)";
    setTimeout(function () {
      black[9].style.boxShadow = "-1px -1px 2px rgba(255, 255, 255, 0.2) inset,0 -5px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 2px 4px rgba(0, 0, 0, 0.5)";
      black[9].style.background = "linear-gradient(45deg, #222 0%, #555 100%)";
    }, 100);
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("A#5", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyF") {
    AS2();
    
  }
});
