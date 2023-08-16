import './App.css';
import Header from './Header/Header'
import Body from './Body/Body'
import Login from './SignIn/Login'
import { useStateValue } from './StateProvider'
function App() {
  const [{user},dispatch] = useStateValue();
 // const user=null;
  return (
    <div className="app">
    {!user?(
        <Login/>
      ):(
      <>
      <Header/>
      {/*Body*/}
      <Body/>
  </>
    )}
    </div>
  );
}

export default App;
