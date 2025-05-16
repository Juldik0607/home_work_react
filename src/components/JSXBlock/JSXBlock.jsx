import styles from "./JSXBlock.module.css";

function JSXBlock() {
  return (
    <div className={styles.block}>
      <h2 className={styles.heading}>Варіант 1: JSX</h2>
      <p className={styles.text}>Цей блок створено за допомогою JSX.</p>
      <img
        className={styles.ksenja}
        src={`${process.env.PUBLIC_URL}/images/ksenja.png`}
        alt="Ксеня"
      />
    </div>
  );
}

export default JSXBlock;
