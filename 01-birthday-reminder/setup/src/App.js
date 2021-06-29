import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  people.forEach(person => console.log(person.name))
  return <main>
    <section class="container">
      <h3>{people.length} birthdays today</h3>
      <List people={people}/>
      
      <button onClick={() => {
        setPeople([])
      }}>Clear All</button>
    </section>
  </main>;
}

export default App;
