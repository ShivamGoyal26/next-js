import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <style jsx>{``}</style>
      <Head>
        <title>Hunting Coder</title>
        <meta
          name="keywords"
          content="hunting coder, next js blog, coders blog"
        />
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Lamborghini_Logo.svg/1200px-Lamborghini_Logo.svg.png"
        />
      </Head>

      <nav className={styles.mainnav}>
        <ul>
          <Link href="/">
            <a>
            <li className={styles.value}>Home</li>
            </a>
          </Link>
          <Link href="/about">
            <a>
            <li className={styles.value}>About</li>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <li className={styles.value}>Contact</li>
            </a>
          </Link>
        </ul>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className="myspan dummy">Hunting Coder</span>
        </h1>
        <div className={styles.imagewrap}>
          <Image
            className={styles.myImg}
            src="/homeimg.jpeg"
            width={5184}
            height={3456}
          />
        </div>
        <p className={styles.description}>
          A blog for the coders by hunting coder
        </p>

        <div className="blogs">
          <h2 className={styles.popular}>Popular blogs</h2>
          <div className="blogitem">
          <h3 className={styles.value}>How to learn js in 2022?</h3>
            <p className= {styles.subtitle}>Javascript is an awesome language to work for the web apps</p>
          </div>

          <div className="blogitem">
            <h3 className={styles.value}>How to learn js in 2022?</h3>
            <p className= {styles.subtitle}>Javascript is an awesome language to work for the web apps</p>
          </div>

          <div className="blogitem">
          <h3 className={styles.value}>How to learn js in 2022?</h3>
            <p className= {styles.subtitle}>Javascript is an awesome language to work for the web apps</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
 
      </footer>
    </div>
  );
}
