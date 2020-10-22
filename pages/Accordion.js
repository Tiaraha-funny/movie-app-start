import React, { useState } from "react";

export function Accordion() {

  const [ isToggled, setIsToggled ] = useState(false);

  const showThis = isToggled ? <h2>Show this one</h2> : ''

  return (
    <div >
      {showThis}
      {/* { isToggled &&  <h3>Show me</h3> } */}
      { isToggled ? <h3>Show me</h3> : null }
      <button 
      onClick={ () => setIsToggled(!isToggled) }
      >Toggle</button>
    </div>
  );
}
