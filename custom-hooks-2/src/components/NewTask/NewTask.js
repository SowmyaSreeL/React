import useHTTP from '../hooks/use-http';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {

  const createTask = (taskText, data) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
  }
  const {isLoading, error, sendRequest: fetchTasks} = useHTTP();

  const enterTaskHandler = async (taskText) => {
    fetchTasks({
      url: 'https://react-http-58ceb-default-rtdb.firebaseio.com/tasks.json',
        method: 'POST',
        body: JSON.stringify({ text: taskText }),
        headers: {
          'Content-Type': 'application/json',
        },
    }, createTask.bind(null, taskText))
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
