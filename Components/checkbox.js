import React from 'react';

const Checkbox = ({ id, label, onClick }) => {
  return (
    <label>
      <input type="checkbox" id={id} onClick={onClick} />
      {label}
    </label>
  );
};