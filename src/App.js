import './App.css';
import React, { useEffect, useState } from 'react';
import { getUserData, getPostData, getCommentData} from './services/api'
import { useDispatch } from 'react-redux'
import { setUser, getUser } from './redux/actions/userSlice'

function App() {

  const dispatch = useDispatch()
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    handleUserData();
    console.log("userList", userList);
  }, [])
  
  const handleUserData = async() => {
    await getUserData().then(res => dispatch(setUser(res)));
    const data = dispatch(getUser)
    console.log("getUser", data)
    setUserList(dispatch(getUser()));
  }

  return (
    <div className="App">
      {userList}
      {/* {userList?.map((item) => (
       <>{item}</>
      ))} */}
    </div>
  );
}

export default App;