import { Link } from 'react-router-dom'
import { Search } from '../Redux/Reducer'
import '../Css/TopFold.css'
import { useDispatch } from 'react-redux'


export const TopFold = () => {
    const dispatch=useDispatch()
    return (
        <>
            <div className='TopFold'>
                <div className='TopFold_input'>
                    <i className="fi fi-br-search"></i>
                    <input onChange={(e)=>{
                        dispatch(Search(e.target.value))
                    }} placeholder="Search for expenses"  />
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