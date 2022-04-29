import moment from "moment"
import { useSelector } from "react-redux"
import '../Css/Expencelist.css'

export const ExpenceList = () => {
    const { newData } = useSelector(state => state)
    const time=moment().fromNow()
    return (
        <>
            <div style={{marginTop:'5%'}}>
                {
                    newData.map(({ icons, Title, Amount,color }) => {
                        return (
                            <>
                                <div className="card" style={{ borderRight: color }}>
                                    <div className="card-image-container">
                                    <i style={{ transform: 'scale(1.5)'}} class={icons}></i>
                                    </div>
                                    <div className="card-info">
                                        <label className="card-title">{Title}</label>
                                        <label className="card-time">{time}</label>
                                    </div>
                                    <div className="card-right">
                                        <div>
                                            <label className="card-amount">₹ {Amount}</label>
                                        </div>
                                        <div className="delete-icon">
                                            <i className="fi-rr-trash" />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}