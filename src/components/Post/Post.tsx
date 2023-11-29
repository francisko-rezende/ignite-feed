import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import { format, formatDistanceToNow, formatISO } from "date-fns";
import styles from "./Post.module.css";

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
