import {useState} from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import ListElement from './components/ListElement'

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

const List = styled.ul`
  color: white;
  font-size: 21px;
  list-style-type: none;
  padding-left: 0;
`;

const Notification = styled.div`
  background-color: #E85F94;
  color: black;
  font-size: 24px;
  border-radius: 5px;
  padding: 10px 15px;
`;

const initialTasks = [{
  id: uuidv4(),
  text: 'Zrobić sobie przerwę na kawę #self-care',
  finished: false,
}];

function MyApp() {
  const [tasks, setTasks] = useState(initialTasks);

  const shouldShowNotification = tasks.filter(elem => !elem.finished).length === 0;

  const addNewTask = (value) => {
    const newTask = {
      id: uuidv4(),
      text: value,
      finished: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleToggle = (id) => {
    const newTasks = tasks.map(elem => ({
      ...elem,
      finished: elem.id === id ? !elem.finished : elem.finished
    }));
    setTasks(newTasks);
  };

  return (
    <App>
      <Container>
        <Title>System do zarządania zadaniami dla asystentek</Title>
        <NewTaskInput onAddNewTask={addNewTask}/>
        <Title>Plan na dziś:</Title>
        {
          shouldShowNotification ? (
            <Notification>Wszystkie zadania na dziś skończone</Notification>
          ) :
          (
            <List data-cy="tasksList">
              {
                tasks.map(task => (
                  <ListElement key={task.id} task={task} onToggle={handleToggle}/>
                ))
              }
            </List>
          )}
      </Container>
    </App>
  );
}

export default MyApp;
