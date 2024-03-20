import Products from "./Products"
import TopN from "./TopN"
import Header from './components/Header'

const Home =() =>{
    const topproduct=[{
        name:"Laptop 1",
        price: 22336,
        rating: 4.7,
        discount: 63,
        avai: "yes"
      },
      {
        name:"Laptop 13",
        price: 1244,
        rating: 4.5,
        discount: 45,
        avai:"out-of-stock"
      },
      {
        name:"Laptop 3",
        price: 9102,
        rating: 4.44,
        discount: 98,
        avai:"out-of-stock"
      },{
        name:"Laptop 11",
        price: 2652,
        rating: 4.12,
        discount: 70,
        avai: "yes"
      },{
        name:"Laptop 4",
        price: 1258,
        rating: 3.8,
        discount: 78,
        avai: "yes"
    
      },{
        name:"Laptop 13",
        price: 9254,
        rating: 3.22,
        discount: 24,
        avai: "yes"
    
      },{
        name:"Laptop 14",
        price: 9254,
        rating: 3,
        discount: 56,
        avai: "yes"
    
      },{
        name:"Laptop 1",
        price: 1059,
        rating: 2.77,
        discount: 21,
        avai: "yes"
    
      },{
        name:"Laptop 10",
        price: 7145,
        rating: 2.74,
        discount: 21,
        avai: "yes"
    
      }
    ]
    const products=[
        {
            name:"Laptop 11",
            price: 2652,
            rating: 4.12,
            discount: 70,
            avai: "yes"
          },{
            name:"Laptop 4",
            price: 1258,
            rating: 3.8,
            discount: 78,
            avai: "yes"
        
          }
        ]
    
    return(
        <>
        <Header />
        <div className="top-products">
        <TopN {...topproduct[0]}/>
        <TopN {...topproduct[1]}/>
        <TopN {...topproduct[2]}/>
        <TopN {...topproduct[3]}/>
        </div>

        <Products {...products[0]}/>
        <Products {...products[1]}/>

        
        
        </>
    )
}
export default Home;