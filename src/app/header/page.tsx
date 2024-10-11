import Link from "next/link"

export default function Header(){
    return(
        <div className="header">
            <div className="header-button">
                <ul>
                    <Link href="/"><li>Home</li></Link>
                    <Link href={"/menu"}><li>Menu</li></Link>
                    <Link href={"/deal"}><li>Deals</li></Link>
                    <Link href={"/order"}><li>Order</li></Link>

                </ul>
            </div>
        </div>
    )
}