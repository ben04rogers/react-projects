import React from 'react';

const List = (props) => {
  return (
    <>
      {props.people.map(person => (
        <article className="person">
          <img src={person.image} alt="image" />
          <div>
            <h4>{person.name}</h4>
            <p>{person.age} years</p>
          </div>
        </article>
      ))}
    </>
  );
};

export default List;
