import { EditUserForm } from "@/components/Form/editUser";
import styles from "../components/Form/login-register/style.module.css"
import { EditAdressForm } from "@/components/Form/editAdress";


const TestePage = () => {
  
    return (
      <>
        <section className={styles.BackgroundOne}>
        <EditAdressForm/>
        {/* <EditUserForm/> */}
        </section>
      </>
    );
  };
  
  export default TestePage;
  