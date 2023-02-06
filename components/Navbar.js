import styles from './../styles/Banner.module.scss';
import Image from "next/image";
import logo from "../images/logo.png"


const Navbar = () => {
  return (
   
    <div className={styles.baneer}>
      <Image src={logo} alt="logo" className={styles.banneer__logo} height={70} width={210}/>
      <div className={styles.baneer__nav}>
        <ul className={styles.baneer__nav__list}>
          <li className={styles.baneer__nav__list__element}>Accueil</li>
          <li className={styles.baneer__nav__list__element}>A propos</li>
        </ul>
      </div>
    </div>

  );
};

export default Navbar;
