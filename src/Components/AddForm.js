export const AddForm = () => {
    return (
        <>
            <div className="add-form">
                <div className="Toastify" />
                <div className="form-item">
                    <label>Title</label>
                    <input placeholder="Give a name to your expenditure" />
                </div>
                <div className="form-item">
                    <label>Amount ₹</label>
                    <input placeholder="Enter Amount" className="amount-input"/>
                </div>
                <div className="category-container-parent">
                    <div className="category">
                        <div className="category-dropdown">
                            <label>Category</label>
                            <i className="fi-rr-angle-down" />
                        </div>
                    </div>
                </div>
                <div className="form-add-button">
                    <div>
                        <label>Add</label>
                        <i className="fi-rr-paper-plane" />
                    </div>
                </div>
            </div>
        </>
    )
}