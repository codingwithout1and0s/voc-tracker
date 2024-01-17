import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useAdminTitle } from '../Contexts/AdminTitleContext';
function AgentSettings() {
  const { setTitle } = useAdminTitle();

  useEffect(() => {
    setTitle("Agent Settings");
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
            <Select>
            {agentArray.map((agent, index) => {
                return <Option key={index}>{agent.name}</Option>
            })}
            </Select>
          </div>
        </Container>
    </section>
  );
}

  export default AgentSettings
  