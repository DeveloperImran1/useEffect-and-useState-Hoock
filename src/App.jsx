
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import BookCard from './BookCard';


function App() {
  const [users, setUser] = useState([]);

  const [dependency, setDependency] = useState(false);

  // sudho data fetch korle infinity bar data loop hotei thakbe. so, Ai infinity er theke bachte useEffect() method use kora hoi.


  useEffect( ()=> {    // ai useEffect use korar maddhome data fetch korar loop akbarii cholbe.
    console.log("Dependency er man change hoiasa. so ami useEffect abar call hoiasi.")

    fetch('Production.json')
    .then(res => res.json())
    .then(data => setUser(data) )
  }, [dependency]);    // function er moddher kajta akbar cholate 2nd perameter a empty array [] ditai hobe.
// aikhane empty array dila just akbarii useEffect function ta call hoto. But useState namer arek ta method create koresi. tar distuctur a dependency namer akta variable niasi. Than useEffect er 2nd perameter a empty array na dia dependency diasi. ai dependency er man joto bar change hobe , totobar useEffect function ta call hobe.

  return (
    <>

      <div className='max-w-[1300px] mx-auto'>

        {/* Ai button er maddhome setDependency function k call kore dependency er value true and false , aivabe change koresi. */}
        <button onClick={()=> setDependency(!dependency)} className='bg-sky-400 rounded-md'>Use effect dependent</button>
        <div className="bookCard">
          {
            users.map( user => <BookCard product={user}></BookCard>)
          }
        </div>
      </div>

    </>
  )
}

export default App
