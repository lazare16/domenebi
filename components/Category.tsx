import styles from '../styles/checkCategory.module.scss'; //adding styling 

export default function Category() {
    return (
        <>
            <form action="#" className={styles.formContainer}>
            <h3>კატეგორიები</h3>
                <div className={styles.checkContainer}>
                    <input type="checkbox" name="bussiness" id="bussiness" />
                    <label htmlFor="minMoneyRange">ბიზნესი</label>
                </div>

                <div className={styles.checkContainer}>
                    <input type="checkbox" name="bussiness" id="bussiness" />
                    <label htmlFor="minMoneyRange">უძრავი ქონება</label>
                </div>

                <div className={styles.checkContainer}>
                    <input type="checkbox" name="bussiness" id="bussiness" />
                    <label htmlFor="minMoneyRange">ავტო</label>
                </div>

                <div className={styles.checkContainer}>
                    <input type="checkbox" name="bussiness" id="bussiness" />
                    <label htmlFor="minMoneyRange">მედიცინა</label>
                </div>

                <div className={styles.checkContainer}>
                    <input type="checkbox" name="bussiness" id="bussiness" />
                    <label htmlFor="minMoneyRange">ტექნოლოგიები</label>
                </div>

                <div className={styles.checkContainer}>
                    <input type="checkbox" name="bussiness" id="bussiness" />
                    <label htmlFor="minMoneyRange">თამაშები</label>
                </div>

                <div className={styles.checkContainer}>
                    <input type="checkbox" name="bussiness" id="bussiness" />
                    <label htmlFor="minMoneyRange">გართობა და დასვენება</label>
                </div>

                <div className={styles.checkContainer}>
                    <input type="checkbox" name="bussiness" id="bussiness" />
                    <label htmlFor="minMoneyRange">მედია</label>
                </div>

                <div className={styles.checkContainer}>
                    <input type="checkbox" name="bussiness" id="bussiness" />
                    <label htmlFor="minMoneyRange">განათლება</label>
                </div>

                <div className={styles.checkContainer}>
                    <input type="checkbox" name="bussiness" id="bussiness" />
                    <label htmlFor="minMoneyRange">კომერცია</label>
                </div>

                <div className={styles.checkContainer}>
                    <input type="checkbox" name="bussiness" id="bussiness" />
                    <label htmlFor="minMoneyRange">ფინანსები</label>
                </div>

                <div className={styles.checkContainer}>
                    <input type="checkbox" name="bussiness" id="bussiness" />
                    <label htmlFor="minMoneyRange">ბიზნესი</label>
                </div>
            </form>
        </>
    );
}