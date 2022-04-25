import { Link } from 'react-router-dom'
import '../Css/TopFold.css'


export const TopFold = () => {
    return (
        <>
            <div className='TopFold'>
                <div className='TopFold_input'>
                    <i className="fi fi-br-search"></i>
                    <input placeholder="Search for expenses" value="" />
                </div>
                <div className='TopFold_add_button'>
                    <Link to={'add-expense'} style={{textDecoration: 'none',color: '#001f3f'}}>
                        <div className="add-button">
                            <i className="fi-rr-add"></i>
                            <label>Add</label>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}