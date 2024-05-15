import React, { useState } from 'react';
import './App.css';

function App() {
  // Using useState to manage state
  const [counter, killer] = useState(5);

  const add = () => {
    killer(counter => counter + 1);
  };

  const remove = () => {
    killer(counter => counter - 1);
  };

  return (
    <>
      <div className='text-white flex justify-center items-center flex-col gap-6 h-[600px]'>
        <h1 className='text-5xl'>Priyanshu Raj</h1>
        <h1 className='text-2xl'>Counter : {counter}</h1>

        <div className='mt-6 flex flex-col gap-5'>
          
          <button className='bg-blue-500 rounded-lg font-semibold h-16 w-40' onClick={add}>
            Add Val
          </button>

          <button className='bg-blue-500 rounded-lg font-semibold h-16 w-40' onClick={remove}>
            Remove Val
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
