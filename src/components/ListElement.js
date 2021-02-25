import styled from 'styled-components';

const Li = styled.li`
  padding-bottom: 5px;
`;

const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin: 10px;
`;

const ListElement = ({ task, onToggle}) => {
  return (
    <Li>
      <label>
        <Checkbox type="checkbox" checked={task.finished} onChange={() => onToggle(task.id)}/>
        {task.text}
      </label>
    </Li>
  )
}

export default ListElement;