import styles from "./HomeworkForm.module.css";

function HomeworkForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    console.log("Отримані дані:", {
      name,
      email,
      message,
    });

    alert("Дані надіслано. Для перевірки перейдіть в консоль.");

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.heading}>Форма перевірки домашки</h2>

      <input
        type="text"
        name="name"
        placeholder="Ваше ім’я"
        className={styles.input}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        className={styles.input}
      />

      <textarea
        name="message"
        placeholder="Повідомлення"
        className={styles.textarea}
      ></textarea>

      <button type="submit" className={styles.button}>
        Надіслати
      </button>
    </form>
  );
}

export default HomeworkForm;
