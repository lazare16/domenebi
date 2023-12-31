import styles from '../styles/sortBy.module.scss'; //using styling as module

export default function SortBy() {
    return (
        // sortBy container to align inputs side by side
        <div className={styles.sortByContainer}>
            <form action="#">

                {/* input containers */}
                <div className={styles.sortByInputContainer}>
                    <input type="text" className={styles.sortByInput} placeholder='სორტირება'/>
                </div>

                <div className={styles.sortByDropDown}>
                    <select className={styles.sortBySelect}>
                        <option value=""> სორტირება </option>
                    </select>
                </div>
            </form>
        </div>
    );
}