// import dynamic from "next/dynamic";
// import ParentHOC from "../components/ParentHOC";
// import HomeHorizontal from "../components/pages/home-horizontal";
// import { useEffect, useState } from "react";
// import { PopUp } from "../components/PopUp";
// const index = () => {
//   useEffect(() => {
//     localStorage.setItem('popupShown', false);
//     const handleBeforeUnload = () => {
//       localStorage.setItem('popupShown', false);
//     };
//     window.addEventListener('beforeunload', handleBeforeUnload);
//     return () => {
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, []);

//      const pageTitle = "Sir Syed Kazim Ali";
//      const description = "Read what our students have to say about their experience with our coaching services.";
//      const keywords = "student reviews, coaching, essay writing";
//      const image = "https://syedkazimali.info/img/hero/kazim.jpg"; 



//   return (
//     <ParentHOC
//       authorizedIgnored={true}
//       pageTitle={pageTitle} 
//       description={description} 
//       keywords={keywords} 
//       image={image}>
//       <HomeHorizontal />
      
//     </ParentHOC>
//   );
// };

// export default dynamic(() => Promise.resolve(index), { ssr: false });

import ParentHOC from "../components/ParentHOC";
import HomeHorizontal from "../components/pages/home-horizontal";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    localStorage.setItem('popupShown', false);
    const handleBeforeUnload = () => {
      localStorage.setItem('popupShown', false);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

    const pageTitle = "Sir Syed Kazim Ali";
    const description = "Read what our students have to say about their experience with our coaching services.";
    const keywords = "student reviews, coaching, essay writing";
    const image = "https://syedkazimali.info/img/hero/kazim.jpg";

  return (
    <ParentHOC
      authorizedIgnored={true}
      pageTitle={pageTitle} 
      description={description} 
      keywords={keywords} 
      image={image}
    >
      <HomeHorizontal />
    </ParentHOC>
  );
};

export default Index;
