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
  projectTile.forEach( (tile) => {
    let contentTop = tile.getBoundingClientRect().top;
    let webPosition = window.innerHeight;
    if (contentTop < webPosition) {
      tile.classList.add("fade-in");
    } else {
      tile.classList.remove("fade-in");
    }
  })
  
}
