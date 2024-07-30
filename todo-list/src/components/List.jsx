import styles from './List.module.css';
import ListItems from './ListItems';

function List(){
  return(
    <>
      <h3>Todo List📌</h3>
      <input className={styles.searchInput} placeholder="검색어를 입력하세요.." />
      <ListItems />
      <ListItems />
    </>
  )
}

export default List;