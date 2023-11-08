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
      console.log(i);
      lstAgents[randomNum].classList.add("choosing");
      currentChoose.src = lstAgents[randomNum].src;
    }, i * 500);
    setTimeout(function () {
      lstAgents[randomNum].classList.remove("choosing");
    }, i * 500 + 500);
  }
  for (var i = 1; i <= 10; i++) {
    var array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    var randomNum = array[0] % lstAgents.length;
    chooseAgent(randomNum, i);
  }
}
