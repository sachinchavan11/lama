import styles from "../styles/Footer.module.css"
import Image from "next/image";
const Footer=()=>
{
    return(
        <div className={styles.container}>
            <div className={styles.item}>
              <Image src="/img/bg.png" layout="fill" alt="" />
            </div> 
            <div  className={styles.item}>
              <div className={styles.card}>
                <h2 className={styles.motto}>
                  OH! YES ,WE DID THE HYD PIZZA , WELL MADE TASTY.
                </h2>
              </div>
              <div className={styles.card}>
                 <h1 className={styles.title}>
                  FIND YOUR RESTAURENTS
                 </h1>
                 <p className={styles.text}>
                  street no:5 ,Jawahar Nagar ,
                  <br /> Hyderabad ,500030
                  <br />7671050410
                 </p>
                 <p className={styles.text}>
                  street no:5 ,Pragathi Nagar ,
                  <br /> Hyderabad ,500031
                  <br />7671050410
                 </p>
                 <p className={styles.text}>
                  street no:5 ,Shanti Nagar ,
                  <br /> Hyderabad ,500031
                  <br />7671050410
                 </p>

              </div>
              <div className={styles.card}>
                <h1 className={styles.title}>WORKING HOURS</h1>
                <p className={styles.text}>
                  MONDAY TO FRIDAY
                  <br/> 9AM -9PM
                </p>
              </div>
            </div>
        </div>
    )
}
export default Footer