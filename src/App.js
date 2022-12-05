import React, { useEffect, useState } from "react";
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { usersAction } from "./redux/actions/usersAction";
import { userByIdAction } from "./redux/actions/userByIdAction";

function App() {
  const [formData, setFormData] = useState({
    id: "",
  });

  const { id } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(userByIdAction(id));
  }

  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.users);
  const userByIdData = useSelector((state) => state.userbyid);

  useEffect(() => {
    dispatch(usersAction());
  }, [dispatch]);

  const Users = () => {
    return (
      <>
        {
          usersData.users.map((e) => (
            <div key={e.id}>
              <p>{e.id} {e.name}</p>
            </div>
          ))
        }
      </>
    )
  }

  const User = () => {
    return (
      <>
        <p>{userByIdData.user.id} {userByIdData.user.name}</p>
      </>
    )
  }
  return (

    <div className="App" >
      <h1>Redux Thunk API Call</h1>
      {usersData.loading ? (
        <h2>Loading...</h2>
      ) : usersData.error ? (
        <h2>Error</h2>
      ) : (
        <>
          <div className="all_users">
            <h2>All Users</h2>
            {Users()}
          </div>
        </>
      )
      }
      
      {userByIdData.loading ? (
        <h2>Loading...</h2>
      ) : userByIdData.error ? (
        <h2>Error</h2>
      ) : (
        <>
          <div className="user_by_id">
            <h2>Get User By Id</h2>
            <form onSubmit={(e) => onSubmit(e)}>
              <p>Please enter Id between 1 to 10</p>
              <input placeholder="Enter Id" type="number" name='id' value={id} onChange={(e) => onChange(e)}></input>
              &nbsp;
              <button type="submit">Get User</button>
            </form>
            {User()}
          </div>
        </>
      )
      }
    </div >
  );
}

export default App;
