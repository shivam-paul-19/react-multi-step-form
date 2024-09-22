function FinalPage({update, updateLine}) {
    update([1,1,1,1]);
    updateLine([1,1,1]);

    return(
        <div className="final">
            <h2>You're all set</h2>
            <i class="fa-solid fa-circle-check" style={{color: "#008059"}}></i>
        </div>
    )
}

export default FinalPage;