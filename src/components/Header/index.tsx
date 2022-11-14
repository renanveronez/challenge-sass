import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <nav>
          <a href='/'>Home</a>
          <a href='/tests'>Form</a>
          <a href='/like'>Like</a>

        </nav>

      </div>
    </header>
  )
}