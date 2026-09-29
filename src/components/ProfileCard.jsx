import { useState } from "react";
import Post from "./Post";

function ProfileCard() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            author: "1",
            title: "Пост 1",
            text: "Текст 1"
        },
        {
            id: 2,
            author: "2",
            title: "Пост 2",
            text: "Текст 2"
        },
        {
            id: 3,
            author: "3",
            title: "Пост 3",
            text: "Текст 3"
        },
        {
            id: 4,
            author: "4",
            title: "Пост 4",
            text: "Текст 4"
        },
        {
            id: 5,
            author: "5",
            title: "Пост 5",
            text: "Текст 5"
        }

    ]);

    const [title, setTitle] = useState('');
    const [text, setText] = useState("");

    function addPost(e) {
        e.preventDefault();

        const newPost = {
            id: Date.now(),
            title: title,
            text: text,
            author: "Dima"
        }

        setPosts([...posts, newPost]);

        setTitle("");
        setText("");
    }

    function deletePost(id) {
        setPosts(
            posts.filter((post) => post.id !== id)
        );
    }

    return (
        <section className="profile-card">
            <div className="profile">
                <img src="src/assets/cat.jpg" alt="" className="avatar"></img>
                <div className="profile-info">
                    <h2>dimas7080</h2>
                    <p>@dimas7080</p>
                </div>
            </div>

            <form className="post-form" onSubmit={addPost}>
                <input type="text"
                    placeholder="Заголовок"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />

                <textarea placeholder="Текст поста"
                    value={text}
                    onChange={(e) => setText(e.target.value)} />

                <button type="submit">
                    Опубликовать
                </button>
            </form>

            {posts.length > 0 ? (posts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    author={post.author}
                    title={post.title}
                    text={post.text}
                    onDelete={deletePost} />
            ))
            ) : (
                <p className="empty-message">Опубликуйте первый пост</p>
            )}


            {/* <Post author="2" title="Пост 2" text="Текст 2"/>
            <Post author="3" title="Пост 3" text="Текст 3"/> */}
        </section>
    );
}
export default ProfileCard;