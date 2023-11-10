import { useState } from 'react';
import './App.css';
import Card from './Card';
import PriceTag from './PriceTag';
function App() {
  const items = [
    {
      name: 'home apliance',
      price: 2999,
      offer: '45%',
      deleveriy: 'free delivery',
      stock:'in stock',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyOhm4JSblkCkgV0GmL-y8cE1-RvxRqVt2DA&usqp=CAU'
    },
    {
      name: 'mobiles',
      price: 22999,
      offer: '75%',
      deleveriy: 'free delivery',
      stock:'in stock',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyOhm4JSblkCkgV0GmL-y8cE1-RvxRqVt2DA&usqp=CAU'
    },
    {
      name: 'fashion',
      price: 999,
      offer: '45%',
      stock:'in stock',
      deleveriy: 'free delivery',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyOhm4JSblkCkgV0GmL-y8cE1-RvxRqVt2DA&usqp=CAU'
    },
    {
      name: 'beauty',
      price: 99,
      offer: '25%',
      deleveriy: 'free delivery',
      stock:'in stock',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyOhm4JSblkCkgV0GmL-y8cE1-RvxRqVt2DA&usqp=CAU'

    },
    {
      name: 'sports',
      price: 999,
      offer: '85%',
      deleveriy: 'free delivery',
      stock:'in stock',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyOhm4JSblkCkgV0GmL-y8cE1-RvxRqVt2DA&usqp=CAU'

    },
    {
      name: 'furniture',
      price: 5999,
      offer: '15%',
      deleveriy: 'free delivery',
      stock:'in stock',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyOhm4JSblkCkgV0GmL-y8cE1-RvxRqVt2DA&usqp=CAU'

    },
    {
      name: 'electronics',
      price: 999,
      offer: '45%',
      deleveriy: 'free delivery',
      stock:'in stock',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyOhm4JSblkCkgV0GmL-y8cE1-RvxRqVt2DA&usqp=CAU'

    },
    {
      name: 'books',
      price: 99,
      offer: '45%',
      deleveriy: 'free delivery',
      stock:'in stock',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyOhm4JSblkCkgV0GmL-y8cE1-RvxRqVt2DA&usqp=CAU'

    },
    {
      name: 'toys',
      price: 99,
      offer: '65%',
      deleveriy: 'free delivery',
      stock:'in stock',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyOhm4JSblkCkgV0GmL-y8cE1-RvxRqVt2DA&usqp=CAU'

    },
    {
      name: 'medicine',
      price: 99,
      offer: '75%',
      deleveriy: 'free delivery',
      stock:'in stock',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyOhm4JSblkCkgV0GmL-y8cE1-RvxRqVt2DA&usqp=CAU'

    },
    {
      name: 'baby products',
      price: 99,
      offer: '65%',
      deleveriy: 'free delivery',
      stock:'in stock',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyOhm4JSblkCkgV0GmL-y8cE1-RvxRqVt2DA&usqp=CAU'

    },
    {
      name: 'video games',
      price: 99,
      offer: '65%',
      deleveriy: 'free delivery',
      stock:'in stock',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyOhm4JSblkCkgV0GmL-y8cE1-RvxRqVt2DA&usqp=CAU'

    }


  ]
  const [add, setAdd] = useState([])
  const [total,setTotal]=useState(0)
  function addToCart(cartItems) {
    setAdd([...add,cartItems])
    setTotal(total+cartItems.price)
  }
  function removeCart(cartItems){
   let i=add.findIndex(element=>element.name==cartItems.name)
  add.splice(i,1)
   setAdd([...add])
   setTotal(total-cartItems.price) 
  }
  function ShowCartItems() {
    return (document.getElementById("popup").style.display = "block");
  }
  function Clear() {
    return (document.getElementById("popup").style.display = "none");
  }
  function Empty(){
    add.splice(0,add.length)
    setAdd([...add])
    setTotal(0) 
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">shopyy</a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
            <a className="nav-link" href="#">Features</a>
            <a className="nav-link" href="#">Pricing</a>
            <button type="button" className="card-button" onClick={ShowCartItems}><i class="fa-solid fa-cart-shopping"></i> Cart : {[add.length]}</button>
          </div>
        </div>
      </nav>
      <div id="popup">
        {
          add.length > 0 ? <ul className="list-group">
            {add.map((cartCount, index) => {
              return <PriceTag key={index} cartCount={cartCount}></PriceTag>

            })}
          </ul> : <h3>No items</h3>

        }
        {/* <button onClick={Empty}>Click to Empty</button> */}
        <h6 id="popupbutton">Total Price : {total}</h6>
        <h6 id="popupbutton">Total Items : {add.length}</h6>
        <button className="close btn" onClick={Clear}>Close</button>
      </div>
      <div className='container'>
        <div className='row'>
          {items.map((catagory, index) => {
            return <Card key={index} catagory={catagory} addToCart={addToCart}  removeCart={removeCart}></Card>

          })}
        </div>
      </div>
    </>
  );
}

export default App;
