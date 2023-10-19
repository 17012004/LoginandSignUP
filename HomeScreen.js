import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import "./Homescreen.css";
function HomeScreen() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout functionality here (e.g., clear user session)
    // After logout, navigate the user to the login page
    navigate('/');
  };

  const buttons = [
    { id: 1, text: 'Button 1' },
    { id: 2, text: 'Button 2' },
    { id: 3, text: 'Button 3' },


  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to University Homepage</h1>

      <Card.Group itemsPerRow={3}>
        {buttons.map((button) => (
          <Card key={button.id}>
            <Card.Content>
              <Card.Header>{button.text}</Card.Header>
              <Card.Description>
                {/* Add button click functionality here */}
                <Button primary>Click me</Button>
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>

      <Button color="red" style={{ marginTop: '20px' }} onClick={handleLogout}>
        Log Out
      </Button>
    </div>
  );
}

export default HomeScreen;
