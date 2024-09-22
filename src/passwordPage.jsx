function PasswordPage({update, updateLine}) {
    update([1,1]);
    updateLine([1]);

    return (
        <div className="pass-page">
            <h1>Create Password</h1>
            <form action="http://localhost:5173/profile">
                <label htmlFor="pass" class="form-label">Password: </label>
                <input type="password" name="pass" id="pass" class="form-control"/><br />
                <select class="form-select" aria-label="Default select example">
                    <option selected>Select a security question</option>
                    <option value="1">What is your pet's name?</option>
                    <option value="2">What is your favorite color?</option>
                </select>
                <label htmlFor="ans" class="form-label">Answer of security question: </label>
                <input type="text" name="ans" id="ans" class="form-control"/>
                <button type="submit">Go to next</button>
            </form>
            <form action="http://localhost:5173/">
                <button type="submit">Back</button>
            </form>
        </div>
    )
}

export default PasswordPage;