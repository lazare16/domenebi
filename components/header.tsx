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
import Cancle from '../public/images/cancle.svg';

interface HeaderProps {
  burgerMenuPressed: boolean;
  setBurgerMenuPressed: (value: boolean) => void;
}


export default function Header({ burgerMenuPressed, setBurgerMenuPressed }: HeaderProps) {
  // Using the useContext hook to get the current cart count from the CartCountContext context object.
  const { cartCount } = useContext(CartCountContext) || { cartCount: 0 };

  // Using the useEffect hook to update the document's documentElement style to set the --cart-count CSS variable to the current cart count.
  useEffect(() => {
    document.documentElement.style.setProperty('--cart-count', cartCount.toString());
  }, [cartCount]);

  const burgerMenuClicked = () => {
    setBurgerMenuPressed(true);
  }

  const cancelClicked = () => {
    setBurgerMenuPressed(false);
  }

  return (
    <header className={styles.header} style={burgerMenuPressed ? {justifyContent: 'space-between', paddingRight: '20px', boxShadow: '0px 2px 5px #0000000F'} : {}}>
      <div className={styles.headerLeftSide}>
        <div className={styles.burgerMenu} onClick={burgerMenuClicked} style={burgerMenuPressed ? {display: 'none'} : {}}></div>
        <div className={styles.logo} style={burgerMenuPressed ? { visibility: 'hidden' } : { visibility: 'visible' }}></div>
        <div className={styles.filterHeader} style={burgerMenuPressed ? {display: 'block', color: '#696974'} : {}}><h3>ფილტრი</h3></div>
      </div>

      {/* nav section */}
      <nav className={styles.nav}>

        {/* notification button */}
        <div className={styles.button} style={burgerMenuPressed ? {display: 'none'} : {}}>
          <Image src={Bell} alt="bell-icon" />
        </div>

        {/* shopping cart button */}
        <div className={`${styles.button} ${styles.ShoppingCartButton}`} style={burgerMenuPressed ? {display: 'none'} : {display: 'block'}}>
          <Image src={ShoppingCart} alt="shopping-cart-icon" />
          {cartCount > 0 && (
            <div className={styles.cartBadge}>
              {cartCount}
            </div>
          )}
        </div>

        {/* account button */}
        <div className={styles.dropDownContainer}>
          <Image src={User} alt="user" className={styles.userIcon}  style={burgerMenuPressed ? {display: 'none'} : {display: 'block'}}/>
          <div className={styles.dropDown}>
            <DropDown />
          </div>
        </div>


        {/* language button */}
        <div className={`${styles.button} ${styles.flag}`}>
          <Image src={GeorgianFlag} alt="Georgian-flag" />
        </div>

        <div className={styles.cancleButton} onClick={cancelClicked} style={burgerMenuPressed ? {display: 'block'} : {display: 'none'}}><Image src={Cancle} alt='cancle' /></div>
      </nav>

      {/* end of the nav section */}
    </header>
  );
}

