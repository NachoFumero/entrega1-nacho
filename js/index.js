anio_tengo = document.getElementById("anio-tengo");
fragmento_tengo = document.createDocumentFragment();

for (let i = 2000; i < 2021; i++) {
  let numero;
  numero = document.createElement("option");
  numero.setAttribute("value", i);
  numero.textContent = i;
  fragmento_tengo.appendChild(numero);
}
anio_tengo.appendChild(fragmento_tengo);



anio_busco = document.getElementById("anio-busco");
fragmento_busco = document.createDocumentFragment();

for (let i = 2010; i < 2021; i++) {
  let numero;
  numero = document.createElement("option");
  numero.setAttribute("value", i);
  numero.textContent = i;
  fragmento_busco.appendChild(numero);
}
anio_busco.appendChild(fragmento_busco);

