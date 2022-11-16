import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() 
{
   const [people, setPeople] = useState(data);

   function RemoveItem(id)
   {
      setPeople((prevList) => {
        return prevList.filter((people) => {
          return people.id!==id;
        })
      })
   }

    return (
      <main>
        <section className='container'>
          <h3>{people.length} Birthday today</h3>
          <List people={people} removePerson={RemoveItem}/>
          <button onClick={() => setPeople([])}>
            Clear Me
          </button>
        </section>
      </main>
    )
}

export default App;
