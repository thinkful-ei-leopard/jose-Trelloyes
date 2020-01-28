import React from 'react';
import STORE from './store';
import List from './list';

function App(store) {
  return (
    <main className='App'>
      <header>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'></div>
      {store}
    </main>
  );
}
// STORE.lists.map(element => List(element.header, element.cardIds)
console.log(App(STORE))

export default App
