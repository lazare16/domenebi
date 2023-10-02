import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image'; //enabling using images
import cancel from '../public/images/cancel.svg'; //cancel icon
import styles from '../styles/searchBox.module.scss'; //styling

interface SearchBoxProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleClearInput = () => {
    setSearchTerm(''); 
  };

  return (
    <form onSubmit={handleSearch} className={styles.form}>

      {/* container for search box */}
      <div className={styles.searchBoxContainer}>

        {/* implementing input clear  icon*/}
        <Image
          src={cancel}
          width={15}
          height={15}
          alt="cancel"
          className={`${styles.cancelIcon} ${searchTerm ? styles.showIcon : ''}`}
          onClick={handleClearInput}
        />
         
        <input
          type="text"
          placeholder="სახელით ძიება"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default SearchBox;



