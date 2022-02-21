import React from 'react';
import { useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Hero from './components/Hero/Hero';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [isDataFetch, setisDataFetch] = useState(false);
  const [users, setUsers] = useState([]);
  const [isBtnClick, setisBtnClick] = useState(false);

  const fetchUsers = async () => {
    setisBtnClick(true);
    const response = await fetch('https://reqres.in/api/users');
    const res = await response.json();
        // console.log(res)
        setUsers(res.data);
        setInterval(() => {
          setisDataFetch(true);
        }, 1500);
  };

  return (
    <>
        <Navbar fetchUsers={fetchUsers}/>   

            {isBtnClick ? (
              isDataFetch ? (
                <Card users={users} />
              ) : (
                  <Loader/>
              )
            ) : (
              <Hero/>
            )}
    </>
  );
}

export default App;