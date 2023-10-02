import Link from 'next/link'; //enabling usage of <Link> tag

import styles from '../styles/SubHeader.module.scss'; //using styling

export default function SubHeader() {
    return (

        // subheader container
        <div className={styles.subheader}>

            {/* subheader nav */}
            <nav className={styles.nav}>

                {/* left part of the navigation */}
                <div className={styles.leftLinksContainer}>
                    <Link href="#" className={styles.link}>დომენი</Link>
                    <Link href="#" className={styles.link}>ტრანსფერი</Link>
                    <Link href="#" className={styles.link}>ჰოსტინგი</Link>
                    <Link href="#" className={styles.link}>Gmail</Link>
                    <Link href="#" className={styles.link}>ვებგვერდი</Link>
                    <Link href="#" className={styles.link}>დომენის მარკეტი</Link>
                </div>
                
                {/* right side of navigation */}
                <div className={styles.rightLinksContainer}>
                    <Link href="#" className={styles.link}>ჩვენს შესახებ</Link>
                    <Link href="#" className={styles.link}>ფასები</Link>
                    <Link href="#" className={styles.link}>ბლოგი</Link>
                    <Link href="#" className={styles.link}>დახმარება</Link>
                </div>
            </nav>
        </div>
    )
}