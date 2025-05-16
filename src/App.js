import styles from "./App.css";
import JSXBlock from "./components/JSXBlock/JSXBlock";
import NoJSXBlock from "./components/NoJSXBlock/NoJSXBlock";
import HomeworkForm from "./components/Form/HomeworkForm";

function App() {
  return (
    <div className={styles.container}>
      <JSXBlock />
      <NoJSXBlock />
      <HomeworkForm />
    </div>
  );
}

export default App;
