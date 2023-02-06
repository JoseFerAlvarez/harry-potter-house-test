import React from 'react';
import Test from "./views/Test";
import { useAppSelector } from './app/hooks';
import UserForm from './views/UserForm';

function App() {
  const { user } = useAppSelector((state) => state.user);

  return (
    <div className="App">
      {!user.name.length ? <UserForm></UserForm> : <Test></Test>}
    </div>
  );
}

export default App;
