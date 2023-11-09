//import logo from './logo.svg';
import './App.css';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import PriceTag from './PriceTag';
function App() {
  const details=[
    {
      img:'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      section:'mobile',
      price:10000,
      orginalPrice:12000,
      delivery:'free delevery',
      offer:'95% off'
    },
    {
      img:'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      section:'dress',
      price:999,
      orginalPrice:1200,
      delivery:'free delevery',
      offer:'87% off'
    }
  ]
  return (
    <>
     <Card></Card>
     <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {details.map((element)=>{
                  console.log(element)
                  return  <PriceTag send={element}></PriceTag>
                })}
                </div>
            </div>
      </section>           
    </>
  );
}

export default App;
