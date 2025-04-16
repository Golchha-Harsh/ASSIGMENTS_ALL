import { useEffect, useState } from 'react';

function useDetectBrowser() {
  const [browser, setBrowser] = useState('Unknown');

  useEffect(() => {
    const userAgent = navigator.userAgent;//accessing browser global object sideeffect
    //why !userAget.includes('edg') what is happening when i am in edge it stills giving me chrome because in edg i have inuilt chrome string and edg too so it falsly identify string chrome and tells browser as chrome
    if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) {
      setBrowser('Chrome');
    } else if (userAgent.includes('Firefox')) {
      setBrowser('Firefox');
    } else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
      setBrowser('Safari');
    } else if (userAgent.includes('Edg')) {
      setBrowser('Edge');
    } else {
      setBrowser('Other');
    }
  }, []);

  return browser;
}

export default useDetectBrowser;
