const tbody = document.querySelector("#tabla tbody");
const status = document.getElementById("status");

const API_URL = window.API_URL;

// renderización de la tabla
function render(data) {
  tbody.innerHTML = "";

  data.forEach(i => {
    const row = `
      <tr>
        <td>${i.nombre}</td>
        <td>${i.apellido}</td>
        <td>${i.legajo}</td>
        <td>${i.feature}</td>
        <td><span class="badge ${i.servicio}">${i.servicio}</span></td>
        <td>${i.estado}</td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

function setStatus(text, ok = true) {
  status.textContent = text;
  status.classList.remove("ok", "fail");
  status.classList.add(ok ? "ok" : "fail");
}

//conexión con back
async function loadData() {
  try {
    const response = await fetch(`${API_URL}/api/team`);

    if (!response.ok) {
      throw new Error("Error en la respuesta del backend");
    }

    const data = await response.json();

    render(data);
    setStatus("Backend conectado", true);

  } catch (error) {
    console.error("Error:", error);

    setStatus("Error conectando al backend", false);

    tbody.innerHTML = `
      <tr>
        <td colspan="6">No se pudieron cargar los datos</td>
      </tr>
    `;
  }
}

loadData();