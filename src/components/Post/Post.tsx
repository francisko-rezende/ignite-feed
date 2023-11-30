import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import { format, formatDistanceToNow, formatISO } from "date-fns";
import styles from "./Post.module.css";
import { FormEvent, useState } from "react";

type Author = {
  avatarUrl: string;
  name: string;
  role: string;
};

type Content = {
  type: string;
  content: string;
};

type Post = {
  author: Author;
  content: Content[];
  publishedAt: Date;
};

export const Post = ({ author, content, publishedAt }: Post) => {
  const formattedDate = format(publishedAt, "LLLL dd 'at' HH:mm'h'");
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  });
  const isoDate = formatISO(publishedAt);

  const [newCommentText, setNewCommentText] = useState("");
  const [comments, setComments] = useState(["Top"]);

  function handleCreateNewComment(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setComments((comments) => [...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(e.target.value);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} alt="user avatar" />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={formattedDate} dateTime={isoDate}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content
          .filter(({ type }) => type === "paragraph")
          .map(({ content }, index) => (
            <p key={index}>{content}</p>
          ))}
        <p>
          {content
            .filter(({ type }) => type === "hashtag")
            .map(({ content }, index) => (
              <a href="#" key={index}>
                {content}
              </a>
            ))}
        </p>
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <label htmlFor="comment">
          <strong>Give some feedback:</strong>
        </label>
        <textarea
          onChange={handleNewCommentChange}
          id="comment"
          value={newCommentText}
          placeholder="Leave a comment"
        />
        <footer>
          <button type="submit">Submit</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment content={comment} key={comment} />
        ))}
      </div>
    </article>
  );
};
