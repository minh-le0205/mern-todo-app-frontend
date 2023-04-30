import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import TaskItem from './TaskItem';
import classes from './TaskList.module.scss';

function TaskList() {
	const [taskList, setTaskList] = useState([]);
	const [isAddingNew, setIsAddingNew] = useState(false);
	const [newTask, setNewTask] = useState('');

	const addNewTask = async e => {
		e.preventDefault();
		if (newTask.length <= 0) {
			return toast.error('Task is empty');
		}

		try {
			const { data } = await axios.post('/api/v1/tasks', {
				title: newTask,
			});
			toast.success('New Task created successfully');
			setTaskList([{ ...data }, ...taskList]);
			setNewTask('');
			setIsAddingNew(false);
		} catch (err) {
			console.log(err);
		}
	};

	const getTasks = async () => {
		try {
			const { data } = await axios.get('/api/v1/tasks/my-tasks');
			setTaskList(
				data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
			);
		} catch (err) {
			console.error(err);
		}
	};
	const addNewButtonClick = async () => {
		setIsAddingNew(!isAddingNew);
	};

	useEffect(() => {
		getTasks();
	}, []);

	const deleteTask = async id => {
		try {
			await axios.delete(`/api/v1/tasks/${id}`);
			toast.success('Task deleted successfully');
			setTaskList(taskList.filter(task => task._id != id));
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div>
			<div className={classes.topBar}>
				<button
					type="button"
					className={classes.addNew}
					onClick={addNewButtonClick}
				>
					Add new
				</button>
			</div>
			{isAddingNew && (
				<form className={classes.addNewForm} onSubmit={addNewTask}>
					<input
						type="text"
						value={newTask}
						onChange={e => setNewTask(e.target.value)}
						placeholder="Task Title"
					/>
					<button type="submit">Add</button>
				</form>
			)}
			{taskList.length > 0 ? (
				<table className={classes.taskList_table}>
					<tbody>
						{taskList.map(task => (
							<TaskItem
								task={task}
								deleteTask={deleteTask}
								key={task.id}
							></TaskItem>
						))}
					</tbody>
				</table>
			) : (
				'No Task Found'
			)}
		</div>
	);
}

export default TaskList;
