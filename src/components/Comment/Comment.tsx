import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { Avatar } from "../Avatar";
import { useState } from "react";

type Comment = {
  content: string;
  deleteComment: () => void;
};

export const Comment = ({ content, deleteComment }: Comment) => {
  const [likeCount, setLikeCount] = useState(0);

  function handleClapComment() {
    setLikeCount((likeCount) => ++likeCount);
  }

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
          <button onClick={handleClapComment}>
            <ThumbsUp size={20} /> Clap <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
