import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Zephyr Programs API!</h1>
      <p>
        Explore the API documentation{' '}
        <a href="/api/docs" target="_blank" rel="noopener noreferrer">
          here
        </a>.
      </p>
    </div>
  );
};

export default Home;
