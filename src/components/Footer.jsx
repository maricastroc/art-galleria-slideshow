import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io/home"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href="https://github.com/maricastroc"
          target="_blank"
          rel="noreferrer"
        >
          Mariana Castro.
        </a>
      </p>
    </footer>
  )
}
