import { useState, useEffect } from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import { useAdminTitle } from '../Contexts/AdminTitleContext'
import axios from 'axios';

function Settings() {
  const { setAdminTitle } = useAdminTitle();

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    await axios.get('http://localhost:8080/api/')
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const deleteUser = async (id) => {
    try {
      const { data } = await axios.delete(`http://localhost:8080/api/{id}`);
      setUsers(users.filter(users => users.id !== id));
      console.log("All users", data);
    } catch (error) {
      console.log("Caught error: ", error);
    }
  }

  useEffect(() => {
    setAdminTitle("Settings");
    getUsers();
  }, [])

  const [editMode, setEditMode] = useState(false);

  return (
    <section id="settings">
      <Container fluid>
          <div id="agent-list-box">
          <p>Agent List</p>

          <ListGroup className="d-flex flex-column">
            {users.map((agent, index) => {
                return <ListGroup.Item key={index} className='d-flex flex-row'>
                {agent.firstName + " " + agent.lastName} <br />
                {editMode ?  <input type='text' placeholder={agent.login} className='mx-5'/>: <p className='mx-5'>{agent.login}</p>}
                <button className="btn btn-danger mx-5" onClick={() => {
                  setEditMode(current => !current)}}>Edit</button>
                <button className="mx-5">Reset Password</button>
                <button onClick={()=> deleteUser(agent.id)}>X</button>
              </ListGroup.Item>
            })}
          </ListGroup>
          </div>
        </Container>
    </section>
  );
}

export default Settings

