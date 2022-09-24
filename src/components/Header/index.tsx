import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <nav>
          <a href='/'>Home</a>
          <a href='/tests'>Tests</a>

        </nav>

      </div>
    </header>
  )
}