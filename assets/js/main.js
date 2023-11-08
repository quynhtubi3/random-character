function changeType(e) {
  const lstTypes = document.querySelectorAll(".agent-types li");
  lstTypes.forEach((data) => {
    data.classList.remove("active");
  });
  const targetElement = e.target;
  lstTypes.forEach((data) => {
    if (data.contains(targetElement) === true) {
      data.classList.add("active");
    }
  });
  const nameType = targetElement.innerText;
  const lstAgents = document.querySelectorAll(".all-agents li");
  if (nameType === "ALL") {
    lstAgents.forEach((data) => {
      data.classList.remove("display");
      data.classList.add("display");
    });
  } else if (nameType === "Duelist") {
    lstAgents.forEach((data) => {
      data.classList.remove("display");
    });
    lstAgents.forEach((data) => {
      if (data.classList.contains("duelist")) data.classList.add("display");
    });
  } else if (nameType === "Controller") {
    lstAgents.forEach((data) => {
      data.classList.remove("display");
    });
    lstAgents.forEach((data) => {
      if (data.classList.contains("controller")) data.classList.add("display");
    });
  } else if (nameType === "Initiator") {
    lstAgents.forEach((data) => {
      data.classList.remove("display");
    });
    lstAgents.forEach((data) => {
      if (data.classList.contains("initiator")) data.classList.add("display");
    });
  } else if (nameType === "Sentinel") {
    lstAgents.forEach((data) => {
      data.classList.remove("display");
    });
    lstAgents.forEach((data) => {
      if (data.classList.contains("sentinel")) data.classList.add("display");
    });
  }
}

function startRandom() {
  const lstAgents = document.querySelectorAll(".all-agents .display img");
  const currentChoose = document.querySelector(".agent-avatar img");

  function chooseAgent(randomNum, i) {
    setTimeout(function () {
      lstAgents[randomNum].classList.add("choosing");
      currentChoose.src = lstAgents[randomNum].src;
    }, i * 250);
    setTimeout(function () {
      lstAgents[randomNum].classList.remove("choosing");
    }, i * 250 + 250);
  }
  for (var i = 1; i <= 10; i++) {
    var array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    var randomNum = array[0] % lstAgents.length;
    chooseAgent(randomNum, i);
  }
}

function pickType(id) {
  const box = document.querySelector(".random-box");
  const boxes = document.querySelector(".random-boxes");
  const choise1 = document.querySelector(".choise-1");
  const choise2 = document.querySelector(".choise-2");
  if (id === 1) {
    box.classList.remove("active-box");
    boxes.classList.remove("active-box");
    box.classList.add("active-box");
    choise1.classList.remove("choosing");
    choise2.classList.remove("choosing");
    choise1.classList.add("choosing");
  }
  if (id === 2) {
    box.classList.remove("active-box");
    boxes.classList.remove("active-box");
    boxes.classList.add("active-box");
    choise1.classList.remove("choosing");
    choise2.classList.remove("choosing");
    choise2.classList.add("choosing");
  }
}

function randomATeam() {
  const lstAgents = document.querySelectorAll(".all-agents .display img");
  const lstRnd = document.querySelectorAll(".random-boxes .agents ul li img");
  lstAgents.forEach((data) => {
    data.classList.remove("choosed");
  });
  function chooseAgent(randomNum, i, j) {
    setTimeout(function () {
      lstAgents[randomNum].classList.add("choosing");
      lstRnd[j].src = lstAgents[randomNum].src;
    }, i * 250 * j);
    setTimeout(function () {
      lstAgents[randomNum].classList.remove("choosing");
    }, i * 250 * j + 250);
  }
  function chooseEachAgent(i) {
    var check = false;
    while (!check) {
      for (var j = 1; j <= 10; j++) {
        var array = new Uint32Array(1);
        window.crypto.getRandomValues(array);
        var randomNum = array[0] % lstAgents.length;
        chooseAgent(randomNum, j, i);
      }
      if (lstAgents[randomNum].classList.contains("choosed")) check = false;
      else {
        lstAgents[randomNum].classList.add("choosed");
        check = true;
      }
    }
  }
  for (var i = 0; i <= 4; i++) {
    chooseEachAgent(i);
  }
}
