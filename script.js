const contactEmail = "liosbelramirez83@gmail.com";

const form = document.querySelector("#bookingForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const subject = "Solicitud de reserva - Ramirez Black Car";
  const body = [
    "Hola Ramirez Black Car, quiero solicitar disponibilidad.",
    "",
    `Nombre: ${data.get("name")}`,
    `Telefono: ${data.get("phone")}`,
    `Fecha y hora: ${data.get("date")}`,
    `Servicio: ${data.get("service")}`,
    `Detalles: ${data.get("details")}`,
  ].join("\n");

  window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
