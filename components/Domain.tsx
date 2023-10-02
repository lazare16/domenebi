import React, { useContext, useState } from 'react'; //enabling usage of react hooks

import Image from 'next/image'; // enabling image usage

import styles from '../styles/Domain.module.scss'; // using styling as module

import ArrowDown from '../public/images/arrowDown.svg';    //implementing arrow down icon

import AddToCartButton from '../public/images/cartIcon.svg'; //implementing shopping cart icon

import Confirm from '../public/images/confirmIcon.svg';


import { CartCountContext } from './CartCountProvider'; //importing added items count function 

interface DomainProps {
  isLast: boolean;
  domainName: string;
  priceInGEL: number;
  category: string[] | string;
  zone: string
}

export default function Domain({ isLast, domainName, priceInGEL, category }: DomainProps) {
  const context = useContext(CartCountContext);

  if (!context) {
    throw new Error("CartCountContext not found.");
  }

  const { cartCount, setCartCount } = context; 

  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);

  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);

  const [isButtonHovered, setIsButtonHovered] = useState<boolean>(false);

  // function for handling the add to cart 
  const handleAddToCart = () => {
    if (!isAddedToCart) {
      setCartCount((prevCount) => prevCount + 1); 
      setIsAddedToCart(true);
      setIsButtonClicked(true); 

    } else {
      setCartCount((prevCount) => prevCount - 1); 
      setIsAddedToCart(false);
      setIsButtonClicked(false); 
    }
  };

  return (
    <>
      <div className={styles.domainContainer}>
        <div className={styles.innerContainer} style={isButtonHovered && isButtonClicked ? {backgroundColor: '#FFFFFF'} : {backgroundColor: ''}} onMouseEnter={() => setIsButtonHovered(true)} onMouseLeave={() => setIsButtonHovered(false)}>
          <div className={styles.leftSide}>
            <div className={styles.moreInfoButton}>
              <Image src={ArrowDown} alt="Arrow down" id='arrow' />
            </div>
            <h3>{domainName}</h3>
          </div>

          <div className={styles.rightSide} style={isButtonClicked ? {width: '125px'} : {}}>
            <div className={styles.price} style={isButtonClicked ? {display: 'none'} : {display: 'block'}}>
              <h3>{`${priceInGEL} ₾`}</h3>
              <p>{`${priceInGEL*0.37}$`}</p>
            </div>
            <div className={isButtonClicked? styles.clickedAndHovered :styles.addToCartButton} onClick={handleAddToCart}>
              <span className={`${isButtonClicked? styles.clickedAndHovered :styles.addToCartContainer}`}  >
                <span className={styles.add}>{isButtonClicked ? 'კალათაშია': 'დამატება'}</span>
                <Image src={isButtonClicked ? Confirm : AddToCartButton} alt="AddToCartButton" id="addToCart" />
              </span>
            </div>
          </div>
        </div>
        <span className={isLast ? styles.hidden : styles.dividerLine}></span>
      </div>
    </>
  );
}
