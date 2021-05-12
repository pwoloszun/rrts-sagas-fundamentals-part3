import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';

import { MailEntityParams, MailStatus } from 'src/api/mymail-api';
// import { actions } from 'src/store/26-mymail';

import DraftMailModal from './DraftMailModal';

export default function CreateDraftMailButton(): React.ReactElement {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSend = (params: MailEntityParams) => {
    // TODO
  };
  const handleRemove = () => {
    console.log('rmv td');
  };
  const mail: MailEntityParams = {
    from: 'you@you.pl',
    to: [],
    title: '',
    content: '',
    createdAt: Date.now(),
    status: MailStatus.draft,
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create Mail
      </Button>

      <DraftMailModal
        show={show}
        mail={mail}
        onClose={handleClose}
        onSend={handleSend}
        onRemove={handleRemove}
      />
    </>
  );
}
