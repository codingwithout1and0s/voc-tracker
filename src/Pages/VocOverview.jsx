import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useAdminTitle } from '../Contexts/AdminTitleContext'

function VocOverview() {
  const { setAdminTitle } = useAdminTitle();

  useEffect(() => {
    setAdminTitle("VOC Overview");
  }, [])

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
            <select>
              <option disabled selected="selected">Select an Agent</option>
              {agentArray.map((agent, index) => {
                return <option key={index}>{agent.name}</option>
              })}
            </select>
          </div>
        </Container>
    </section>
  );
}

  export default VocOverview
  