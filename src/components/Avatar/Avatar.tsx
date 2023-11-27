import styles from "./Avatar.module.css";

type Avatar = React.ComponentProps<"img"> & {
  hasBorder: boolean;
};

export const Avatar = ({ hasBorder = true, ...props }: Avatar) => {
  const className = hasBorder ? styles.avatarWithBorder : styles.avatar;

  return <img className={className} {...props} />;
};
