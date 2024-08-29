import styles from './ListItems.module.css';

function ListItems({todo}){
  return (
    <label className={styles.ListItemslabel}>
      <input className={styles.checkbox} type="checkbox" defaultChecked={false}/> 
      <span className={styles.content}>{todo}</span>
      <span>{new Date().toLocaleDateString()}</span>
      <button className={styles.delBtn} type="button">삭제</button>
    </label>
  )
}

export default ListItems;