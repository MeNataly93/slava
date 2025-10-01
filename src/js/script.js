// --KONTAKT
// -Месенджер
document
  .getElementById("messengerButton")
  .addEventListener("click", function () {
    window.open("https://www.facebook.com/groups/3081311612171554", "_blank");
  });

// -Звонок
function makeCall() {
  window.location.href = "tel:+380960352339";
}

// --Видео внутри TITLE
document.addEventListener("DOMContentLoaded", () => {
  const overlayvideo = document.getElementById("overlay-video");
  const videoLink = document.getElementById("videoLink");
  const videoButton = document.getElementById("videoButton");

  const showOverlay = () => {
    overlayvideo.style.display = "flex";
    // videoContainer.style.display = "block";
  };

  const hideOverlay = () => {
    overlayvideo.style.display = "none";
    // videoContainer.style.display = "none";
  };

  videoLink.addEventListener("click", (event) => {
    event.preventDefault();
    showOverlay();
  });

  videoButton.addEventListener("click", (event) => {
    event.preventDefault();
    showOverlay();
  });

  overlayvideo.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    if (overlayvideo.style.display == "flex") {
      hideOverlay();
    } else {
      showOverlay();
    }
  });
});

// --Ta kontakt med oss - кнопка в баннере
// -При клике в десктопной версии - переход к нужному блоку, но на 250 пикселей выше
document
  .getElementById("bannerbutton")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    var kontaktblock = document.getElementById("ordre");
    var offset = 250;
    var elementPosition =
      kontaktblock.getBoundingClientRect().top + window.pageYOffset;
    var offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });

// -При клике в мобильной версии, до 1200 пикс - переход к нужному блоку, но на 90 пикселей выше
document
  .getElementById("bannerbutton")
  .addEventListener("click", function (event) {
    if (window.innerWidth <= 1200) {
      event.preventDefault(); // Prevent the default behavior of the link
      var kontaktblock = document.getElementById("ordre");
      var offset = 90;
      var elementPosition =
        kontaktblock.getBoundingClientRect().top + window.pageYOffset;
      var offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });

// --KONTAKTBUTTON
// -При клике в десктопной версии - переход к нужному блоку, но на 250 пикселей выше
document
  .getElementById("kontaktbutton")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    var kontaktblock = document.getElementById("ordre");
    var offset = 250;
    var elementPosition =
      kontaktblock.getBoundingClientRect().top + window.pageYOffset;
    var offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });

// -При клике в мобильной версии, до 1200 пикс - переход к нужному блоку, но на 90 пикселей выше

document
  .getElementById("kontaktbutton")
  .addEventListener("click", function (event) {
    if (window.innerWidth <= 1200) {
      event.preventDefault(); // Prevent the default behavior of the link
      var kontaktblock = document.getElementById("ordre");
      var offset = 90;
      var elementPosition =
        kontaktblock.getBoundingClientRect().top + window.pageYOffset;
      var offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });

// --ARROW SCROLL
// -Visible or not
const arrow = document.getElementById("arrow");

function arrowNone() {
  let scrollHeight = window.pageYOffset;
  if (scrollHeight < 460) {
    arrow.style.display = "none";
  } else {
    arrow.style.display = "block";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

arrow.addEventListener("click", function (event) {
  event.preventDefault();
  scrollToTop();
});

window.addEventListener("scroll", arrowNone);

// Вызываем функцию сразу, чтобы установить начальное состояние при загрузке страницы
arrowNone();

// --MAIN SLIDER

const settings = {
  arrows: false,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplaySpeed: 5000,
  infinity: true,
  speed: 2000,
  dots: true,
  appendDots: ".mydots",
  dotsClass: "dots-box",
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 2 } },
    { breakpoint: 990, settings: { slidesToShow: 1 } },
  ],
};

$("#slider-main").slick(settings);

// --FANCY BOX
Fancybox.bind("[data-fancybox]", {
  Toolbar: false,
  Thumbs: false,
});

// --Услуги - описание в мобильной версии появляется при клике, действует до расширения 992 пикс (далее - работа ховера в css)

const parents = document.querySelectorAll(".tilleg-help-block");

