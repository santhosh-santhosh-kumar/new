function PriceTag(props){
    console.log(props.send.section)
    return(
        <>
         <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src={props.send.img} alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">{props.send.section}</h5>
                                    <div>Rs.{props.send.price} <span>{props.send.orginalPrice}</span></div>
                                    
                                    <div>{props.send.offer}</div>
                                    <div>{props.send.delivery}</div>
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
 </>
    );
}
export default PriceTag