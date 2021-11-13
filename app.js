// Declarations
const navButton = document.getElementById("navbar__button");
const links = document.querySelector(".navbar__links");
const navLink = document.querySelectorAll(".navbar__link");
// Event Listener
navButton.addEventListener("click", navToggle);
navLink.forEach(link => link.addEventListener("click", hideBar));
window.addEventListener("scroll", animate)
// Functions
function navToggle() {
  links.classList.toggle("navbar__showlinks");
}

function hideBar() {
  links.classList.remove("navbar__showlinks");
}

function animate() {
  const projectTile = document.querySelectorAll(".project-tile");
  const content = document.querySelectorAll('.message');
  const typing = document.querySelector(".bottom div div");
  projectTile.forEach( (tile) => {
    let contentTop = tile.getBoundingClientRect().top;
    let webPosition = window.innerHeight;
    if (contentTop < webPosition) {
      tile.classList.add("fade-in");
    } else {
      tile.classList.remove("fade-in");
    }
  })
  content.forEach(item => {
    let contentTop = item.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;
    console.lof(content);
    if (contentTop < windowHeight) {
      item.classList.add("up");
      typing.classList.add("up");
         content.forEach(up => {
        if (up.classList.contains("message1")) {
           setTimeout(function () {
            up.style.transition = "transform 500ms linear";
            up.style.transform = "translateY(0)";
            }, 7000);
        }   
        })
    } else {
      item.classList.remove("up");
      typing.classList.remove("up");
    }
    })
    
}
