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

const poems = document.querySelectorAll('.poems');
const mainmain = document.querySelector('.mainmain');  // Assuming there's a single element with class 'mainmain'

poems.forEach(poem => {
    poem.addEventListener('click', () => {
        const isFocused = poem.classList.contains('focused-poem');

        // Remove blur effect from the body and reset all poems
        document.body.classList.remove('blur-background');
        poems.forEach(p => {
            p.classList.remove('focused-poem', 'unfocusing');
        });

        // Toggle the 'mainmain' class for overflow control
        if (!isFocused) {
            document.body.classList.add('blur-background');
            poem.classList.add('focused-poem');
            if (mainmain) {
                mainmain.classList.add('overflow-hidden');  // Add overflow-hidden class when the poem is focused
                mainmain.style.overflowY = 'hidden';  // Directly set overflow-y to hidden when the poem is focused
                
                // Force reflow
                mainmain.offsetHeight;  // Trigger a reflow (this doesn't need to be assigned)
            }
        } else {
            poem.classList.add('unfocusing');
            setTimeout(() => {
                poem.classList.remove('unfocusing', 'focused-poem');
                document.body.classList.remove('blur-background');
                if (mainmain) {
                    mainmain.classList.remove('overflow-hidden');  // Remove overflow-hidden class when the poem is unfocused
                    mainmain.style.overflowY = 'scroll';  // Reset overflow-y to scroll when the poem is unfocused

                    // Force reflow again
                    mainmain.offsetHeight;  // Trigger a reflow
                }
            }, 500);
        }
    });
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        document.body.classList.remove('blur-background');
        poems.forEach(poem => {
            if (poem.classList.contains('focused-poem')) {
                poem.classList.add('unfocusing');
                setTimeout(() => {
                    poem.classList.remove('unfocusing', 'focused-poem');
                }, 500);
            }
        });
    }
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.poems')) {
        poems.forEach(poem => {
            if (poem.classList.contains('focused-poem')) {
                poem.classList.add('unfocusing');
                setTimeout(() => {
                    poem.classList.remove('unfocusing', 'focused-poem');
                    document.body.classList.remove('blur-background');
                }, 500);
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const dropdownMenu = document.querySelector('nav');

  menuToggle.addEventListener('click', () => {
      dropdownMenu.classList.toggle('show');
  });
});
