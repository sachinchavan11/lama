import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"
const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN </h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum expedita
        omnis odio, harum sapiente provident? Quae, repudiandae nostrum
        exercitationem quas nobis cupiditate dolor accusantium beatae, ratione
        molestiae nisi distinctio adipisci delectus id neque qui quibusdam nam
        placeat perferendis reiciendis aliquam doloribus itaque sint debitis
        error, vero dolorum mollitia. Aut, tempore quae? Magni, sapiente illo!
      </p>
      <div className={styles.wrapper}>
         <PizzaCard />
         <PizzaCard />
         <PizzaCard />       
         <PizzaCard />       
         <PizzaCard />       
         <PizzaCard />
         <PizzaCard />       
         <PizzaCard />       
         <PizzaCard />       
         <PizzaCard />       
        



      </div>
    </div>
  );
};
export default PizzaList;