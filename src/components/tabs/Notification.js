import React from 'react';
import { Alert } from 'react-bootstrap';

let saveChangesAlert = {
    position: 'fixed',
    bottom: 0,
    right: 50
}

const AlertMe = () => {
  return (
        <Alert style={saveChangesAlert} bsStyle="success">
            <strong>Changes Saved!</strong><br />
            Your progress for has been saved.
        </Alert>
  )
}

export default AlertMe;