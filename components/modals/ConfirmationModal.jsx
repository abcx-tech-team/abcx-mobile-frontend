import React from 'react';

const Confirmation = ({ open, onSubmit, onClose, Component, ...rest }) => (
  <Component visible={open} onSubmit={onSubmit} onClose={onClose} {...rest} />
);

export default Confirmation;
