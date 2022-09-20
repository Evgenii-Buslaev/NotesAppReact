export function saveNotes(list) {
  if (localStorage.getItem("notes")) {
    localStorage.removeItem("notes");
  }
  localStorage.setItem("notes", JSON.stringify(list));
}
