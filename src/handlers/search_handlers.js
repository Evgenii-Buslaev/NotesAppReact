export function searchNote(text, list, setFoundList) {
  let filtered = list.filter((elem) => elem.text.includes(text));
  setFoundList(filtered);
  filtered.length ? setFoundList(filtered) : alert("Такой заметки не найдено");

  console.log(filtered);
}

export function closeSearch(setInput) {
  setInput("");
}
