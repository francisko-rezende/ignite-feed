import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <img
        src="https://github.com/francisko-rezende.png"
        alt="comment author avatar"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="May 11, 08:13AM" dateTime="2022-05-11 08:13:30">
                Around 1 hour ago
              </time>
            </div>

            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </header>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            iure iste sint, amet, illo dolorum explicabo molestiae fugiat
            dolorem, necessitatibus enim adipisci. Temporibus, corrupti dolorem?
            Rerum enim minima hic voluptatem?
          </p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} /> Clap <span>03</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
