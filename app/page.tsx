import styles from '../styles/home.module.css';
import Link from 'next/link';

export default function Home() {
    return (
        <div className={styles.layout}>
            <h1 className={styles.title}>Rendering</h1>
            <Link href="/CSR">CSR</Link>
            <Link href="/SSR">SSR</Link>
            <Link href="/ISR">ISR</Link>
            <Link href="/SSG">SSG</Link>
        </div>
    );
}
