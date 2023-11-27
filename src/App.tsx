import { Header } from "./components/Header";
import "./globals.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

function App() {
  return (
    <>
      <Header>Ignite Logo</Header>
      <div className={styles.wrapper}>
        <Sidebar />
        <Post />
      </div>
    </>
  );
}

export default App;
