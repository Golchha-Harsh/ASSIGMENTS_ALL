// import React from "react";
// import useWindowWidth from "./hooks/useWindowWidth";
// import useIsMobile from "./hooks/useIsMobile";
// import useIsDesktop from "./hooks/useIsDesktop";
// function App() {
//   const width = useWindowWidth();
//   const isMobile = useIsMobile();
//   const isDesktop = useIsDesktop();

//   return (
//     <div>
//       <h1>Window Width: {width}px</h1>
//       <p>{isMobile && "You are on a mobile device 📱"}</p>
//       <p>{isDesktop && "You are on a desktop 🖥️"}</p>
//     </div>
//   );
// }

// export default App;
// App.js
import React from 'react';
import useFetch from './hooks/useFetch';

function App() {
  const { data, loading, error, refetch, refetching } = useFetch('https://jsonplaceholder.typicode.com/posts/1');

  return (
    <div>
      <h1>Fetch Example</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data && (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}

      <button onClick={refetch} disabled={refetching}>{refetching ? 'Refetching...' : 'Refetch'}</button>
    </div>
  );
}

export default App;

