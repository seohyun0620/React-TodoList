import styles from './Editor.module.css';

function Editor(){
  return(
    <>
    <label className={styles.Editorlabel}>
      <input className={styles.input} type="text" placeholder="새로운 Todo를 입력..." value=""/>
      <input className={styles.submitBtn} type="submit" value="추가" />
    </label>
    </>
  )
}

export default Editor;