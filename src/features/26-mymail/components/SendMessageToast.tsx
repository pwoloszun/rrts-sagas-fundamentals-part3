import React, { useEffect } from 'react';
import { Toast, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { selectors, actions } from 'src/store/26-mymail';

import useTimeout from '../hooks/useTimeout';

const cssStyles = {
  position: 'absolute' as any,
  top: 80,
  right: 20,
  backgroundColor: '#333',
  color: '#fff',
  padding: '6px',
};

export default function SendMessageToast(): React.ReactElement {
  // TODO
  const show = true;

  return (
    <Toast show={show} delay={3000} autohide style={cssStyles}>
      <Toast.Body>{`some content`}</Toast.Body>
    </Toast>
  );
}

function SendingMailContent() {
  return (
    <div>
      Sending...
      <Button>Cancel</Button>
    </div>
  );
}

function SendingCancelledContent() {
  return (
    <div>
      Sending Cancelled...
    </div>
  );
}

function ReversibleMailSentContent() {
  return (
    <div>
      Mail has been sent.
      <Button>Revert</Button>
    </div>
  );
}

function RolledbackAppliedContent() {
  return (
    <div>
      Reverting changes...
    </div>
  );
}

function MailSuccessfullySentContent() {
  return (
    <div>
      Mail successfully sent!
    </div>
  );
}
