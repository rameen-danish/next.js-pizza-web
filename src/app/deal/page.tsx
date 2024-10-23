import Link from "next/link"
export default function Deal(){
    return(
        <div>
   <h1 className="blog-heading">Exclusive Deals</h1>
   <section className="blog-container" >
   <Link href={"/deal/deal1"}> 
    <div className="child-container  scale-up-center">
      <div className="image-container"><img src="deal1.webp" alt="pizza deal 1" className="picture" /></div>
      <h1 className="blog-title">Deal 01</h1>
      <p className="description">One Large pizza  <br/>  <br/></p>
      <Link href={"/order"}><button className="order">Order Now</button></Link>
    </div>
    </Link>
    <Link href={"/deal/deal2"}>
    <div className="child-container  scale-up-center">
      <div className="image-container"><img src="deal2.webp" alt="pizza deal 2" className="picture" /></div>
      <h1 className="blog-title">Deal 02</h1>
      <p className="description">Two Large pizza <br/> 1 liter Drink <br/> </p>
      <Link href={"/order"}><button className="order">Order Now</button></Link>
    </div>
    </Link>
    <Link href={"/deal/deal3"}>
    <div className="child-container scale-up-center">
      <div className="image-container"><img src="deal3.webp" alt="pizza deal 3" className="picture" /></div>
      <h1 className="blog-title">Deal 03</h1>
      <p className="description">Three Large pizza <br/> 1 liter Drink  <br/></p>
      <Link href={"/order"}><button className="order">Order Now</button></Link>
    </div>
    </Link>
    <Link href={"/deal/deal4"}>
    <div className="child-container  scale-up-center">
      <div className="image-container"><img src="deal4.webp" alt="pizza deal 4" className="picture" /></div>
      <h1 className="blog-title">Deal 04</h1>
      <p className="description">One Jumbo pizza <br/> 1 liter Drink  <br/></p>
      <Link href={"/order"}><button className="order">Order Now</button></Link>
    </div>
    </Link>
    <Link href={"/deal/deal5"}>
    <div className="child-container  scale-up-center">
      <div className="image-container"><img src="deal5.webp" alt="pizza deal 5" className="picture" /></div>
      <h1 className="blog-title">Deal 05</h1>
      <p className="description">Two Regular pizza  <br/>   <br/></p>
      <Link href={"/order"}><button className="order">Order Now</button></Link>
    </div>
    </Link>
    <Link href={"/deal/deal6"}>
    <div className="child-container  scale-up-center">
      <div className="image-container"><img src="deal6.webp" alt="pizza deal 6" className="picture" /></div>
      <h1 className="blog-title">Deal 06</h1>
      <p className="description">One Large pizza, One Regular pizza <br/> 1 liter Drink</p>
      <Link href={"/order"}><button className="order">Order Now</button></Link>
    </div>
    </Link>
   </section>
   </div>
    )
}