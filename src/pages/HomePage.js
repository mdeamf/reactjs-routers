import React, { useEffect } from 'react';

const LOG = '[HOME PAGE]';

export const HomePage = () => {
  useEffect(() => {
    console.log(LOG, 'mounted');
  }, []);

  useEffect(() => {
    console.log(LOG, 'updated');
  });

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to my Router example!</p>
    </div>
  );
};
