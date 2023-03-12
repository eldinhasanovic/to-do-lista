var x = document.getElementsByTagName("LI");
var i;
for (i = 0; i < x.length; i++) {
  var dugme = document.createElement("button");
  dugme.innerHTML = "dugme";
  dugme.className = "obrisi";
  x[i].appendChild(dugme);
}
