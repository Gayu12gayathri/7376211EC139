import{ useState } from 'react-router-dom'

const TopN =(props) =>{
    const[name,setName]=useState('')
    const[price,setPrice]=useState()
    const[rating,setRate]=useState()
    const[discount,setdis]=useState()
    const[avai,setAvai]=useState()

    return(
    <>
    <div>
        {/* <Products /> */}
        <div className='product-name'>{props.name}</div>
            <div className='product-price'>{props.price}</div>
            <div className='rating'>{props.rating}</div>
            <div className='product-discount'>{props.discount}</div>
            <div className='availability'>({props.avai}?"yes":"out-of-stock")</div>

    </div>
    </>
    )
}
export default TopN;
