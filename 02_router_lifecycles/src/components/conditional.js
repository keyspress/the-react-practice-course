import React from 'react';

const Conditional = () => {
  // const value = false;
  const returnValue = () => {
    return false;
  };
  const showIt = () =>
    returnValue() ? <div>It's true!</div> : <div>Lies!!</div>;
  return <div>{showIt()}</div>;
};

export default Conditional;
