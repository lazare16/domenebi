// Importing React hooks.
import React, { useContext, useEffect } from 'react';

// Importing the CartCountContext from CartCountProvider.
import { CartCountContext } from './CartCountProvider';

// Importing icons.
import Image from 'next/image';
import styles from '../styles/header.module.scss';
// import Logo from '../public/images/logo.svg';
import Bell from '../public/images/bell-icon.svg';
import ShoppingCart from '../public/images/shopping-cart-icon.svg';
import DropDown from './dropDown';
import User from '../public/images/user-icon.svg';
import GeorgianFlag from '../public/images/Georgian-flag.svg';


export default function Header() {
  // Using the useContext hook to get the current cart count from the CartCountContext context object.
  const { cartCount } = useContext(CartCountContext) || { cartCount: 0 };

  // Using the useEffect hook to update the document's documentElement style to set the --cart-count CSS variable to the current cart count.
  useEffect(() => {
    document.documentElement.style.setProperty('--cart-count', cartCount.toString());
  }, [cartCount]);

  return (
    <header className={styles.header}>
      <div className={styles.headerLeftSide}>
        <div className={styles.burgerMenu}></div>
        <div className={styles.logo}></div>
      </div>

      {/* nav section */}
      <nav className={styles.nav}>

        {/* notification button */}
        <div className={styles.button}>
          <Image src={Bell} alt="bell-icon" />
        </div>

        {/* shopping cart button */}
        <div className={`${styles.button} ${styles.ShoppingCartButton}`}>
          <Image src={ShoppingCart} alt="shopping-cart-icon" />
          {cartCount > 0 && (
            <div className={styles.cartBadge}>
              {cartCount}
            </div>
          )}
        </div>

        {/* account button */}
        <div className={styles.dropDownContainer}>
          <Image src={User} alt="user" className={styles.userIcon} />
          <div className={styles.dropDown}>
            <DropDown />
          </div>
        </div>


        {/* language button */}
        <div className={styles.button} style={{ padding: '13.39px 10.57px' }}>
          <Image src={GeorgianFlag} alt="Georgian-flag" />
        </div>
      </nav>

      {/* end of the nav section */}
    </header>
  );
}

