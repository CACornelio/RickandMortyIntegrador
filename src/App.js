import './App.css';
import Cards from './components/Cards/Cards';
import NavBar from './components/NavBar/NavBar';
import style from "./App.css";
import { useState, useEffect, } from 'react';
import axios from 'axios';
import {Routes, Route, useLocation,useNavigate} from 'react-router-dom'
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites';
const EMAIL = 'cacornelio@soyhenry.com';
const PASSWORD = 'asd123';

function App() {

   const [characters, setCharacters] = useState([]);
const {pathname}= useLocation();


const navigate = useNavigate();
const [access, setAccess] = useState(false);


function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}
useEffect(() => {
   !access && navigate('/');
}, [access]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            // Controlar que no se puedan agregar personajes repetidos que ya se muestran en pantalla.
            const characterExists = characters.some(char => char.id === data.id);
            if (characterExists) {
              window.alert('¡Este personaje ya está en pantalla!');
            } else {
              setCharacters(oldChars => [...oldChars, data]);
            }
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }


   const onClose = (id) => {
      setCharacters(
        characters.filter((char) => {
          return char.id !== Number(id);
        })
      );
    };

   return (
      <div className={style.App}>
         {pathname !== '/' && <NavBar onSearch={onSearch} className={style.nav} />}

         <Routes> 
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
             </Routes>
         
      </div>
   );
}


export default App;
