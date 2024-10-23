import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';

function App() {
  return (
    <div className='container'>
      <Header/>
      <Editor>
        <List>
        </List>  
      </Editor>
    </div>
  )
}

export default App;
