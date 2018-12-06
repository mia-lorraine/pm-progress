import React from 'react';
import { Alert } from 'react-bootstrap';
import '../../styles/Success.css';

let saveChangesAlertPosition = {
    position: 'fixed',
    bottom: 0,
    right: 50
}

const SavedChanges = () => {
  return (
    <Alert style={saveChangesAlertPosition} className="savedChangesAlert" bsStyle="success">
        <strong>Changes Saved!</strong><br />
        Your progress for has been saved.
    </Alert>
  )
}

export default SavedChanges;