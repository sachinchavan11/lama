import styles from "../../styles/Order.module.css";
import Image from "next/image";
const Order = () => {
    const statusClass =(index)=>
    {
        const status=0;
        if(index-status<1) return styles.done;
        if(index-status===1) return styles.inProgess;
        if(index-status>1) return styles.undone;

    }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tbody>
            <tr className={styles.trTitle}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>8639820425</span>
              </td>
              <td>
                <span className={styles.name}>Sachin</span>
              </td>
              <td>
                <span className={styles.address}>Budwel new green</span>
              </td>
              <td>
                <span className={styles.total}>$79.80</span>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image alt="" src="/img/paid.png" height={50} width={50} />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image  className={styles.checkedIcon}src="/img/checked.png" height={20} width={20} alt="" />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image alt="" src="/img/bake.png" height={50} width={50} />
            <span>Preparing Pizza</span>
            <div className={styles.checkedIcon}>
              <Image className={styles.checkedIcon}  src="/img/checked.png" height={20} width={20} alt="" />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image alt="" src="/img/bike.png" height={50} width={50} />
            <span>On the Way</span>
            <div className={styles.checkedIcon}>
              <Image className={styles.checkedIcon} src="/img/checked.png" height={20} width={20} alt="" />
            </div>
            </div>
            <div className={statusClass(3)}>
              <Image alt="" src="/img/delivered.png" height={50} width={50} />
              <span>Order delivered</span>
              <div className={styles.checkedIcon}>
                <Image className={styles.checkedIcon} src="/img/checked.png" height={20} width={20} alt="" />
              </div>
            </div>
          
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};
export default Order;
