import { ExpenceList } from '../Components/ExpenceList'
import { TopFold } from '../Components/TopFold'
import '../Css/Home.css'

export const Home = () => {
    return (
        <>
            <center>
                <div className='Home'>
                    <TopFold />
                    <ExpenceList/>
                </div>
            </center>
        </>
    )
}