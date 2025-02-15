import React from 'react';

export const Person = ({ person }) => (
  <>
    <h2 className="Person__name">My name is {person.name}</h2>
    {person.age && <p className="Person__age">I am {person.age}</p>}
    <p className="Person__partner">
      {person.isMarried === true ? person.partnerName : 'I am not married'} is
      my {person.sex === 'f' ? 'husband' : 'wife'}
    </p>
  </>
);
