
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Account from './components/Account/Account';
import Character from './components/Character/Character';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ServerConfig from './components/ServerConfig/ServerConfig';
import {useState,useEffect} from "react";



function App() {
const [searchInput, setSearchInput] = useState("");
const [AccountsList,setAccountsList] = useState([]);
const [CharList,setCharList] = useState([]);
const [ConfigList,setConfigList] = useState([]);



const fetchaccounts=()=>{
  fetch("/accounts")
    .then(res => res.json())
    .then(
        (result)=>{
          setAccountsList(result);
        }
    )
}

const fetchchars=()=>{
  fetch("/characters")
  .then(res => res.json())
  .then(
      (result)=>{
          setCharList(result);
      }
  )
}

const fetchconfigs=()=>{
  fetch("/configs")
    .then(res => res.json())
    .then(
        (result)=>{
            setConfigList(result);
        }
    )
}
const filteredcharlist = CharList.filter((list) => {
  //if no input the return the original
  if (searchInput === '') {
      return list;
  }
  //return the item which contains the user input
  else {
      return list.name.toLowerCase().includes(searchInput)
  }
  
})

useEffect(()=>{
  fetchaccounts();
  fetchchars();
  fetchconfigs();
},[AccountsList],[filteredcharlist],[ConfigList])


  return (
    
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element = {<Home videoId='M2mNso0ExNk'/>} ></Route>
      <Route path='/character' element = {<><Character list ={filteredcharlist} setSearchInput={setSearchInput}></Character></>}></Route>
      <Route path='/account' element = {<Account  list={AccountsList} />} ></Route>
      <Route path='/config' element = {<ServerConfig list= {ConfigList}/>} ></Route>
      </Routes>     
      </BrowserRouter>

  );
}


export default App;
