import { Link } from 'react-router-dom'
const Header=()=>{
    return(
    <>
        <Link to ="/products">Products</Link>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>

          
          </>   
    
    )
}
export default Header;