function handleParentClick(event) {
  const parent = event.currentTarget;

  const img = parent.querySelector(".tilleg_item-img");
  const text = parent.querySelector(".tilleg_item-description");

  // Сбрасываем стили всех .tilleg-help-block
  parents.forEach((element) => {
    const elementImg = element.querySelector(".tilleg_item-img");
    const elementText = element.querySelector(".tilleg_item-description");

    if (elementImg) {
      elementImg.style.visibility = "visible";
    }

    if (elementText) {
      elementText.style.visibility = "hidden";
    }
  });

  // Устанавливаем стили у текущего кликнутого элемента
  if (img) {
    img.style.visibility = "hidden";
  }

  if (text) {
    text.style.visibility = "visible";
  }
}

function handleHoverOnListFrame() {
  // Проверяем ширину окна
  if (window.innerWidth >= 1200) {
    const img = this.querySelector(".tilleg_item-img");
    const text = this.querySelector(".tilleg_item-description");

    if (img) {
      img.style.visibility = "hidden";
    }

    if (text) {
      text.style.visibility = "visible";
    }
  }
}

function handleHoverOffListFrame() {
  // Проверяем ширину окна
  if (window.innerWidth >= 1200) {
    const img = this.querySelector(".tilleg_item-img");
    const text = this.querySelector(".tilleg_item-description");

    if (img) {
      img.style.visibility = "visible";
    }

    if (text) {
      text.style.visibility = "hidden";
    }
  }
}

function updateEventListeners() {
  if (window.innerWidth <= 1200) {
    parents.forEach((parent) => {
      parent.addEventListener("click", handleParentClick);
    });
  } else {
    parents.forEach((parent) => {
      parent.removeEventListener("click", handleParentClick);
    });

    // Сбрасываем стили всех .tilleg-help-block при переходе на 1200 пикселей и более
    parents.forEach((element) => {
      const elementImg = element.querySelector(".tilleg_item-img");
      const elementText = element.querySelector(".tilleg_item-description");

      if (elementImg) {
        elementImg.style.visibility = "visible";
      }

      if (elementText) {
        elementText.style.visibility = "hidden";
      }
    });

    // Добавляем обработчики ховера на .tilleg_list_frame только для 1200 пикселей и более
    const listFrames = document.querySelectorAll(".tilleg_list_frame");
    listFrames.forEach((frame) => {
      frame.addEventListener("mouseenter", handleHoverOnListFrame);
      frame.addEventListener("mouseleave", handleHoverOffListFrame);
    });
  }
}

// Добавляем обработчики событий при загрузке страницы и изменении размера окна
window.addEventListener("load", updateEventListeners);
window.addEventListener("resize", updateEventListeners);

// Вызываем обновление обработчиков сразу после загрузки скрипта
updateEventListeners();

// --При клике на вкладках в хедере (от 992 пикс) - переход к нужному блоку, но на 100 пикселей выше

// -Helter
document
  .getElementById("tab-helter")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    var helter = document.getElementById("helter");
    var offset = 100;
    var elementPosition =
      helter.getBoundingClientRect().top + window.pageYOffset;
    var offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });

// -Tjenester
document
  .getElementById("tab-tjenester")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    var tjenester = document.getElementById("tjenester");
    var offset = 100;
    var elementPosition =
      tjenester.getBoundingClientRect().top + window.pageYOffset;
    var offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });

// -Tjenestepakker
document
  .getElementById("tab-tjenestepakker")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    var tjenestepakker = document.getElementById("tjenestepakker");
    var offset = 100;
    var elementPosition =
      tjenestepakker.getBoundingClientRect().top + window.pageYOffset;
    var offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });

// -Ordre
document
  .getElementById("tab-ordre")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    var ordre = document.getElementById("ordre");
    var offset = 100;
    var elementPosition =
      ordre.getBoundingClientRect().top + window.pageYOffset;
    var offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });

// -Galleri
document
  .getElementById("tab-galleri")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    var galleri = document.getElementById("galleri");
    var offset = 100;
    var elementPosition =
      galleri.getBoundingClientRect().top + window.pageYOffset;
    var offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });

