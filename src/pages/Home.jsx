import Post from "../components/Post";

function Home() {
    const posts = [
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

    ];

    return (
        <section>
            <h1>Главная страница</h1>
            <div className="feed">
                <h2>Лента</h2>
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        id={post.id}
                        author={post.author}
                        title={post.title}
                        text={post.text} />
                ))}
            </div>
        </section>
    );
}

export default Home;