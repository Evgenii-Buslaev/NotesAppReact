import { useState } from "react";

import MenuButton from "../UI/MenuButton";
import styles from "../css/components/Menu.module.css";

import storage from "../icons/menu/storage.png";
import collection from "../icons/menu/collection.png";
import recycleBin from "../icons/menu/recycle-bin.png";

function Menu({ change }) {
  const [buttonsArray, setButtonsArray] = useState([
    {
      active: true,
      id: 1,
      section: "notes",
      title: "Заметки",
      img: storage,
      alt: "storage-logo",
    },
    {
      active: false,
      id: 2,
      section: "collection",
      title: "Коллекция",
      img: collection,
      alt: "collection-logo",
    },
    {
      active: false,
      id: 3,
      section: "recycleBin",
      title: "Корзина",
      img: recycleBin,
      alt: "recycle-bin-logo",
    },
  ]);

  function toggleActive(id) {
    let changedArray = buttonsArray.map((elem) => {
      if (elem.id === id) {
        elem.active = true;
      } else {
        elem.active = false;
      }
      return elem;
    });
    setButtonsArray(changedArray);
  }

  return (
    <div className={styles.menuCont}>
      {buttonsArray.map((elem) => {
        return (
          <MenuButton
            active={elem.active}
            chosenSection={elem.section}
            id={elem.id}
            key={elem.id}
            change={change}
            toggleActive={toggleActive}
          >
            <img src={elem.img} alt={elem.alt} />
            <h3>{elem.title}</h3>
          </MenuButton>
        );
      })}
    </div>
  );
}

export default Menu;
