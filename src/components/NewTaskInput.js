import {useState} from 'react';
import styled from 'styled-components';

import validateTask from '../validators/taskValidator';

const InputSection = styled.div`
  display: flex;
  flex: 1;
  padding-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
`;

const Button = styled.button`
  width: 200px;
`;

const Error = styled.span`
  color: #291C6E;
  font-weight: bold;
`;

const NewTaskInput = ({onAddNewTask}) => {
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState(null);

  const handleClick = () => {
    const validationResult = validateTask(newTask);
    if (!validationResult.valid) {
      setError(validationResult.message);
      return;
    }
    onAddNewTask(newTask);
    setNewTask('');
    setError(null);
  }

  return (
    <>
      <InputSection>
        <Input placeholder="Wpisz treść zadania" value={newTask} onChange={e => setNewTask(e.target.value)}></Input>
        <Button onClick={handleClick}>Dodaj zadanie</Button>
      </InputSection>
      <Error>{error}</Error>
    </>
  );
}

export default NewTaskInput;