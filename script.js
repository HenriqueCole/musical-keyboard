var white = document.getElementsByClassName("white");
var black = document.getElementsByClassName("black");
var ul = document.getElementById("ul");

function C() {
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("C4", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyQ") {
    C();
    white[0].style.boxShadow =
      "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
    setTimeout(function () {
      white[0].style.boxShadow = "none";
    }, 100);
  }
});

function D() {
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("D4", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyW") {
    D();
    white[1].style.boxShadow =
      "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
    setTimeout(function () {
      white[1].style.boxShadow = "none";
    }, 100);
  }
});

function E() {
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("E4", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyE") {
    E();
    white[2].style.boxShadow =
      "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
    setTimeout(function () {
      white[2].style.boxShadow = "none";
    }, 100);
  }
});

function F() {
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("F4", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyR") {
    F();
    white[3].style.boxShadow =
      "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
    setTimeout(function () {
      white[3].style.boxShadow = "none";
    }, 100);
  }
});

function G() {
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("G4", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyT") {
    G();
    white[4].style.boxShadow =
      "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
    setTimeout(function () {
      white[4].style.boxShadow = "none";
    }, 100);
  }
});

function A() {
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("A4", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyY") {
    A();
    white[5].style.boxShadow =
      "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
    setTimeout(function () {
      white[5].style.boxShadow = "none";
    }, 100);
  }
});

function B() {
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("B4", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyU") {
    B();
    white[6].style.boxShadow =
      "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
    setTimeout(function () {
      white[6].style.boxShadow = "none";
    }, 100);
  }
});

function C2() {
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("C5", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyI") {
    C2();
    white[7].style.boxShadow =
      "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
    setTimeout(function () {
      white[7].style.boxShadow = "none";
    }, 100);
  }
});

function D2() {
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("D5", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyO") {
    D2();
    white[8].style.boxShadow =
      "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
    setTimeout(function () {
      white[8].style.boxShadow = "none";
    }, 100);
  }
});

function E2() {
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("E5", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyP") {
    E2();
    white[9].style.boxShadow =
      "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
    setTimeout(function () {
      white[9].style.boxShadow = "none";
    }, 100);
  }
});

function F2() {
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("F5", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyZ") {
    F2();
    white[10].style.boxShadow =
      "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
    setTimeout(function () {
      white[10].style.boxShadow = "none";
    }, 100);
  }
});

function G2() {
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("G5", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyX") {
    G2();
    white[11].style.boxShadow =
      "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
    setTimeout(function () {
      white[11].style.boxShadow = "none";
    }, 100);
  }
});

function A2() {
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("A5", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyC") {
    A2();
    white[12].style.boxShadow =
      "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
    setTimeout(function () {
      white[12].style.boxShadow = "none";
    }, 100);
  }
});

function B2() {
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("B5", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyV") {
    B2();
    white[13].style.boxShadow =
      "2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2)";
    setTimeout(function () {
      white[13].style.boxShadow = "none";
    }, 100);
  }
});

function CS() {
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("C#4", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "Digit2") {
    C2();
  }
});

function DS() {
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("D#4", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "Digit3") {
    DS();
  }
});

function FS() {
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("F#4", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "Digit5") {
    FS();
  }
});
function GS() {
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("G#4", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "Digit6") {
    GS();
  }
});

function AS() {
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("A#4", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "Digit7") {
    AS();
  }
});

function CS2() {
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("C#5", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "Digit9") {
    CS2();
  }
});

function DS2() {
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("D#5", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "Digit0") {
    DS2();
  }
});

function FS2() {
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("F#5", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyS") {
    FS2();
  }
});

function GS2() {
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("G#5", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyD") {
    GS2();
  }
});

function AS2() {
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("A#5", "8n");
}
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyF") {
    AS2();
  }
});
