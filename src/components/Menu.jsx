import MenuButton from "../UI/MenuButton";
import styles from "../css/components/Menu.module.css";

import storage from "../icons/menu/storage.png";
import collection from "../icons/menu/collection.png";
import recycleBin from "../icons/menu/recycle-bin.png";

function Menu({ change }) {
  return (
    <div className={styles.menuCont}>
      <MenuButton active={true} change={change} chosenSection="notes">
        <img src={storage} alt="storage-logo" />
        <h3>Заметки</h3>
      </MenuButton>

      <MenuButton active={false} change={change} chosenSection="collection">
        <img src={collection} alt="collection-logo" />
        <h3>Коллекция</h3>
      </MenuButton>

      <MenuButton active={false} change={change} chosenSection="recycleBin">
        <img src={recycleBin} alt="recycle-bin-logo" />
        <h3>Корзина</h3>
      </MenuButton>
    </div>
  );
}

export default Menu;
