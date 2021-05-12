import React, { useEffect, useState } from 'react';

import mymailApi, { MailEntity } from 'src/api/mymail-api';

import CreateDraftMailButton from './components/CreateDraftMailButton';
import MailList from './components/MailList';
import SendMessageToast from './components/SendMessageToast';

const MyMailPage: React.FunctionComponent = () => {
  const [mails, setMails] = useState<MailEntity[]>([]);

  useEffect(() => {
    mymailApi.getAll()
      .then((mails) => {
        console.log('mails', mails);
        setMails(mails);
      });
  }, []);

  return (
    <div>
      <h3>MyMailPage</h3>
      <CreateDraftMailButton />
      <MailList mails={mails} />
      <SendMessageToast />
    </div>
  );
};

export default MyMailPage;

