import MenuButton from "../UI/MenuButton";
import styles from "../css/components/Menu.module.css";

import storage from "../icons/menu/storage.png";
import collection from "../icons/menu/collection.png";
import recycleBin from "../icons/menu/recycle-bin.png";

function Menu() {
  return (
    <div className={styles.menuCont}>
      <MenuButton active={true}>
        <img src={storage} alt="storage-logo" />
        <h3>Заметки</h3>
      </MenuButton>
      <MenuButton active={false}>
        <img src={collection} alt="collection-logo" />
        <h3>Коллекция</h3>
      </MenuButton>
      <MenuButton active={false}>
        <img src={recycleBin} alt="recycle-bin-logo" />
        <h3>Корзина</h3>
      </MenuButton>
    </div>
  );
}

export default Menu;
