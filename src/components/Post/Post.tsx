import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./Post.module.css";

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            hasBorder
            src="https://github.com/francisko-rezende.png"
            alt="user avatar"
          />
          <div className={styles.authorInfo}>
            <strong>Francisko de Moraes Rezende</strong>
            <span>Front-end Developer</span>
          </div>
        </div>
        <time title="May 11, 8:13" dateTime="2022-05-11 08:13:30">
          Published one hour ago
        </time>
      </header>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ab
          nobis non tempora qui sit repudiandae. Repudiandae, libero? Inventore
          sunt voluptatibus reiciendis maxime consectetur quos harum doloremque
          officia soluta ad.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas unde
          facere omnis esse cupiditate doloribus porro ab. Ab sint omnis,
          consequuntur architecto praesentium sapiente, maxime nemo quas sit
          iure sunt.
        </p>
        <p>
          <a href="#">#newproject</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Give some feedback:</strong>
        <textarea placeholder="Leave a comment" />
        <footer>
          <button type="submit">Submit</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
};
