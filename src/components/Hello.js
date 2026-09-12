/*Using JSX
import React from 'react'

const Hello = () => {
  return (
    <div>
        <h1>Hello All!</h1>
        </div>
  )
}

export default Hello
*/

// Without Using JSX
import React from 'react';

const Hello = () => {
  return (
    React.createElement(
      'div',
      null,
      React.createElement('h1', { id: 'ab' }, 'Hello All!')
    )
  );
};

export default Hello;