import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//modelos
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
//estilos
import '../../styles/task.scss';

const TaskComponent = ({ task, complete, remove }) => {

  useEffect(() => {
    console.log('Created Task');
    return () => {
      console.log(`Task: ${task.name} is going to unmount`);
    }
  }, [task])

  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-primary'>
              {task.level}
            </span>
          </h6>
        )
      case LEVELS.URGENTE:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-warning'>
              {task.level}
            </span>
          </h6>
        )
      case LEVELS.BLOCKING:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-danger'>
              {task.level}
            </span>
          </h6>
        )
      default:
        break;
    }
  }

  /**
   * Function that return icon depending on completion of task
   */
  function taskIconCompleted() {
    if(task.completed){
      return (<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>) 
    } else {
      return (<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{color: 'gray'}}></i>)
    }
  }

  const taskCompleted = {
    color: 'gray',
    fontWeight: 'bold',
    textDecoration: 'Line-through'
  }

  const taskPending = {
    color: 'tomato',
    fontWeight: 'bold',
  }

  return (
      <tr className='fw-normal' style={task.completed ? taskCompleted : taskPending}>
        <th>
          <span className='ms-2'>{ task.name }</span>
        </th>
        <td className='align-middle'>
          <span>{ task.description }</span>
        </td>
        <td className='align-middle'>
          {/* Execution of function to return badge Element */}
          {taskLevelBadge()}
        </td>
        <td className='align-middle'>
          {/* Execution of function to return icon depending on completion */}
          { taskIconCompleted() }
          <i className='bi-trash task-action' style={{color: 'tomato'}} onClick={() => remove(task)}></i>
          {/* <span>{ task.completed ? 'Completed' : 'Pending' }</span> */}
        </td>
      </tr>
  );
};


TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};


export default TaskComponent;
