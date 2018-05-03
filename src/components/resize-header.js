function resizeHeader() {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 300,
        header = document.getElementById("header");
        
  if (distanceY > shrinkOn) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
}

export default resizeHeader;