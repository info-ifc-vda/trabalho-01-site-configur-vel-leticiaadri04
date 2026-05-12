 let fontSize = 16;

  const minFontSize = 12;
  const maxFontSize = 24;

  function toggleTheme() {
    document.body.classList.toggle("dark-mode");
  }

  function increaseFont() {
    if (fontSize < maxFontSize) {
      fontSize += 2;
      document.body.style.fontSize = fontSize + "px";
    }
  }

  function decreaseFont() {
    if (fontSize > minFontSize) {
      fontSize -= 2;
      document.body.style.fontSize = fontSize + "px";
    }
  }

  function changeImage(src) {
    document.getElementById("mainImage").src = src;
  }