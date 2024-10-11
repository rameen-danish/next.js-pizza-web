import styles from "./page.module.css"
export default function Menu(){
    return(
      <div>
        <h1 className="blog-heading">Menu List</h1>
        <section className={styles.blogContainer} >
    <div className={styles.childContainer}>
      <h1 className={styles.blogTitle}>Flavours</h1>
      <div className={styles.headings}>
      <h2 >Chicken Supreme</h2>
      <h2>Chicken Tikka</h2>
      <h2>Chicken Fajita</h2>
      <h2>Malai Boti</h2>
      <h2>Tandoori Chicken</h2>
      <h2>Hot & Spicy</h2>
      <h2>Cheese Lovers</h2>
      </div>
      <h1 className={styles.blogTitle}>Price</h1>
      <div className={styles.headings}>
      <h2>Small</h2>
      <h2>Medium</h2>
      <h2>Large</h2>
      <h2>Jumbo</h2>
      </div>
    </div>
    </section>
    </div>
    )
}