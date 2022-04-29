export const CategoryDropdown = ({ data,setFormData,FormData }) => {
    const { name, icons,color } = data
    return (
        <>
            <div style={{borderRight:color}} onClick={()=>{
                setFormData({...FormData,Category:name,icons,color})
            }} className="category-item">
                <label style={{cursor: 'pointer'}}>{name}</label>
                <i style={{ transform: 'scale(1.5)', marginRight: '2%' }} class={icons}></i>
            </div>
        </>
    )
}