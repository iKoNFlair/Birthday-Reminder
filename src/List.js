import React from 'react';
const List = ({people, removePerson}) => {

  return (
    <>
      {people.map((person,index) => {
        const {id, name, age, image} = person;

        return (
          <article key={id} className="person">
                <img src={image} alt={person}/>
                <div className='details'>
                  <div>
                  <h4>{name}</h4>
                  <p>{age} years</p>
                  </div>
                  <button onClick={() => {removePerson(id)}}>Delete</button>
                </div>
          </article> 
        )
      })}
    </>
  );
};

export default List;
