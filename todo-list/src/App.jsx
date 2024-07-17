import './App.css';
import Header from './components/Header.jsx';
import Editor from './components/Editor'
import List from './components/List'

function App() {
  return (
    <div className='container'>
      <Header/>
      <Editor/>
      <List/>
    </div>
  )
}

export default App;
