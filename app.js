var cilj = document.getElementsByTagName("LI");
var lista = document.querySelector("ul");
var filter = document.querySelector("select").value;
function filter() {
  for (i = 0; i < cilj.length; i++) {
    if (filter == "done") {
      if (cilj[i].style.className == "linija") {
        cilj[i].style.display = "none";
      } else if (filter == "notdone") {
        if (cilj[i].style.className == "") {
          cilj[i].style.display = "none";
        }
      }
    }
  }
}
function dodajdugme(el) {
  var dugme = document.createElement("button");
  dugme.className = "obrisi";
  dugme.setAttribute("onclick", "obrisi()");
  el.appendChild(dugme);
}
function obrisi() {
  event.target.parentElement.remove();
}
function linija() {
  if (event.target.className == "linija") {
    event.target.className = "";
  } else {
    event.target.className = "linija";
  }
  console.log(event.target);
  // console.log(input);
}
for (i = 0; i < cilj.length; i++) {
  dodajdugme(cilj[i]);
}
function dodaj() {
  input = document.querySelector("input").value;
  novicilj = document.createElement("li");
  novicilj.innerHTML = `<p ondblclick = "linija()">${input}</p>`;
  lista.appendChild(novicilj);
  dodajdugme(novicilj);
  document.querySelector("input").value = "";
}
ugasi = document.getElementsByClassName("obrisi");
// for (i = 0; i < ugasi.length; i++) {
//   ugasi[i].setAttribute("onclick", "obrisi()");
// }
