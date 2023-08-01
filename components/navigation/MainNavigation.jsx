import styles from './MainNavigation.module.css'
import Link from 'next/link'



export default function MainNavigation(){

    return <header className={styles['main-header']}>

    <nav className={styles["main-header_nav"]
    }>

        <ul className={styles['main-header_nav__items']}>
            <li className={styles['main-header_nav__item']}><Link href='/'>Home</Link></li>
            <li className={styles['main-header_nav__item']}><Link href="/posts">All Posts</Link></li>
            <li className={styles['main-header_nav__item']}><Link href="/contact">Contact</Link></li>
          
        </ul>
    </nav>
</header>
}