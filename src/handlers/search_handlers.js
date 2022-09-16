export function searchNote(text, list, setFoundList, setInput) {
  let filtered = list.filter((elem) => elem.text.includes(text));
  setFoundList(filtered);
  if (filtered.length) {
    setFoundList(filtered);
  } else {
    setInput("");
    setFoundList([]);
    alert("Такой заметки не найдено");
  }
}

export function closeSearch(setInput, setFoundList) {
  setInput("");
  setFoundList([]);
}
