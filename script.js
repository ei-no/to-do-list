let tehtävä = document.getElementById("uusiTehtävä");
let tehtävälista = document.getElementById("tehtäväLista");

function lisääTehtävä() {
  if (tehtävä.value.trim() === "") {
    alert("Kirjoita jokin tehtävä");
  } else {
    let uusiTehtävä = document.createElement("li");
    uusiTehtävä.textContent = tehtävä.value;

    tehtävälista.appendChild(uusiTehtävä);
    tehtävä.value = "";
  }
}
