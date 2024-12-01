document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const overlay = document.querySelector(".overlay");
  const links = document.querySelectorAll("nav a");
  const abcdDivs = document.querySelectorAll(".stories");
  const preloader = document.getElementById("preloader");
  const preloaderVideo = document.getElementById("preloader-video");

  setTimeout(() => {
    header.classList.add("slide-down");
  }, 100);

  function handleClick(target) {
    header.classList.remove("slide-down");
    header.classList.add("slide-up");
    overlay.classList.add("active");

    setTimeout(() => {
      preloader.classList.remove("hidden");
      preloader.style.visibility = "visible";
      preloaderVideo.currentTime = 0;
      preloaderVideo.play();

      setTimeout(() => {
        if (target.tagName === 'A') {
          window.location.href = target.href;
        } else if (target.classList.contains("stories")) {
          const targetURL = target.getAttribute("data-url");
          if (targetURL) {
            window.location.href = targetURL;
          } else {
            console.error("No 'data-url' attribute found for this div.");
          }
        }
      }, 3300);
    }, 500);
  }

  links.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      handleClick(link);
    });
  });

  abcdDivs.forEach(div => {
    div.addEventListener("click", (event) => {
      event.preventDefault();
      handleClick(div);
    });
  });
});

window.onload = () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.classList.add("hidden");
  }
};




document.addEventListener('DOMContentLoaded', () => {
  const poems = document.querySelectorAll('.poems');
  const mainmain = document.querySelector('.mainmain');

  poems.forEach(poem => {
      poem.addEventListener('click', () => {
          const isFocused = poem.classList.contains('focused-poem');
          poems.forEach(p => {
              p.classList.remove('focused-poem', 'unfocusing');
          });

          if (!isFocused) {
              poem.classList.add('focused-poem');

              // Hide overflow in the container when a poem is focused
              if (mainmain) {
                  mainmain.style.overflowY = 'hidden';
                  mainmain.style.paddingRight = '17px';
                  mainmain.offsetHeight;
              }
          } else {
              poem.classList.add('unfocusing');

              // After 500ms, remove the focus and blur
              setTimeout(() => {
                  poem.classList.remove('unfocusing', 'focused-poem');

                  if (mainmain) {
                      mainmain.style.overflowY = 'auto';
                      mainmain.style.paddingRight = '';
                      mainmain.offsetHeight;
                  }
              }, 1000);
          }
      });
  });

  // Close unfocused poem on Escape key press
  document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
          poems.forEach(poem => {
              if (poem.classList.contains('focused-poem')) {
                  poem.classList.add('unfocusing');
                  setTimeout(() => {
                      poem.classList.remove('unfocusing', 'focused-poem');
                      mainmain.style.overflowY = 'auto';
                      mainmain.style.paddingRight = '';
                      mainmain.offsetHeight;
                  }, 1000);
              }
          });
      }
  });

  // Close poem if click is outside the poem
  document.addEventListener('click', (e) => {
      if (!e.target.closest('.poems')) {
          poems.forEach(poem => {
              if (poem.classList.contains('focused-poem')) {
                  poem.classList.add('unfocusing');
                  setTimeout(() => {
                      poem.classList.remove('unfocusing', 'focused-poem');
                      mainmain.style.overflowY = 'auto';
                      mainmain.style.paddingRight = '';
                      mainmain.offsetHeight;
                  }, 1000);
              }
          });
      }
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const dropdownMenu = document.querySelector('nav');

  menuToggle.addEventListener('click', () => {
      dropdownMenu.classList.toggle('show');
  });
});
