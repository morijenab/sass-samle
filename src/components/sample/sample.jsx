import React, { useContext, useEffect } from "react";
import State from "../../context/context";


const Simple = () => {
  const { state, setUser } = useContext(State);
  const { user, userRole } = state;
  console.log("user", user);
  useEffect(() => {
    const temp = { ...user };
    temp.name = "eli";
    setUser(temp);

  }, []);
  return (
    <>
      <h1>{user.name}</h1>
    </>
  );
};
export default Simple;
