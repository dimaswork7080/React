import Actions from "./Actions";

function Post({ author, title, text, onDelete, id }) {
    return (
        <div>
            <article className="post">
                <div className="te">
                    <h2>{title}</h2>
                    <button className="delete-button" onClick={() => onDelete(id)}>
                        X
                    </button>
                </div>
                <p className="post-text">{text}</p>
                <p className="post-author">Author: {author}</p>
                <Actions />
            </article>

        </div>
    );
}

export default Post;