function ImageButton({ onClickHandler, title, imageSrc, imageAlt }) {
  return (
    <button onClick={onClickHandler} title={title}>
      <img
        style={{ width: 35, margin: "0.5rem auto" }}
        src={imageSrc}
        alt={imageAlt}
      />
    </button>
  );
}

export default ImageButton;
