var $ = jQuery;

$(window).on("load", function () {
  const x = document.querySelector(".menu");
  var ilosc = 4;
  var ilosc2 = 3;
  if (x.offsetWidth < 600) {
    ilosc = 2;
    ilosc2 = 2;
  }
  $(".owl-carousel2").owlCarousel({
    nav: true,
    loop: false,
    items: ilosc,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
  });
  $(".owl-carousel3").owlCarousel({
    loop: false,
    nav: true,
    items: ilosc2,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
  });
  $(".owl-carousel1").owlCarousel({
    loop: true,
    items: 1,
    autoplay: false,
    autoplayTimeout: 10000,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
  });

  przesterzn_menu();
  przestan();
  const wid = document.querySelector(".menu");
  if (wid.offsetWidth < 426) {
    svg("menu-logo", "./eksport_grafika_XD/logo-5.svg");
    svg("mat-obraz", "./eksport_grafika_XD/pro08-5.svg");
  }
});

$(document).ready(function () {
  $(".video").on("click", function () {
    $(".play").toggleClass("active");
  });
});

$(document).ready(function () {
  $("#lista").on("click", function () {
    $(".blok6-obraz1").toggleClass("active");
    $(".blok6").toggleClass("active");
    $(".blok4-napis").toggleClass("active");
  });
});

$(document).ready(function () {
  $("#lista2").on("click", function () {
    $(".blok6-obraz1").toggleClass("active");
    $(".blok6").toggleClass("active");
    $(".blok4-napis").toggleClass("active");
  });
});

var lista = false;
var menu_przestrzen = 0;
var pro = false;

$(document).ready(function () {
  $(".menu-produkty").on("click", function () {
    const wartosc = document.getElementById("menu");
    if (wartosc.offsetWidth > 1024) {
      $(".menu-produkty2").toggleClass("active");
      document.getElementById("menu-produkty").style.paddingTop =
        wartosc.offsetHeight * 0.6 + "px";
    } else {
      $(".menu-mini-lista").toggleClass("active");
      const wartosc2 = document.querySelector(".tabela-menu-ul");
      var margin = window.getComputedStyle(wartosc2);
      if (pro == false) {
        wartosc.style.overflow = "scroll";
        wartosc.style.paddingBottom = "0px";
        pro = true;
      } else {
        wartosc.style.overflow = "hidden";
        wartosc.style.paddingBottom = "";
        pro = false;
      }
      lista = true;
      console.log(wartosc.style.overflow);
      if (
        document.getElementById("menu-lista").style.height !=
          wartosc2.offsetHeight + parseFloat(margin["marginTop"]) + "px" &&
        document.querySelector("body").offsetWidth > 425
      ) {
        document.getElementById("menu-lista").style.height =
          wartosc2.offsetHeight + parseFloat(margin["marginTop"]) + "px";
      }
    }
  });
});

var menu = true;
var przycisk = true;

$(document).ready(function () {
  $("#hamburger").on("click", function () {
    document.getElementById("produkty").href = "#";
    const m = document.getElementById("menu-lista");
    m.style.transition = "all 1.5s ease";
    $(".menu-lista").toggleClass("active");
    $(".menu-logo").toggleClass("active");
    if (pro == true) {
      const wartosc = document.getElementById("menu");
      wartosc.style.overflow = "hidden";
      wartosc.style.paddingBottom = "";
      pro = false;
    }
    if (przycisk == true) {
      $(".menu-przycisk").addClass("active");
      przycisk = false;
    } else {
      $(".menu-przycisk").removeClass("active");
      przycisk = true;
    }
    if (menu == false) {
      menu = true;
      m.style.height = "";
    } else {
      menu = false;
      m.style.height = menu_przestrzen + "px";
    }
    if (lista == true) {
      m.style.height = "";
      lista = false;
      setTimeout(function () {
        $(".menu-mini-lista").removeClass("active");
      }, 2000);
    }
  });
});

$(window).resize(function () {
  przesterzn_menu();
  przestan();
});

$(document).ready(function () {
  $("#check1").on("click", function () {
    checkbox("box1");
  });
  $("#check2").on("click", function () {
    checkbox("box2");
  });
});

function checkbox(localization) {
  if (document.getElementById(localization).checked != true) {
    document.getElementById(localization).checked = true;
  } else {
    document.getElementById(localization).checked = false;
  }
}

function svg(id, url) {
  if (document.getElementById(id) != null) {
    document.getElementById(id).src = url;
  }
}

function przestan() {
  if (menu == true) {
    const xz = document.getElementById("menu");
    if (xz.offsetWidth < 1025) {
      var x = document.getElementById("hamburger");
    } else {
      var x = document.getElementById("menu-logo");
    }
    const s = window.getComputedStyle(document.getElementById("menu"));
    const number = parseInt(x.offsetHeight) + parseInt(s.paddingTop) * 2;
    console.log(number + " " + parseInt(x.offsetHeight) + " " + s.paddingTop);
    document.getElementById("przesrzen").style.height = number + "px";
  }
}

function przesterzn_menu() {
  const x = document.getElementById("menu");
  if (x.offsetWidth < 1026) {
    if (menu == true) {
      if (x.offsetWidth < 426) {
        menu_przestrzen =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight;
        $(".menu-lista").removeClass("active");
      } else {
        const y = document.getElementsByClassName("tabela-menu-ul")[0];
        const number =
          parseInt(y.offsetHeight) +
          parseInt(parseFloat(window.getComputedStyle(y)["marginTop"]));
        menu_przestrzen = number;
        $(".menu-lista").removeClass("active");
      }
    } else {
      document.getElementById("menu-lista").style.height = "0px";
      $(".menu-przycisk").removeClass("active");
      $(".menu-lista").removeClass("active");
      menu = true;
      przycisk = true;
      $(".menu-mini-lista").removeClass("active");
      $(".menu-logo").removeClass("active");
      lista = false;
      if (pro == true) {
        x.style.overflow = "hidden";
        x.style.paddingBottom = "";
        pro = false;
      }
    }
  }
}
