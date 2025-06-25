fetch("https://raw.githubusercontent.com/navarretesofia/Trabajo-Final-Desarrollo-Web/main/Plantas.json")
  .then(response => response.json())
  .then(data => {
    const tbody = document.querySelector("table tbody");


    data.forEach(planta => {
      const fila = document.createElement("tr");

      fila.innerHTML = `
        <td>${planta["Nombre de la planta"]}</td>
        <td><i>${planta["Nombre cientifico"]}</i></td>
        <td>${planta["Uso medicinal principal"]}</td>
      `;

      tbody.appendChild(fila);
    });


    const contenedorFichas = document.getElementById("fichas");

    data.forEach(planta => {
      const ficha = document.createElement("div");
      ficha.className = "ficha-planta";
      ficha.id = planta["Nombre de la planta"].toLowerCase().replace(/\s+/g, "-");

      ficha.innerHTML = ` 
      <div class="columna-izq">
    <h2 class="nombre-planta">${planta["Nombre de la planta"]}</h2>
    <p class="beneficios">
      <strong>Beneficios:</strong>
      <span>${planta["Beneficios"]}</span>
    </p>
    <p class="afecciones">
      <strong>Afecciones tratadas:</strong>
      <span>${planta["Afecciones tratadas"]}</span>
    </p>
  </div>

  <div class="columna-der">
    <h3 class="titulo-preparacion">Preparación</h3>
    <p class="parte-utilizada">
      <strong>Parte utilizada:</strong>
      <span>${planta["Parte utilizada"]}</span>
    </p>
    <p class="pasos">
      <strong>Pasos:</strong>
      <span>${planta["Modo de preparación"]}</span>
    </p>
    <p class="modo-uso">
      <strong>Modo de uso:</strong>
      <span>${planta["Modo de uso"]}</span>
    </p>
    <p class="precauciones">
      <strong>Precauciones:</strong>
      <span>${planta["Precauciones"]}</span>
    </p>
  </div>
`;


      contenedorFichas.appendChild(ficha);
    });
  }) 
  .catch(error => {
    console.error("Error al cargar el JSON:", error);
  });


document.querySelectorAll(".sello").forEach(sello => {
  sello.addEventListener("click", () => {
    const nombre = sello.dataset.nombre.toLowerCase().replace(/\s+/g, "-");
    const ficha = document.getElementById(nombre);
    if (ficha) {
      ficha.scrollIntoView({ behavior: "smooth" });
    }
  });
});
