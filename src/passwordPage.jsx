function PasswordPage({update, updateLine}) {
    function updating() {
        update([1,1,1]);
        updateLine([1,1]);
    }

    function updatingBack() {
        update([1]);
        updateLine([]);
    }

    return (
        <div className="pass-page">
            <h1>Create Password</h1>
            <form action="" onSubmit={updating}>
                <label htmlFor="pass" className="form-label">Password: </label>
                <input type="password" name="pass" id="pass" className="form-control"/><br />
                <select className="form-select" aria-label="Default select example">
                    <option selected>Select a security question</option>
                    <option value="1">What is your pet's name?</option>
                    <option value="2">What is your favorite color?</option>
                </select>
                <label htmlFor="ans" className="form-label">Answer of security question: </label>
                <input type="text" name="ans" id="ans" className="form-control"/><br /><br />
                <button className="btn btn-success" type="submit">Go to next</button>
            </form><br />
            <form action="" onSubmit={updatingBack}>
                <button className="btn btn-outline-dark" type="submit">Back</button>
            </form>
        </div>
    )
}

export default PasswordPage;