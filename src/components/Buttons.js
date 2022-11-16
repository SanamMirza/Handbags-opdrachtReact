import React from 'react';

function Buttons( { click,children, toBeDisabled } ) {
    return (
          <button
              disabled={toBeDisabled}
              onClick= {click}>
              {children}
          </button>
    );
}

export default Buttons;