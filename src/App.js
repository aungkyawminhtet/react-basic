import Header from './components/Header';
import Add from './components/Add';
import Card from './components/Card';
import { useEffect, useState } from 'react';

function App() {

  let [users, setUsers] = useState([]);
  let [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
    .then(res => res.json())
    .then(users => {
      let rawUsers = users.results;
      let filterUser = rawUsers.map(usr => {
        return {
          uuid : usr.login.uuid,
          name : `${usr.name.title} ${usr.name.first} ${usr.name.last}`,
          phone : usr.phone,
          cell : usr.cell,
          image: usr.picture.thumbnail,
        }
      })
      setUsers(filterUser);
    })
    .then(err => console.log(err))
  },[])

  // console.log(users);
  const removeUser = (uuid) => {
    let remainUser = users.filter(usr => usr.uuid != uuid);
    setUsers(remainUser);
  }

  const showFormHangler = () => {
    setShowForm(!showForm);
  }

  const addUser = (user) => {
    let newuer = [user, ...users];
    setUsers(newuer);
  }

  return (
     <main>
      <Header />
      <div className='container mt-3'>
        {showForm && <Add  add = {addUser}/>}
        <button className='btn btn-primary mb-3' onClick={showFormHangler}>Add User</button>
        {
          users.map(usr => <Card key={usr.uuid} user = {usr} remove = {removeUser} />)
        }
      </div>
     </main>
  );
}

export default App;
