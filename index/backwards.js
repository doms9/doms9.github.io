function backwards() {
  if (history.length === 1) {
    window.location = "https://doms9.github.io";
  } else {
    history.back();
  }
}
