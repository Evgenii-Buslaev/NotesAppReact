export function changeMode(mode, setFunc) {
  mode === "light" ? setFunc("dark") : setFunc("light");
}

export function saveMode(mode) {
  if (!localStorage.getItem("mode")) {
    localStorage.setItem("mode", mode);
  }
}
