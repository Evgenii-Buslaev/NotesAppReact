import styles from "../css/components/NoteInput.module.css";

function ImageButton({ onClickHandler, title, imageSrc, imageAlt }) {
  return (
    <button
      className={styles.formButtons}
      onClick={onClickHandler}
      title={title}
    >
      <img src={imageSrc} alt={imageAlt} />
    </button>
  );
}

export default ImageButton;
