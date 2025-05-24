import React, { useEffect, useState } from 'react';

function App() {
  const [keyCount, setKeyCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('http://localhost:3000/data')  // or your actual backend URL

      .then(response => response.json())
      .then(data => {
        setKeyCount(data.keyCount);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Key Count</h1>
      {keyCount !== null ? <p>{keyCount}</p> : <p>Loading...</p>}
    </div>
  );
}

export default App;
