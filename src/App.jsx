import React, { useState } from "react";

import ContactList from "./components/ContactList/ContactList";
import SingleUserDetails from "./components/SingleUserDetails/SingleUserDetails";

function App() {
  const [featuredUser, setFeaturedUser] = useState(null);
  return (
    <>
      {featuredUser ? (
        <SingleUserDetails 
          setFeaturedUser={setFeaturedUser} 
          featuredUser={featuredUser}
        />
      ) : (
        <ContactList setFeaturedUser={setFeaturedUser} />
      )}
    </>
  );
}

export default App;