// --Бургерное меню в мобильной версии
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu");
  const burgerMenu = document.querySelector(".burger");
  const burgeroverlay = document.querySelector(".burger-overlay");
  const menuItems = document.querySelectorAll(".burger a"); // Assuming your menu items are <a> tags inside the .burger menu

  menuButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    if (burgerMenu.style.display === "block") {
      burgerMenu.style.display = "none";
      burgeroverlay.style.display = "none";
      document.getElementById("menu-burger-img").src = "./i/img/menu.png";
    } else {
      burgerMenu.style.display = "block";
      burgeroverlay.style.display = "block";
      document.getElementById("menu-burger-img").src = "./i/img/closeimg.png";
    }
  });

  burgeroverlay.addEventListener("click", function () {
    burgerMenu.style.display = "none";
    burgeroverlay.style.display = "none";
    document.getElementById("menu-burger-img").src = "./i/img/menu.png";
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      burgerMenu.style.display = "none";
      burgeroverlay.style.display = "none";
      document.getElementById("menu-burger-img").src = "./i/img/menu.png";
    });
  });
});

// --При клике на вкладках в хедере (в мобильной версии, до 1200 пикс) - переход к нужному блоку, но на 120 пикселей выше
// -Helter
document
  .getElementById("mobtab-helter")
  .addEventListener("click", function (event) {
    if (window.innerWidth <= 1200) {
      event.preventDefault(); // Предотвращаем стандартное поведение ссылки
      var helter = document.getElementById("helter");
      var offset = 120;
      var elementPosition =
        helter.getBoundingClientRect().top + window.pageYOffset;
      var offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });

// -Tjenester
document
  .getElementById("mobtab-tjenester")
  .addEventListener("click", function (event) {
    if (window.innerWidth <= 1200) {
      event.preventDefault(); // Предотвращаем стандартное поведение ссылки
      var tjenester = document.getElementById("tjenester");
      var offset = 120;
      var elementPosition =
        tjenester.getBoundingClientRect().top + window.pageYOffset;
      var offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });

// -Tjenestepakker
document
  .getElementById("mobtab-tjenestepakker")
  .addEventListener("click", function (event) {
    if (window.innerWidth <= 1200) {
      event.preventDefault(); // Предотвращаем стандартное поведение ссылки
      var tjenestepakker = document.getElementById("tjenestepakker");
      var offset = 120;
      var elementPosition =
        tjenestepakker.getBoundingClientRect().top + window.pageYOffset;
      var offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });

// -Ordre
document
  .getElementById("mobtab-ordre")
  .addEventListener("click", function (event) {
    if (window.innerWidth <= 1200) {
      event.preventDefault(); // Предотвращаем стандартное поведение ссылки
      var ordre = document.getElementById("ordre");
      var offset = 120;
      var elementPosition =
        ordre.getBoundingClientRect().top + window.pageYOffset;
      var offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });

// -Galleri
document
  .getElementById("mobtab-galleri")
  .addEventListener("click", function (event) {
    if (window.innerWidth <= 1200) {
      event.preventDefault(); // Предотвращаем стандартное поведение ссылки
      var galleri = document.getElementById("galleri");
      var offset = 120;
      var elementPosition =
        galleri.getBoundingClientRect().top + window.pageYOffset;
      var offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });

// --Всплывающие блоки с героями при нажатии - работа кнопки закрытия блока
document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.querySelector(".overlayhelter");
  const closeButton = document.querySelector(".close-button");

  if (closeButton) {
    closeButton.addEventListener("click", function () {
      overlay.style.display = "none";
    });
  }
});

// --Всплывающие блоки с героями при нажатии - открытие всплывающего блока

document.addEventListener("DOMContentLoaded", function () {
  const heroes = document.getElementById("helter-grid");
  const heroesBlock1 = document.querySelector(".heroes_grid_block_1");
  const overlay1 = document.querySelector(".overlayhelter_1");
  const closeBtn1 = document.querySelector(".overlayhelter_1 .close-button_1");
  const heroesBlock2 = document.querySelector(".heroes_grid_block_2");
  const overlay2 = document.querySelector(".overlayhelter_2");
  const closeBtn2 = document.querySelector(".overlayhelter_2 .close-button_2");
  const heroesBlock3 = document.querySelector(".heroes_grid_block_3");
  const overlay3 = document.querySelector(".overlayhelter_3");
  const closeBtn3 = document.querySelector(".overlayhelter_3 .close-button_3");
  const heroesBlock4 = document.querySelector(".heroes_grid_block_4");
  const overlay4 = document.querySelector(".overlayhelter_4");
  const closeBtn4 = document.querySelector(".overlayhelter_4 .close-button_4");

  // Изначально скрываем overlay (если нужно)
  overlay1.style.display = "none";
  overlay2.style.display = "none";
  overlay3.style.display = "none";
  overlay4.style.display = "none";

  // Открытие overlay
  heroesBlock1.addEventListener("click", function () {
    heroes.style.display = "none";
    overlay1.style.display = "block";
  });

  heroesBlock2.addEventListener("click", function () {
    heroes.style.display = "none";
    overlay2.style.display = "block";
  });

  heroesBlock3.addEventListener("click", function () {
    heroes.style.display = "none";
    overlay3.style.display = "block";
  });

  heroesBlock4.addEventListener("click", function () {
    heroes.style.display = "none";
    overlay4.style.display = "block";
  });

  // Закрытие overlay
  closeBtn1.addEventListener("click", function () {
    overlay1.style.display = "none";
    heroes.style.display = "grid";
  });

  closeBtn2.addEventListener("click", function () {
    overlay2.style.display = "none";
    heroes.style.display = "grid";
  });

  closeBtn3.addEventListener("click", function () {
    overlay3.style.display = "none";
    heroes.style.display = "grid";
  });

  closeBtn4.addEventListener("click", function () {
    overlay4.style.display = "none";
    heroes.style.display = "grid";
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const overlay = document.querySelector(".overlayhelter");
//   const closeButton = document.querySelector(".close-button");
//   const triggerBlock = document.querySelector(".heroes_grid_block_1");

//   if (triggerBlock) {
//     triggerBlock.addEventListener("click", function () {
//       overlay.style.display = "flex";
//     });
//   }

//   if (closeButton) {
//     closeButton.addEventListener("click", function () {
//       overlay.style.display = "none";
//     });
//   }

//   overlay.addEventListener("click", function (event) {
//     if (event.target === overlay) {
//       overlay.style.display = "none";
//     }
//   });
// });

// --При клике на вкладку внутри бургерного меню - меню и затемнение закрывается
// document.addEventListener("DOMContentLoaded", function () {
//   const menuButton = document.getElementById("menu");
//   const burgerMenu = document.querySelector(".burger");
//   const overlay = document.querySelector(".overlay");
//   const menuItems = document.querySelectorAll(".burger_list_item");

//   menuItems.addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent default link behavior
//     if (burgerMenu.style.display = "block";) {
//       closeMenu();
//     } else {
//       openMenu();
//     }
//   });

//   overlay.addEventListener("click", function () {
//     closeMenu();
//   });

//   menuItems.forEach((item) => {
//     item.addEventListener("click", function () {
//       closeMenu();
//     });
//   });

//   function openMenu() {
//     burgerMenu.classList.add("show");
//     overlay.classList.add("show");
//   }

//   function closeMenu() {
//     burgerMenu.classList.remove("show");
//     overlay.classList.remove("show");
//   }
// });
// ----------------------------------------------------------------------------------------------

// // --SHADOW FOR NAV IN SCROLL

// const nav = document.getElementById("nav");
// document.onscroll = function navStyleScroll() {
//   const navCoords = nav.getBoundingClientRect();
//   nav.style.boxShadow = "none";

//   if (navCoords.top === 0) {
//     nav.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.2)";
//   }

//   const scrollTop = document.documentElement.scrollTop;
//   if (scrollTop === 0) {
//     nav.style.boxShadow = "none";
//   }
// };

// // --MENU-BUTTON and MOBILE MENU
// // -Button
// const menuButtonContainer = $("#menu-button-container");
// const menuButton = $("#menu-button");
// const closeButton = $("#close-button");

// // -Mobile menu
// const mobileMenuContainer = $("#menu-container-mobile");
// const mobileMenuSublist = $(".nav__mobile__hidden-list__sublist");
// const mobileMenuPlus = $(".nav__mobile__hidden-list__item_arrow");
// const mobileMenuItem = $(".nav__mobile__hidden-list__item");

// // -Open or close mobile-menu

// menuButtonContainer.on("click", function (e) {
//   console.log("hi");
//   e.preventDefault();
//   menuButton.toggleClass("none");
//   if (menuButton.hasClass("none")) {
//     closeButton.removeClass("none");
//     mobileMenuContainer.slideDown();
//   } else {
//     closeButton.addClass("none");
//     mobileMenuContainer.slideUp();
//     mobileMenuPlus.html("+");
//     mobileMenuSublist.hide();
//   }
// });

// // menuButtonContainer.click(handler);

// // function handler(e) {
// //   console.log(e.target);

// //   if (menuButton.css("display") == "none") {
// //     menuButton.css("display", "block");
// //     closeButton.css("display", "none");
// //     mobileMenuContainer.slideUp();
// //     mobileMenuSublist.hide();
// //   } else {
// //     menuButton.css("display", "none");
// //     closeButton.css("display", "block");
// //     mobileMenuContainer.slideDown();
// //     mobileMenuPlus.html("+");
// //   }
// // }

// // -Hide opened mobile-menu in desctop version
// function resetMobileMenu() {
//   menuButton.removeClass("none");
//   closeButton.addClass("none");
//   mobileMenuContainer.hide();
//   mobileMenuPlus.html("+");
//   mobileMenuSublist.hide();
// }

// // -Open subitems when click on +

// mobileMenuItem.on("click", function () {
//   $(this)
//     .closest("li.first-list")
//     .prevAll("li.first-list")
//     .next("ul")
//     .slideUp()
//     .end()
//     .closest("li.first-list")
//     .children()
//     .html("+");
//   $(this)
//     .closest("li.first-list")
//     .nextAll("li.first-list")
//     .next("ul")
//     .slideUp()
//     .end()
//     .closest("li.first-list")
//     .children()
//     .html("+");

//   if ($("#about-arrow").is(`:contains("+")`)) {
//     $("#about-gallery-arrow").html("+");
//     $("#about-gallery-sublist").slideUp();
//   }

//   if ($(this).children().is(`:contains("+")`)) {
//     $(this).children().html("-");
//     $(this).next(".nav__mobile__hidden-list__sublist").slideDown();
//     return;
//   } else if ($(this).children().is(`:contains("-")`)) {
//     $(this).children().html("+");
//     $(this).next(".nav__mobile__hidden-list__sublist").slideUp();

//     return;
//   }
//   return;
// });

// // --DESCTOP MENU

// // -Open menu

// const menuItem = $(".nav-container__nav__item");
// const menuSublist = $(".nav__desctop-list");

// // -Hover on main menu item
// // *When hover on main menu - open list of nesessary item

// menuItem.mouseover(function () {
//   // *Close other blocks
//   // $(this)
//   //   .siblings(".nav-container__nav__item")
//   //   .removeClass("opened")
//   //   .children(".nav__desctop-list")
//   //   .slideUp("slow");
//   // *Find coords and give it to item-block
//   let subItemTop = $(this).height();

//   let subItemleft = -$(this).children(".nav__desctop-list").width() * 0.4;

//   $(this).children(".nav__desctop-list").css({
//     left: subItemleft,
//     top: subItemTop,
//   });

//   // *Open nesessary item-block
//   $(this).addClass("opened").children(".nav__desctop-list").slideDown("slow");
// });

// // -Open second sublist
// // * Open second list, if it is
// // *All items
// const subItems = $(".nav__desctop-list__item__sub");
// // *Items, which have second list
// const secondSublist = $(".second-sublist");

// // * When mouse is on item with sublist - open sub item-block
// subItems.mouseover(function () {
//   // *Close other blocks

//   $(this)
//     .siblings(".nav__desctop-list__item__sub")
//     .removeClass("sub-opened")
//     .children("ul.nav__desctop-list")
//     .slideUp("slow");

//   // -Coords
//   let secondSubItemTop = $(this).position().top;
//   let secondSubItemleft = $(this).position().left + $(this).width();

//   $(this).children(".nav__desctop-list").css({
//     left: secondSubItemleft,
//     top: secondSubItemTop,
//   });

//   // *Open nessessary block

//   if ($(this).hasClass("second-sublist")) {
//     $(this)
//       .addClass("sub-opened")
//       .children("ul.nav__desctop-list")
//       .slideDown("slow");
//     return;
//   }

//   return;
// });

// // -Close sublist when it is not hover
// secondSublist.children("ul").mouseout(function () {
//   if (secondSublist.is(":hover")) {
//     return;
//   }

//   $(this)
//     .parent(".second-sublist")
//     .removeClass("sub-opened")
//     .children(".nav__desctop-list")
//     .slideUp("slow");
//   return;
// });

// // -Hide opened desctop-menu in mobile/tablet version
// function resetDesctopMenu() {
//   menuItem.removeClass("opened").children(".nav__desctop-list").slideUp("slow");
//   menuItem
//     .children("ul.nav__desctop-list")
//     .children(".second-sublist")
//     .removeClass("sub-opened")
//     .children("ul.nav__desctop-list")
//     .slideUp("slow");
//   return;
// }

// // -Close menu when it is not hover
// $(document).mouseover(function (e) {
//   if ($(e.target).is(".nav-container__nav__item")) {
//     return;
//   }
//   if ($(e.target).is(".nav-container__nav__item__point")) {
//     return;
//   }
//   if ($(e.target).is(".nav-container__nav__item__point use")) {
//     return;
//   }
//   if ($(e.target).is(".nav__desctop-list")) {
//     return;
//   }
//   if ($(e.target).is(".nav__desctop-list__item")) {
//     return;
//   }
//   resetDesctopMenu();
// });

// // // --SLIDER IN TITLE
// // $("#slider").slick({
// //   arrows: false,
// //   autoplay: true,
// //   slidesToShow: 1,
// //   slidesToScroll: 1,
// //   autoplaySpeed: 5000,
// //   infinity: true,
// //   fade: true,
// //   speed: 2000,
// // });

// // --COUNTER

// const statBlock = document.querySelector(".statinfo");
// // -Find nesessary coords
// // *Find coords every 10ms
// const checkCoordsInt = setInterval(checkCoords, 10);
// function checkCoords() {
//   // *Coords from statBlock to top
//   let statCoords = statBlock.getBoundingClientRect().top;
//   // *85% of visible display
//   let displayHeight = document.documentElement.clientHeight * 0.85;

//   if (statCoords < displayHeight) {
//     clearInterval(checkCoordsInt);
//     counterActive();
//   }
// }

// // -Coutner in active phase
// function counterActive() {
//   const counters = document.querySelectorAll(".js-counter");
//   counters.forEach((counter) => {
//     counter.innerText = "0";
//     const updateCounter = () => {
//       const target = +counter.getAttribute("data-target");
//       const c = +counter.innerText;
//       const increment = target / 32;

//       if (c < target) {
//         counter.innerText = `${Math.ceil(c + increment)}`;
//         setTimeout(updateCounter, 40);
//       } else counter.innerText = target;
//     };
//     updateCounter();
//   });
// }

// // --PRICES - LINES ANIMATION
// const lineFirst = document.querySelector(".js-92");
// const lineSecond = document.querySelector(".js-75");
// const lineThird = document.querySelector(".js-63");
// // -Find nesessary coords
// // *Find coords every 10ms
// const checkLineCoordsInt = setInterval(checkLineCoords, 10);
// function checkLineCoords() {
//   // *Coords from Line to top
//   let lineCoords = lineFirst.getBoundingClientRect().top;
//   // *85% of visible display
//   let displayHeight = document.documentElement.clientHeight * 0.85;

//   if (lineCoords < displayHeight) {
//     lineFirst.classList.add("js-92_active");
//     setTimeout(function () {
//       lineSecond.classList.add("js-75_active");
//       setTimeout(function () {
//         lineThird.classList.add("js-63_active");
//       }, 100);
//       clearInterval(checkLineCoordsInt);
//     }, 100);
//   }
// }

// // --OTHER
// function initMobile() {
//   resetDesctopMenu();
//   scrollTo();
//   console.log("is-mobile");
// }

// function initTablet() {
//   resetDesctopMenu();
//   scrollTo();
//   console.log("is-tablet");
// }

// function initDesktop() {
//   resetMobileMenu();
//   scrollTo();
//   console.log("is-desktop");
// }

// ssm.addStates([
//   {
//     id: "mobile",
//     query: "(max-width: 640px)",
//     onEnter: function () {
//       initMobile();
//     },
//   },
//   {
//     id: "tablet",
//     query: "(min-width: 641px) and (max-width: 1199px)",
//     onEnter: function () {
//       initTablet();
//     },
//   },
//   {
//     id: "desktop",
//     query: "(min-width: 1200px)",
//     onEnter: function () {
//       initDesktop();
//     },
//   },
// ]);
