// hooks/useFetch.js
import { useState, useEffect, useCallback, useRef } from 'react';
//Importing 4 Hooks usestate to track loading error fetch data useEffect to run side effects 
//fetching data when URL Changes useCallback to memorize function fetch data useRef to 
//persist value across various renders
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);//initially loading is setting as true we track fetching data progress
  const [error, setError] = useState(null);//Stores any error during fetch
  const [refetching, setRefetching] = useState(false);

  const controllerRef = useRef(null); // stores the Abort Controller instance so we can cancel ongoing req if needed
  const urlRef = useRef(url); // keeps a refrence to current url across renders various

  //useCallback avoid recreating it when triggers rerender
  const fetchData = useCallback(async (isRefetch = false) => {
    if (isRefetch) {
      setRefetching(true);
    } else {
      setLoading(true);
    }
    // setLoading(true);
    setError(null); //clears previous error if I have from previous req
    controllerRef.current = new AbortController(); //creating new AbortController to handle canceling the fetch.
    const signal = controllerRef.current.signal;//Extracting signal from controller ref then passing into the fetch

    try {
      const response = await fetch(urlRef.current, { signal }); //Ref.current to ensure we use the latest URL attaching signal so we can cancel the req when we wants

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {//This block whenever there is server error network error other than intentionally stops fetch we will set error state
      if (err.name !== 'AbortError') {
        setError(err.message || 'Something went wrong');
      }
    } finally {
      setLoading(false);
      setRefetching(false);
    }
  }, []); 
  //Triggers Fetch On Mount and when Url changes
  useEffect(() => {
    urlRef.current = url;  // update ref if URL changes so we have current updated URL
    fetchData(); //Fetch Data Func
    //Cancel previous Req If re render component unmount and URL CHANGES
    return () => {
      if (controllerRef.current) {
        controllerRef.current.abort(); // cancel fetch on unmount OR IF URL CHANGES
      }
    };
  }, [url, fetchData]);

  const refetch = () => {
    fetchData(true); //pssing exporting Refetch function as a refresh or to refetch
  };

  return { data, loading, error, refetch, refetching };
}

export default useFetch;
