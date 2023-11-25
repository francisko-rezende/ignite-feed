import { Header } from "./components/Header";
import "./globals.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <>
      <Header>Ignite Logo</Header>
      <div className={styles.wrapper}>
        <Sidebar />
      </div>
    </>
  );
}

export default App;
