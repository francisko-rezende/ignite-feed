import styles from "./Header.module.css";
import igniteLogo from "../../assets/ignite-logo.svg";

type Header = React.ComponentProps<"header">;

export const Header = (props: Header) => {
  return (
    <header className={styles.header} {...props}>
      <img src={igniteLogo} alt="Logotipo do Ignite" /> {props.children}
    </header>
  );
};
