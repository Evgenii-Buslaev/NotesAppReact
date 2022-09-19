export function changeMode(mode, setFunc) {
  mode === "light" ? setFunc("dark") : setFunc("light");
}
