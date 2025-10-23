import Head from 'next/head'
import styles from '@/styles/Main.module.css'

export default function Home() {
    return (
        <>
            <Head>
                <title>Hung Nguyen - Not found</title>
                <meta name="description" content="Dawid Abram - Not found" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.svg" />
            </Head>
            <main className={styles.container}>
                <div className={styles.errorContainer}>
                    <h1>404</h1>
                    <p>Oops! Page not found</p>
                </div>
            </main>
        </>
    )
}
