import styles from './Editor.module.css';
import List from './List'
import {useState} from 'react';

function Editor(){
  const [todo,setTodo] = useState('');
  const [toDoList, setTodoList] = useState([]);

  function handleChange(e){
    setTodo(e.target.value);
  }

  function handleClickAdd(e){
    setTodo('');
    setTodoList([...toDoList,{text:todo}]);
  }
  
  return(
    <>
    <label className={styles.Editor}>
      <input className={styles.input} name="todoValue" type="text" placeholder="새로운 Todo를 입력..." value={todo} onChange={handleChange} />
      <button className={styles.editorBtn} type="button" onClick={handleClickAdd}> 추가 </button>
    </label>
    <h3>Todo List📌</h3>
    <input className={styles.searchInput} placeholder="검색어를 입력하세요.." />
    {toDoList.map(listItem=>(<List key={listItem.text} todo={listItem.text}/>))}
    </>
  )
}

export default Editor;