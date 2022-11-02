import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";

import { Album } from "./components/Pages/Album";
import { List} from "./components/Pages/List";
import { Todo } from "./components/Pages/Todo";
import { Photo } from "./components/Pages/Photo";
import { useState } from "react";
function App(props) {
  const [todol, setTodol] = useState(0)
  const [albumc, setAlbumc] = useState(0)
  const [listc, setListc] = useState(0)
  const [photoc,setPhotoc]=useState(0)
  const getdata = (data) => {
 
    setTodol(data)
    console.log(todol)
  }
  const getalbum = (album) => {
    setAlbumc(album)
    
  }
  const getlist = (list) => {
    setListc(list)
  }
  const getphoto = (photo) =>
  {
    setPhotoc(photo)
    }
    
  
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Switch>
            <Route exact path="/"
              component={() => (<Home todolength={todol}
                albumc={albumc}
                listc={listc}
                 photoc={photoc}
              />)}
               />
            <Route path="/todo" 
              component={() => (<Todo getlength={getdata} />)}
            />
            <Route path="/album" component={() => (<Album albumc={getalbum} />)}/>
            <Route path="/list" component={() => (<List listc={getlist} />)} />
            <Route path="/photo" component={() => (
              <Photo photoc={getphoto}/>
            )} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
