import { v4 as uuidv4 } from "uuid";

export function createItem(input, list, setInput, setList) {
  if (!input.length) {
    alert("Заметка не может быть пустой");
    return;
  }
  setList([
    ...list,
    {
      text: input,
      id: uuidv4(),
      section: "notes",
      index: list.length++,
    },
  ]);
  setInput("");
}

export function editItem(id, text, list, setList) {
  const changedArray = list.filter((elem) => elem.id !== id);
  const editingNote = list.filter((elem) => elem.id === id)[0];

  editingNote.text = text;

  const sortedEditedArray = [...changedArray, editingNote].sort((prev, curr) =>
    prev.index > curr.index ? 1 : -1
  );
  setList(sortedEditedArray);
}

export function replaceItem(id, sectionName, list, setList) {
  const changedArray = list.filter((elem) => elem.id !== id);
  const changedNote = list.filter((elem) => elem.id === id)[0];

  if (changedNote.section === sectionName) {
    return;
  }

  changedNote.section = sectionName;
  setList([...changedArray, changedNote]);
}

export function deleteItem(id, list, setList) {
  setList(list.filter((elem) => elem.id !== id));
}

export function clearSection(list, setList) {
  setList(list.filter((elem) => elem.section !== "recycleBin"));
}

export function clearStorage(setList) {
  setList([]);
}