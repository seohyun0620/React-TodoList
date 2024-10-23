import styles from './Editor.module.css';
import List from './List'
import {useState} from 'react';

function Editor(){
  const [todo,setTodo] = useState(''); //해야할 일:todo
  const [toDoList, setTodoList] = useState([]); //todo목록

  function handleChange(e){
    setTodo(e.target.value); //사용자가 입력할 때 마다 값(todo)인식
  }

  function handleClickAdd(e){
    setTodo(''); //todo값 초기화
    setTodoList([...toDoList,{text:todo}]); //새로운 배열로 state를 변경(기존 배열의 모든 항목의 마지막에 새 항목 추가)
  }

  function handleClickDel(items){
    setTodoList(items);
  }
  
  return(
    <>
    <label className={styles.Editor}>
      <input className={styles.input} name="todoValue" type="text" placeholder="새로운 Todo를 입력..." value={todo} onChange={handleChange} />
      <button className={styles.editorBtn} type="button" onClick={handleClickAdd}> 추가 </button>
    </label>
    <h3>Todo List📌</h3>
    <input className={styles.searchInput} placeholder="검색어를 입력하세요.." />
    <List toDoList={toDoList} onValueChange={handleClickDel} />
    </>
  )
}

export default Editor;