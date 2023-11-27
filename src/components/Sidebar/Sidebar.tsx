import { PencilLine } from "@phosphor-icons/react";
import styles from "./Sidebar.module.css";
import { Avatar } from "../Avatar";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1613318286980-4b3dd8475772?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styles.profile}>
        <Avatar
          hasBorder
          src="https://avatars.githubusercontent.com/u/39991049?v=4"
          alt="User profile pic"
        />
        <strong>Francisko de Moraes Rezende</strong>
        <span>Front-end Developer</span>
      </div>

      <footer className={styles.footer}>
        <a href="#">
          <PencilLine size={20} /> Edit your profile
        </a>
      </footer>
    </aside>
  );
};
