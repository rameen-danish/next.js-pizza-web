import Image from "next/image";
import Deal from "./deal/page";
export default function Home() {
  return (
    <div>
   <div className="image-wrapper">
    <Image src={"/pizza.jpg"} alt={"pizza"} width={1400} height={200} className="image"/>
   <div className="image-text">
    <h1 className="focus-in-expand-fwd">Rameen Pizza House</h1>
    <h1 className="focus-in-expand" >Welcome to Our Pizza world!</h1></div>
   </div>
   <Deal/>
   </div>
  );
}
