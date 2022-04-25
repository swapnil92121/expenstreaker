import { Link } from 'react-router-dom'
import { AddForm } from '../Components/AddForm'
import '../Css/AddExpense.css'


export const AddExpense = () => {
    return (
        <>
            <center>
                <div style={{ width: '50%', marginTop: '2%' }}>
                    <div class="add-topfold">
                        <Link to={'/'} style={{ textDecoration: 'none', color: '#001f3f' }}>
                            <div class="add-topfold-button">
                                <i class="fi-rr-angle-left"></i>
                                <label>Back</label>
                            </div>
                        </Link>
                        <Link to={'/'} style={{ textDecoration: 'none', color: '#001f3f' }}>
                            <div class="add-topfold-button">
                                <i class="fi-rr-cross-circle"></i>
                                <label>Cancel</label>
                            </div>
                        </Link>
                    </div>
                    <AddForm/>
                </div>
            </center>
        </>
    )
}