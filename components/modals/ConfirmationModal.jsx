import React from 'react';

const Confirmation = ({ open, onSubmit, onClose, Component }) => (
  <Component visible={open} onSubmit={onSubmit} onClose={onClose} />
);

export default Confirmation;
