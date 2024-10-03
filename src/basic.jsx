function BasicInfo({update, updateLine}) {
    function updating() {
        update([1,1]);
        updateLine([1]);
    }

    return (
        <div className="basic-info-form col-12">
            <h1>Enter basic information</h1>
            <form action="" onSubmit={updating}>
                <label htmlFor="name" className="form-label">Name: </label>
                <input type="text" name="name" id="name" className="form-control"/>
                <label htmlFor="mail" className="form-label">E-mail</label>
                <input type="text" name="mail" id="mail" className="form-control" />
                <label htmlFor="dob">Date of birth: </label>&nbsp;&nbsp;
                <input type="date" name="dob" id="dob" /><br /><br />
                <button className="btn btn-success" type="submit">Go to next</button>
            </form>
        </div>
    )
}

export default BasicInfo;