function PriceTag({cartCount}) {
  return (
    <>
           <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>{cartCount.name} <br></br>Rs.{cartCount.price}</span><span id="buynow">buy now</span>
           </li>
    </>
  )
}
export default PriceTag

