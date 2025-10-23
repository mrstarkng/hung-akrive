import globalStyles from '@/styles/Main.module.css';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={globalStyles.container}>
            <footer className={styles.footer}>
                <p>© {new Date().getUTCFullYear()} by Andrew Nguyen. All rights reserved.</p>
                <a
                    href="https://github.com/DawidAbram/dawidapp"
                    className={styles.sourceCodeLink}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    source code
                </a>
            </footer>
        </div>
    );
};

export default Footer;
