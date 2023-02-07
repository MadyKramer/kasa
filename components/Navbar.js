import styles from "./../styles/Banner.module.scss";
import Image from "next/image";
import logo from "../images/logo.png";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState("accueil");

  const handleClick = (e, link) => {
    setIsActive(link);
    console.log(link);
  };
  return (
    <header>
      <div className={styles.baneer}>
        <Image
          src={logo}
          alt="logo"
          className={styles.banneer__logo}
          height={70}
          width={210}
        />
        <nav className={styles.baneer__nav}>
          <ul className={styles.baneer__nav__list}>
            <Link href="#" className={styles.navLink}>
              <li className={styles.baneer__nav__list__elt}>Accueil</li>
            </Link>
            <Link href="#" className={styles.navLink}>
              <li className={styles.baneer__nav__list__elt}>A propos</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
