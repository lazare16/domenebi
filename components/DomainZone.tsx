import styles from '../styles/checkCategory.module.scss' //adding styling

export default function DomainZone(){
    return(
        <>
        <form action="#" className={styles.formContainer} style={{paddingBottom: '47px'}}>
        <h3>დომენის ზონა</h3>
            <div className={styles.checkContainer}>
                <input type="checkbox" name=".ge" id=".ge" />
                <label htmlFor=".ge">.ge</label>
            </div>

            <div className={styles.checkContainer}>
                <input type="checkbox" name=".com.ge" id=".com.ge" />
                <label htmlFor=".com.ge"> .com.ge</label>
            </div>

            <div className={styles.checkContainer}>
                <input type="checkbox" name=".net.ge" id=".net.ge" />
                <label htmlFor=".net.ge">.net.ge</label>
            </div>

            <div className={styles.checkContainer}>
                <input type="checkbox" name=".org.ge" id=".org.ge" />
                <label htmlFor=".org.ge">.org.ge</label>
            </div>

            <div className={styles.checkContainer}>
                <input type="checkbox" name=".edu.ge" id=".edu.ge" />
                <label htmlFor=".edu.ge">.edu.ge</label>
            </div>

            <div className={styles.checkContainer}>
                <input type="checkbox" name=".school.ge" id=".school.ge" />
                <label htmlFor=".school.ge">.school.ge</label>
            </div>

        
        </form>
    </>
    );
}