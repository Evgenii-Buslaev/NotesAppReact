import styles from "../css/components/NoteInput.module.css";

function ImageButton({ onClickHandler, title, imageSrc, imageAlt }) {
  return (
    <button onClick={onClickHandler} title={title}>
      <img
        style={{ width: "2rem", marginTop: "1rem" }}
        className={styles.formButtons}
        src={imageSrc}
        alt={imageAlt}
      />
    </button>
  );
}

export default ImageButton;
