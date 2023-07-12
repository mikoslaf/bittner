window.onload = function () {
  tlo2();
};

$(window).resize(function () {
  tlo2();
});

function tlo2() {
  const x = document.querySelector(".menu");
  const y = document.getElementById("blok3-obraz1-tu");
  if (x.offsetWidth > 600) {
    const s = window.getComputedStyle(y);
    const number =
      parseInt(y.offsetHeight) * 1.1 +
      parseInt(parseFloat(s.marginBottom)) +
      parseInt(
        parseFloat(
          window.getComputedStyle(document.getElementById("blok3-tlo"))
            .paddingTop
        )
      );
    const number2 =
      document.getElementById("obraz-tu").offsetHeight +
      parseInt(parseFloat(s.marginBottom));
    if (number > number2) {
      document.getElementById("blok3-tlo").style.backgroundSize =
        "100% " + number + "px";
    } else {
      document.getElementById("blok3-tlo").style.backgroundSize =
        "100% " + number2 * 1.02 + "px";
    }
  } else {
    const z = document.querySelector("#kontener35-tu");
    document.getElementById("blok3-tlo").style.backgroundSize =
      "100% " + z.offsetHeight + "px";
  }
}
