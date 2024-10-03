function ProfilePage({update, updateLine}) {
    update([1,1,1]);
    updateLine([1,1]);

    return (
        <div className="profie">
            <h1>Set Profile details</h1>
            <form action="http://localhost:5173/final">
                <label htmlFor="username" class="form-label">Username: </label>
                <input type="text" name="username" class="form-control"/>
                <label htmlFor="bio" className="form-label">Bio: </label><br />
                <textarea name="bio" id="bio" class="form-control"></textarea><br /><br />
                <button className="btn btn-success" type="submit">Go to next</button>
            </form><br />
            <form action="http://localhost:5173/password">
                <button className="btn btn-outline-dark" type="submit">Back</button>
            </form>
        </div>
    )
}

export default ProfilePage;