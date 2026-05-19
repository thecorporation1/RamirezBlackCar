const whatsappNumber = "17865995573";

const form = document.querySelector("#bookingForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const message = [
    "Hola Ramirez Black Car, quiero solicitar disponibilidad.",
    "",
    `Nombre: ${data.get("name")}`,
    `Telefono: ${data.get("phone")}`,
    `Fecha y hora: ${data.get("date")}`,
    `Servicio: ${data.get("service")}`,
    `Detalles: ${data.get("details")}`,
  ].join("\n");

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});
