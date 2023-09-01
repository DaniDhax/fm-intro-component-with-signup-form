const $formulario = document.getElementById("formulario");

$formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let isEmpty = false;
  document.querySelectorAll("input").forEach((input) => {
    if (input.value === "" && isEmpty === false) {
        alert(`${input.attributes.placeholder.value} cannot be empty`);
        isEmpty = true;
    }
  });

  if (isEmpty) {return};

  console.log("Se envía el formulario");
});
