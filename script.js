fetch('Plantas.json')
  .then(response => response.json())
  .then(data => {
    const tbody = document.querySelector("table tbody");

    data.forEach(planta => {
      const fila = document.createElement("tr");

      fila.innerHTML = `
        <td>${planta["Nombre comun"]}</td>
        <td><i>${planta["Nombre cientifico"]}</i></td>
        <td>${planta["Uso"]}</td>
      `;

      tbody.appendChild(fila);
    });
  })
  .catch(error => {
    console.error("Error cargando el archivo JSON:", error);
  });