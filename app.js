const $btnSumit = document.querySelector("#btn-submit");
const $camposFormulario = document.querySelectorAll(".campo");
const $customAlert = document.getElementById("custom-alert");

let regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
let formularioCorrecto = true;

function comprobarCampos(e) {
  e.preventDefault();
  $camposFormulario.forEach((campo) => {
    if (campo.value === "") {
      campo.style.border = "2px solid var(--my-red)";
      document.getElementById(`icon-${campo.id}`).style.visibility = "visible";
      document.getElementById(`message-${campo.id}`).style.display = "block";
      formularioCorrecto = false;
    } else {
      campo.style.border = "1px solid var(--grayish-blue)";
      document.getElementById(`icon-${campo.id}`).style.visibility = "hidden";
      document.getElementById(`message-${campo.id}`).style.display = "none";
      formularioCorrecto = true;
    }
  });
}

$btnSumit.addEventListener("click", (e) => {
  comprobarCampos(e);
  if (
    document.getElementById("email").value !== "" &&
    !regex.test(document.getElementById("email").value)
  ) {
    document.getElementById(`icon-email`).style.visibility = "visible";
    document.getElementById(`message-email`).style.display = "block";
    document.getElementById(`message-email`).innerText =
      "Looks like this is not an email";
    formularioCorrecto = false;
  }

  if (formularioCorrecto) {
    console.log("Formulario correcto");
    $customAlert.style.display = "block";
  }
});

function closeCustomAlert() {
  $customAlert.style.display = "none";
}
