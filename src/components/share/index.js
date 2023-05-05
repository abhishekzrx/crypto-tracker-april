import React from 'react';
import { TwitterShareButton } from 'react-share';

function ShareButton() {
  const shareUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=<email_address>&su=<subject>&body=<body_text>';
  const title = 'Check out this cool website!';

  return (
    <TwitterShareButton url={shareUrl} title={title}>
      Share on Twitter
    </TwitterShareButton>
  );
}

export default ShareButton;
