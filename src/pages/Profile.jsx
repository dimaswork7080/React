import { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import Post from "../components/Post";

function Profile() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            author: "1",
            title: "Пост 1",
            text: "Текст 1"
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
        <section>
            <h1>Мой профиль</h1>
            <ProfileCard />
            <div className="feed">
                <h2>Мои публикации</h2>
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
            </div>
        </section>
    );
}

export default Profile;