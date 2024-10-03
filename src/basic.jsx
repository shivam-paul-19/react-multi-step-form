function BasicInfo({update, updateLine}) {
    update([1]);
    updateLine([0]);

    return (
        <div className="basic-info-form col-12">
            <h1>Enter basic information</h1>
            <form action="http://localhost:5173/password">
                <label htmlFor="name" class="form-label">Name: </label>
                <input type="text" name="name" id="name" class="form-control"/>
                <label htmlFor="mail" class="form-label">E-mail</label>
                <input type="text" name="mail" id="mail" class="form-control" />
                <label htmlFor="dob">Date of birth: </label>&nbsp;&nbsp;
                <input type="date" name="dob" id="dob" /><br /><br />
                <button className="btn btn-success" type="submit">Go to next</button>
            </form>
        </div>
    )
}

export default BasicInfo;