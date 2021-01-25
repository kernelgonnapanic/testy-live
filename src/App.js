import {useState} from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import NewTaskInput from './components/NewTaskInput';

const App = styled.div`
  background-color: #635995;
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const Container = styled.div`
  padding: 100px 20px 0 ;
`;

const Title = styled.h1`
  color: white;
  text-decoration: underline;
`;

const List = styled.ol`
  color: white;
  font-size: 21px;
`;

const ListElement = styled.li`
  padding-bottom: 5px;
`;

function MyApp() {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (value) => {
    const newTask = {
      id: uuidv4(),
      text: value
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <App>
      <Container>
        <Title>System do zarządania zadaniami dla asystentek</Title>
        <NewTaskInput onAddNewTask={addNewTask}/>
        <Title>Plan na dziś:</Title>
        <List>
          {
            tasks.map(task => (
              <ListElement key={task.id}>{task.text}</ListElement>
            ))
          }
        </List>
      </Container>
    </App>
  );
}

export default MyApp;
