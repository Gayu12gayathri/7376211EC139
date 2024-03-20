import { NavLink } from "react-router-dom";

const Products =(props)=>{
    return(
        <>
        <div className="products">
            
            <div className='product-name'>{props.name}</div>
            <div className='product-price'>{props.price}</div>
            <div className='rating'>{props.rating}</div>
            <div className='product-discount'>{props.discount}</div>
            <div className='availability'>{props.avai}</div>
            <button>See top products
            </button>
        </div>
        <div>
                <NavLink to="/top">
                    <button className="btn">See top products</button>
                </NavLink>
        </div>
        </>
    )
}

export default Products;
