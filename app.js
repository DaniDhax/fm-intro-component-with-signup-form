const $formulario = document.getElementById("formulario");
const $customAlert = document.getElementById("custom-alert");

$formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let isEmpty = false;

  document.querySelectorAll("input").forEach((input) => {
    if (input.value === "" && isEmpty === false) {
      $customAlert.style.display = "block";
      const $customAlertMessage = document.querySelector(".custom-alert-content p");
      $customAlertMessage.innerText = `${input.attributes.placeholder.value} cannot be empty`

      // alert(`${input.attributes.placeholder.value} cannot be empty`);
      isEmpty = true;
    }
  });

  if (isEmpty) {
    return;
  }

  console.log("Se envía el formulario");
});

function closeCustomAlert() {
  $customAlert.style.display = "none";
}
