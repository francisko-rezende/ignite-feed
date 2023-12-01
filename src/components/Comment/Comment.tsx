import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { Avatar } from "../Avatar";

type Comment = {
  content: string;
  deleteComment: () => void;
};

export const Comment = ({ content, deleteComment }: Comment) => {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/francisko-rezende.png"
        alt="comment author avatar"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Francisko de Moraes Rezende</strong>
              <time title="May 11, 08:13AM" dateTime="2022-05-11 08:13:30">
                Around 1 hour ago
              </time>
            </div>

            <button title={`Delete comment ${content}`} onClick={deleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
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
