import { Header } from "./components/Header";
import "./globals.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/francisko-rezende.png",
        name: "Francisko de Moraes Rezende",
        role: "Front-end developer",
      },
      content: [
        {
          type: "paragraph",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ab nobis non tempora qui sit repudiandae. Repudiandae, libero? Inventore sunt voluptatibus reiciendis maxime consectetur quos harum doloremque officia soluta ad.",
        },
        {
          type: "paragraph",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ab nobis non tempora qui sit repudiandae. Repudiandae, libero? Inventore sunt voluptatibus reiciendis maxime consectetur quos harum doloremque officia soluta ad.",
        },
        { type: "hashtag", content: "#newproject" },
      ],
      publishedAt: new Date("2022-05-03 20:00"),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/francisko-rezende.png",
        name: "Pedro Duarte",
        role: "Front-end developer",
      },
      content: [
        {
          type: "paragraph",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ab nobis non tempora qui sit repudiandae. Repudiandae, libero? Inventore sunt voluptatibus reiciendis maxime consectetur quos harum doloremque officia soluta ad.",
        },
        {
          type: "paragraph",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ab nobis non tempora qui sit repudiandae. Repudiandae, libero? Inventore sunt voluptatibus reiciendis maxime consectetur quos harum doloremque officia soluta ad.",
        },
        { type: "hashtag", content: "#newproject" },
      ],
      publishedAt: new Date("2022-05-10 20:00"),
    },
  ];

  return (
    <>
      <Header>Ignite Logo</Header>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </main>
        {/* <Post /> */}
      </div>
    </>
  );
}

export default App;
