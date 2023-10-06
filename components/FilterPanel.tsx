import React from 'react';
import styles from '../styles/filterPanel.module.scss'; //adding styling as module
import SearchBox from './SearchBox'; // importing search box component
import PriceRange from './PriceRange'; // importing price range component
import SymbolRange from './SymbolRange'; //importing symbol range component
import Category from './Category'; //importing category component 
import DomainZone from './DomainZone'; //importing domain zone component

// passing down the props
interface MainProps {
    burgerMenuPressed: boolean;
    setBurgerMenuPressed: (value: boolean) => void;
  }

export default function FilterPanel({ burgerMenuPressed, setBurgerMenuPressed }: MainProps) {

    //function for handling search 
    const handleSearch = (searchTerm: string) => {
        console.log('Search term:', searchTerm);
    };

    return (

        // filter panel
        <div className={styles.filterPanel} style={burgerMenuPressed ? {display: 'block'} : {}}> {/* if burger menu is pressed filter pannel will be displayed on mobile */}

            {/* inner components of the filter panel */}
            <SearchBox onSearch={handleSearch}  burgerMenuPressed={burgerMenuPressed} setBurgerMenuPressed={setBurgerMenuPressed}/>  {/* search input component */}
            <PriceRange />  {/* price range component */}
            <SymbolRange />  {/* symbol range component */}
            <Category />  {/* category component */}
            <DomainZone />  {/* domain zone component */}
        </div>
    );
}

