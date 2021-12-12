import React from 'react';
import './style.css';

export default function App() {
  const inputRef = React.useRef(null);
  const focusOnInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div>
      <button onClick={focusOnInput}>Focus</button>
      <input ref={inputRef}></input>
    </div>
  );
}
