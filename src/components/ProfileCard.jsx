import Post from "./Post";
function ProfileCard() {
    return (
        <section className="profile-card">
            <div className="profile">
                <div className="avatar">avatar</div>
                <div className="profile-info">
                    <h2>muiyune</h2>
                    <p>@Lunexia</p>
                </div>
            </div>
            {/* <Post author: "Ilya", title="Something new",/> */}
            <Post />
        </section>
    );
}
export default ProfileCard;