import Actions from "./Actions";

function Post({ Author, title, text }) {
    return (
        <div>
            <article className="post">
                <h2>9class</h2>
                <p className="post-text">Текст 1</p>
                <p className="post-author">Author: 1</p>
                <Actions />
            </article>
            <article className="post">
                <h2>Ziwen</h2>
                <p className="post-text">Текст 2</p>
                <p className="post-author">Author: 2</p>
                <Actions />
            </article>
            <article className="post">
                <h2>Jeqi</h2>
                <p className="post-text">Текст 3</p>
                <p className="post-author">Author: 3</p>
                <Actions />
            </article>
        </div>
    );
}

export default Post;