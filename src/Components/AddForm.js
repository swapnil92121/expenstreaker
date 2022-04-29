import { useState } from "react"
import { CategoryDropdown } from "./CategoryDropdown"
import { AddData } from "../Redux/Reducer"
import { useDispatch } from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

export const AddForm = () => {
    const dispatch = useDispatch()


    const CategoryDropdownData = [
        {
            name: 'Education',
            icons: "fi fi-rr-graduation-cap",
            color: '5px solid rgb(169, 94, 194)'
        },
        {
            name: 'Health Care',
            icons: "fi fi-rr-doctor",
            color: '5px solid rgb(255, 118, 138)'
        },
        {
            name: 'Shopping',
            icons: "fi fi-rr-shopping-cart",
            color: '5px solid rgb(236, 96, 171)'
        },
        {
            name: 'Food',
            icons: "fi fi-rr-restaurant",
            color: '5px solid rgb(255, 158, 109)'
        },
        {
            name: 'Other',
            icons: "fi fi-rr-settings",
            color: '5px solid rgb(255, 203, 94)'
        }
    ]

    const [toggal, setToggal] = useState(false)
    const [FormData, setFormData] = useState({ Title: null, Amount: null, Category: null, icons: null, color: null })

    const notify = (val) => toast(val);




    return (
        <>
            <div className="add-form">
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                />
                <div className="Toastify" />
                <div className="form-item">
                    <label>Title</label>
                    <input value={FormData.Title} onChange={(e) => {
                        setFormData({ ...FormData, Title: e.target.value })
                    }} placeholder="Give a name to your expenditure" />
                </div>
                <div className="form-item">
                    <label>Amount ₹</label>
                    <input type='number' value={FormData.Amount} onChange={(e) => {
                        setFormData({ ...FormData, Amount: e.target.value })
                    }} placeholder="Enter Amount" className="amount-input" />
                </div>
                <div className="category-container-parent">
                    <div className="category">
                        <div className="category-dropdown" onClick={() => {
                            setToggal(!toggal)
                        }}>
                            <label>{FormData.Category != null ? FormData.Category : 'Category'}</label>
                            <i className="fi-rr-angle-down" />
                        </div>
                        {toggal &&
                            <>
                                <div onClick={() => {
                                    setToggal(false)
                                }} className="category-container">
                                    {
                                        CategoryDropdownData.map((val) => {
                                            return (
                                                <>
                                                    <CategoryDropdown FormData={FormData} setFormData={setFormData} data={val} />
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </>
                        }
                    </div>
                </div>
                <div className="form-add-button">
                    <Link to={'/'} style={{ textDecoration: 'none', color: '#001f3f' }}>
                        <div onClick={() => {
                            if (FormData.Amount && FormData.Category && FormData.Title) {
                                dispatch(AddData(FormData))
                            } else {
                                notify("Please Fill All Data!")
                            }
                        }}>
                            <label>Add</label>
                            <i className="fi-rr-paper-plane" />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}