import SearchList from "./SearchList";
import NotesSection from "./NotesSection";

function MainCont({ searchList, section, value, changeInput, create }) {
  return (
    <>
      {searchList.length ? (
        <SearchList list={searchList} />
      ) : (
        <NotesSection
          section={section}
          value={value}
          changeInput={changeInput}
          create={create}
        />
      )}
    </>
  );
}

export default MainCont;
