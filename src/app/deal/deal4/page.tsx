import styles from "../page.module.css";
import Link from "next/link";
export default function Deal4() {
    return (
        <div className={styles.parent}>
            <div className={styles.imageContainer}><img src="/deal4.webp" alt="pizza deal 4" className={styles.pic} /></div>
            <div className={styles.content}>
                <h1>Deal 04</h1>
                <h1>Rs.1900</h1>
                <h2>One Jumbo Pizza(17 inches) & 1 Ltr drink</h2>
                <div className={styles.flavour}>
                    <h1>Select your pizza flavour</h1>
                    <label><input type="radio" name="flavours" value="f1"/>Chicken Supreme</label><br/>
                    <label><input type="radio" name="flavours" value="f2"/>Chicken Tikka</label><br/>
                    <label><input type="radio" name="flavours" value="f3"/>Chicken Fajita</label><br/>
                    <label><input type="radio" name="flavours" value="f4"/>Malai Boti</label><br/>
                    <label><input type="radio" name="flavours" value="f5"/>Tandoori Chicken</label><br/>
                    <label><input type="radio" name="flavours" value="f6"/>Hot & Spicy</label><br/>
                    <label><input type="radio" name="flavours" value="f7"/>Cheese Lovers</label><br/>
                </div>
                <Link href={"/order"}><button className={styles.order}>Confirm Order</button></Link>
                <Link href={"/deal"}><button className={styles.order}>Back to Deals</button></Link>
            </div>
        </div>

    )
}