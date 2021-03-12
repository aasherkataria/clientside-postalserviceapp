import React, { useState } from "react";

const PackageContext = React.createContext([{}, () => {}]);

const PackageProvider = (props) => {
  const [state, setState] = useState({});
  return (
    <PackageContext.Provider value={[state, setState]}>
      {props.children}
    </PackageContext.Provider>
  );
};

export { PackageContext, PackageProvider };