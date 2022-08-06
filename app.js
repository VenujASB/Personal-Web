const filter_btns = document.querySelectorAll(".filter-btn");
const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");
const records_wrap = document.querySelector(".records");
const records_numbers = document.querySelectorAll(".number");
const footer_input = document.querySelector(".footer-input");
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");

footer_input.addEventListener("focus", () => {
  footer_input.classList.add("focus");
});

footer_input.addEventListener("blur", () => {
  if (footer_input.value != "") return;
  footer_input.classList.remove("focus");
});

function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
  }
});

links.forEach((link) => link.addEventListener("click", () => closeMenu()));

filter_btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    filter_btns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    let filterValue = btn.dataset.filter;

    $(".grid").isotope({ filter: filterValue });
  })
);

$(".grid").isotope({
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
  transitionDuration: "0.6s",
});

window.addEventListener("scroll", () => {
  skillsEffect();
  countUp();
});

function checkScroll(el) {
  let rect = el.getBoundingClientRect();
  if (window.innerHeight >= rect.top + el.offsetHeight) return true;
  return false;
}

function skillsEffect() {
  if (!checkScroll(skills_wrap)) return;
  skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
}

function countUp() {
  if (!checkScroll(records_wrap)) return;
  records_numbers.forEach((numb) => {
    const updateCount = () => {
      let currentNum = +numb.innerText;
      let maxNum = +numb.dataset.num;
      let speed = 100;
      const increment = Math.ceil(maxNum / speed);

      if (currentNum < maxNum) {
        numb.innerText = currentNum + increment;
        setTimeout(updateCount, 1);
      } else {
        numb.innerText = maxNum;
      }
    };

    setTimeout(updateCount, 400);
  });
}

var mySwiper = new Swiper(".swiper-container", {
  speed: 1100,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});

// Disable copy content, prevent blacked out text, prevent "I" key, "J" key, "S" key + macOS, "U" key, "F12" key
jQuery(document).ready(function(){
  jQuery(function() {
        jQuery(this).bind("contextmenu", function(event) {
            event.preventDefault();
            alert('𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻\n\n𝘚𝘰𝘳𝘳𝘺 @𝘶𝘴𝘦𝘳 𝘳𝘪𝘨𝘩𝘵 𝘤𝘭𝘪𝘤𝘬 𝘪𝘴 𝘥𝘪𝘴𝘢𝘣𝘭𝘦. 𝘕𝘰𝘵𝘪𝘧𝘪𝘤𝘢𝘵𝘪𝘰𝘯 𝘧𝘳𝘰𝘮 VenujA ( 𝘈𝘥𝘮𝘪𝘯 𝘰𝘧 𝘞𝘦𝘣𝘴𝘪𝘵𝘦 )')
        });
    });
    (function() {
        'use strict';
        let style = document.createElement('style');
        style.innerHTML = '*{ user-select: none !important; }';
 
    document.body.appendChild(style);
    })();
    window.onload = function () {
        document.addEventListener("contextmenu", function (e) {
            e.preventDefault();
            }, false);
            document.addEventListener("keydown", function (e) {
                
               if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
                   disabledEvent(e);
               }
                
               if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
                   disabledEvent(e);
               }
                
               if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
                   disabledEvent(e);
               }
                
               if (e.ctrlKey && e.keyCode == 85) {
                   disabledEvent(e);
               }
               
               if (event.keyCode == 123) {
                   disabledEvent(e);
               }
            }, false);
            function disabledEvent(e) {
               if (e.stopPropagation) {
                   e.stopPropagation();
               } else if (window.event) {
                   window.event.cancelBubble = true;
               }
               e.preventDefault();
               return false;
             
        }
    }
});

