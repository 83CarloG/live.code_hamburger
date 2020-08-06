// AL click su button visualizzo il Menu

var button = document.getElementById("button");

button.addEventListener("click",
  function() {
    // inserisco direttamente style nll'HTML
    // document.getElementById("menu-list").style.display = "block";

    // Uso il css per specificare lo stile che voglio
    // document.getElementById("menu-list").className = "menu-visible";

    //Aggiungo la classe menu-visible alla proprietà classList
    // document.getElementById("menu-list").classList.add("menu-visible");

    // Toggle - accende e spegne :)
    document.getElementById("menu-list").classList.toggle("menu-visible");




  }
);
