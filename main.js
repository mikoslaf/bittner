$(function() {
  let ilosc = 4;
  let ilosc2 = 3;
  if ($("body").width() < 600) {
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
  if ($("body").width() < 426) {
    svg("menu-logo", "./eksport_grafika_XD/logo-5.svg");
    svg("mat-obraz", "./eksport_grafika_XD/pro08-5.svg");
  }
});

let lista = false;
let menu_przestrzen = 0;
let pro = false;
let menu = true;
let przycisk = true;


$(function() {
  $(".video").on("click", function () {
    $(".play").toggleClass("active");
  });

  $("#lista").on("click", function () {
    $(".blok6-obraz1").toggleClass("active");
    $(".blok6").toggleClass("active");
    $(".blok4-napis").toggleClass("active");
  });

  $("#lista2").on("click", function () {
    $(".blok6-obraz1").toggleClass("active");
    $(".blok6").toggleClass("active");
    $(".blok4-napis").toggleClass("active");
  });

  $(".menu-produkty").on("click", function () {
    if ($("body").width() > 1024) 
    {
      $(".menu-produkty2").toggleClass("active");
      const NewSize = $(".menu").outerHeight() * 0.6;
      $("#menu-produkty").css("padding-top",  NewSize + "px");
    } 
    else 
    {
      $(".menu-mini-lista").toggleClass("active");
    
      const wartosc = $(".tabela-menu-ul");
      if (pro == false) {
        wartosc.css("overflow", "scroll");
        wartosc.css("padding-bottom", "0px");
        pro = true;
      } else {
        wartosc.css("overflow", "hidden");
        wartosc.css("padding-bottom", "");
        pro = false;
      }
      lista = true;

      const NewSize = Math.ceil(wartosc.outerHeight()) +  parseFloat(wartosc.css("margin-top"));

      if (
        $("#menu-lista").height() != NewSize &&
          $("body").width() > 425
      ) {
        $("#menu-lista").css("height", NewSize + "px");
      }
    }
  });
  
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
