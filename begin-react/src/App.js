import React, {useRef} from 'react';
import UserList from './UserList';


function App() {
  const users = [
    {
        id: 1,
        username: 'hwimin',
        email: 'gnlals@gmail.com'
    },
    {
        id: 2,
        username: 'homer',
        email: 'homer@gmail.com'
    },
    {
        id: 3,
        username: 'barth',
        email: 'barth@gmail.com'
    },
  ];
  
  const nextId = useRef(4);

  const onCreate = () => {
    console.log(nextId.current);
    nextId.current += 1;
  };

  return (
    <UserList users={users} />
  );
}

// Hello.defaultProps = {
//   name: "이름없음",
// };

export default App;
