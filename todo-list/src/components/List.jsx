import styles from './List.module.css';

function List({toDoList,onValueChange}){

  return (
    <>
      <ul className={styles.List}>
        {toDoList.map((listItem) => (
          <li className={styles.listItems} key={listItem.text}>
            <input
              className={styles.checkbox}
              type="checkbox"
              defaultChecked={false}
            />
            <span className={styles.content}>{listItem.text}</span>
            <span>{new Date().toLocaleDateString()}</span>
            <button
              className={styles.delBtn}
              type="button"
              onClick={() => {
                onValueChange(toDoList.filter((a) => a.text !== listItem.text)); 
                //삭제 기능(listItem.text와 text(임시 key)가 다른 toDoList배열을 생성한다”는 의미)
              }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

    {/*7 : todo목록 배열의 항목들을 하나씩 순회하며 각 항목에 있는 text의 값을 List컴포넌트의 toDoList props로 전달하며 새 배열을 렌더링 함
    이 새 배열은 JSX에서 사용 가능한 리액트 엘리먼트들로 구성된 배열이 됨*/}

export default List;