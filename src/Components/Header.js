import '../Css/Header.css'


export const Header = () => {
    return (
        <>
            <center>
                <div className="Home_header">
                    <div className='Home_header_logo'>
                        <h3>Xpensr</h3>
                        <i className="fi fi-rr-credit-card"></i>
                    </div>
                    <a href='https://github.com/' target="_blank" className='Home_header_button'>
                        <i className="fi fi-brands-github"></i>
                        <h3> Star</h3>
                    </a>
                </div>
            </center>
        </>
    )
}