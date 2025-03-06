import './App.css'
import { MyButton } from './Button';
import { HelloWorld } from './HelloWorld'
import { List } from './List';

function App() {
  const myUsers = [{ name: 'Boris' }, { name: 'Eddy'}];
  return (
    <>
      <HelloWorld name="Boris" />
      <HelloWorld name="Eddy" />
      <HelloWorld />
      <List users={myUsers} />
      <MyButton text='My button' />
      {/* un commentaire jsx */}
      {/* <HelloWorld>some content??</HelloWorld> */}
    </>
  )
}

export default App
