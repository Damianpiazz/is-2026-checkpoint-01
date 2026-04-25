const integrantes = [
  {
    nombre: "Milagros",
    apellido: "Crespo",
    legajo: "33352",
    feature: "Feature 02 - Frontend",
    servicio: "frontend",
    estado: "activo"
  },
  {
    nombre: "Manuela",
    apellido: "Chanquia",
    legajo: "33159",
    feature: "Feature 03 - Backend",
    servicio: "backend",
    estado: "activo"
  },
  {
    nombre: "Lucia",
    apellido: "Meza",
    legajo: "33693",
    feature: "Feature 04 - Base de Datos",
    servicio: "database",
    estado: "activo"
  },
  {
    nombre: "Damian",
    apellido: "Piazza",
    legajo: "33400",
    feature: "Feature 01 - Coordinación",
    servicio: "coordinacion",
    estado: "activo"
  },
  {
    nombre: "Martina",
    apellido: "Garcia",
    legajo: "33093",
    feature: "Feature 05 - Portainer",
    servicio: "portainer",
    estado: "activo"
  }
];

const tbody = document.querySelector("#tabla tbody");

integrantes.forEach(i => {
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

// Estado visual
const status = document.getElementById("status");
status.textContent = "Mock activo";
status.classList.remove("fail");
status.classList.add("ok");