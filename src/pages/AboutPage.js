import React, { useEffect } from 'react';

const LOG = '[ABOUT PAGE]';

export const AboutPage = () => {
  useEffect(() => {
    console.log(LOG, 'mounted');
  }, []);

  useEffect(() => {
    console.log(LOG, 'updated');
  });

  return (
    <div>
      <h1>About</h1>
      <p>This is a page about me. You can learn all about me here!</p>
    </div>
  );
};
