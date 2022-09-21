export function changeSection(setFunc, sectionName, menuState, setMenuFunc) {
  setFunc(sectionName);
  if (menuState) setMenuFunc(!menuState);
}
