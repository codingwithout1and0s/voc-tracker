import { useState, useEffect } from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import { useAdminTitle } from '../Contexts/AdminTitleContext';

function SLSettings() {
  const { setTitle } = useAdminTitle;

  useEffect(() => {
    setTitle("SLs Settings");
  }, [])

  const [editMode, setEditMode] = useState(false);

  const agentArray = [
    {"name": "Mike", "email": "mike@examples.com"},
    {"name": "Jane", "email": "jane@examples.com"},
    {"name": "Phil", "email": "phil@examples.com"},
    {"name": "Harry", "email": "harry@examples.com"},
    {"name": "Scarlet", "email": "scarlet@examples.com"},
    {"name": "George", "email": "george@examples.com"}];

  return (
    <section id="agent-settings">
      <Container fluid>
          <div id="agent-list-box">
          <p>Agent List</p>

          <ListGroup className="d-flex flex-column">
            {agentArray.map((agent, index) => {
                return <ListGroup.Item key={index} className='d-flex flex-row'>
                {agent.name} <br />
                {editMode ?  <input type='text' placeholder={agent.email} className='mx-5'/>: <p className='mx-5'>{agent.email}</p>}
                <button className="btn btn-danger mx-5" onClick={() => {
                  setEditMode(current => !current)}}>Edit</button>
                <button className="mx-5">Reset Password</button>
              </ListGroup.Item>
            })}
          </ListGroup>
          </div>
        </Container>
    </section>
  );
}

export default SLSettings

