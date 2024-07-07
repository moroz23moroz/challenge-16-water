window.addEventListener("DOMContentLoaded", () => {
  const smallCups = document.querySelectorAll(".cup-small");
  const cupBig = document.getElementById("cup-big");
  const liters = document.getElementById("liters");
  const percentage = document.getElementById("percentage");
  const remained = document.getElementById("remained");

  updateBigCup();

  smallCups.forEach((cup, idx) => {
    cup.addEventListener("click", () => {
      highlightCups(idx);
    });
  });

  function highlightCups(idx) {
    if (
      smallCups[idx].classList.contains("full") &&
      !smallCups[idx].nextElementSibling.classList.contains("full")
    ) {
      idx--;
    }
    smallCups.forEach((cup, i) => {
      if (i <= idx) {
        cup.classList.add("full");
      } else {
        cup.classList.remove("full");
      }
    });
    updateBigCup();
  }

  function updateBigCup() {
    const fullCups = document.querySelectorAll(".cup-small.full").length;
    const totalCups = smallCups.length;
    if (fullCups === 0) {
      percentage.style.visibility = "hidden";
      percentage.style.height = 0;
    } else {
      percentage.style.visibility = "visible";
      percentage.style.height = `${(fullCups / totalCups) * 330}px`;
      percentage.innerText = `${(fullCups / totalCups) * 100}%`;
    }

    if (fullCups === totalCups) {
      remained.style.visibility = "hidden";
      remained.style.height = 0;
      cupBig.style.height = `330px`;
    } else {
      remained.style.visibility = "visible";
      liters.innerText = `${2.5 - (250 * fullCups) / 1000}L`;
      cupBig.style.height = `349px`;
    }
  }
});
