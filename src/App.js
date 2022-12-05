import React, { useEffect } from "react";
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../src/redux/actions/userAction";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, users, error } = userList;

  useEffect(() => {
    dispatch(userAction());
  }, [dispatch]);
  
  const Users = () => {
    return (
      <>
      {
        users.map((e)=> (
          <p>{e.name}</p>
        ))
      }
      </>
    )
  }
  return (

    <div className = "App" >
      <h1>Redux Thunk API Call</h1>
      { loading ? (
    <h2>Loading...</h2>
  ) : error ? (
    <h2>Error</h2>
  ) : (
    <>
    {Users()}
    </>
  )
}
    </div >
  );
}

export default App;
