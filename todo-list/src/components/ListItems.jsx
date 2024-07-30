import styles from './ListItems.module.css';

function ListItems(){
  return (
    <label className={styles.ListItemslabel}>
      <input className={styles.checkbox} type="checkbox" defaultChecked={false}/> 
      <span className={styles.content}>REACT공부하기</span>
      <span>{new Date().toLocaleDateString()}</span>
      <button className={styles.delBtn} type="button">삭제</button>
    </label>
  )
}

export default ListItems;