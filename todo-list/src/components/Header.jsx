import styles from './Header.module.css';

function Header() {
  return (
    <>
      <h2>오늘은📅</h2>
      <h1 className={styles.date}>{new Date().toDateString()}</h1>
    </>
  );
}

export default Header;
