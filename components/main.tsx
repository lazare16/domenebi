import React, { useState } from 'react';

import Image from 'next/image'; //enabling image usage

import Link from 'next/link'; //enabling usage of <Link> tag

import styles from '../styles/main.module.scss'; //using styling as module

import sortBy from '../public/images/sortByIcon.svg'; //implementing sortBy  component

import FilterPanel from '../components/FilterPanel';  //implementing filter panel

import DomainPanel from '../components/DomainPanel'; //implementing  domain panel 

import SearchBox from './SearchBox'; //implementing searchbox

import SortBy from './SortBy';

import { domains } from './DomainsData';

interface MainProps {
    burgerMenuPressed: boolean;
    setBurgerMenuPressed: (value: boolean) => void;
}

export default function Main({ burgerMenuPressed, setBurgerMenuPressed }: MainProps) {


    // function for handling search
    const handleSearch = (searchTerm: string) => {
        console.log('Searching for:', searchTerm);
    };

    return (
        <main className={styles.main}>

            {/*banner container*/}
            <div className={styles.banner} style={burgerMenuPressed ? { display: 'none' } : {}}>
                <div className={styles.imageContainer}>
                    <h1>გაყიდე და იყიდე დომენი მარტივად</h1>
                </div>
            </div>

            {/* domain info */}
            <div className={styles.info}>

                {/* domain counter */}
                <div className={styles.domainCount}>
                    <h3>დომენები მარკეტზე: <span>{domains.length}</span></h3>
                </div>

                {/* filter by (fast access) */}
                <div className={styles.filterBy}>
                    <h3>
                        სორტირება:
                    </h3>
                    <nav>
                        <span>
                            დამატების თარიღით
                            <Image
                                src={sortBy}
                                alt="sortbyIcon"

                                style={{ marginLeft: '6px' }}
                            />
                        </span>
                        <span>ვადის ამოწურვით</span>
                        <span>ფასით</span>
                        <span>ანბანით</span>
                    </nav>
                </div>

                {/* information about how to sell the domain */}
                <div className={styles.additionalInfo}>
                    <Link href="#" className={styles.moreInfoLink}>როგორ გავყიდო დომენი?</Link>
                </div>
            </div>

            {/* container for domain panel and filter panel */}
            <div className={styles.panelsContainer}>

                {/* filter panel container */}
                <div className={styles.filterPanelContainer}>
                    <FilterPanel burgerMenuPressed={burgerMenuPressed} setBurgerMenuPressed={setBurgerMenuPressed} />

                    {/* second search input */}
                    <div className={styles.secondSearch}>
                        <SearchBox onSearch={handleSearch} burgerMenuPressed={burgerMenuPressed} setBurgerMenuPressed={setBurgerMenuPressed}/>
                    </div>

                    <div className={styles.SortBy} style={burgerMenuPressed ? { display: 'none' } : {}}>
                        <SortBy />
                    </div>
                </div>

                {/* domain panel */}
                <div className={styles.domainPanelContainer} style={burgerMenuPressed ? { display: 'none' } : {}}>
                    <DomainPanel />
                </div>
            </div>

            {/* <div className={styles.footerButton}>
                <div className={styles.footerButtonContent}><h3>ძიება</h3></div>
            </div> */}
        </main>
    )
}