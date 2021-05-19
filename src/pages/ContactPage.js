import React, { useEffect } from 'react';

const LOG = '[CONTACT PAGE]';

export const ContactPage = () => {
  useEffect(() => {
    console.log(LOG, 'mounted');
  }, []);

  useEffect(() => {
    console.log(LOG, 'updated');
  });

  return (
    <div>
      <h1>Contact</h1>
      <p>You can contact me here.</p>
    </div>
  );
};
