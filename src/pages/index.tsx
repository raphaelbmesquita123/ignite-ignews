import styles from './styles/home.module.scss'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>HOME | IG NEWS</title>
      </Head>
      <div className={styles.title}>
        <h1>hello world</h1>
      </div>
    </>
  )
}
