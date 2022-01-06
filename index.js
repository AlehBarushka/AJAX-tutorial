const resultImagesBlock = document.querySelector('#images-result');
const resultTasksBlock = document.querySelector('#tasks-result');
const getImagesButton = document.querySelector('#get-images');
const getTasksButton = document.querySelector('#get-tasks');
const createTaskButton = document.querySelector('#create-tasks');

const pageNumber = document.querySelector('#page-number');
const inputAdd = document.querySelector('#add-task');

const onImagesReceived = (imagesData) => {
	imagesData.forEach((image) => {
		const img = document.createElement('img');
		img.src = image.thumbnail;
		resultImagesBlock.appendChild(img);
	});
};

const onTasksReceived = (tasksData) => {
	resultTasksBlock.innerHTML = '';
	tasksData.forEach((task) => {
		const li = document.createElement('li');
		const btn = document.createElement('input');
		li.innerHTML = task.title;
		btn.type = 'button';
		btn.value = 'delete';
		btn.id = task.id;
		resultTasksBlock.appendChild(li);
		resultTasksBlock.appendChild(btn);
		btn.addEventListener('click', () => {
			deleteTask(task.id);
		});
	});
};

const onTaskCreated = (taskText) => {
	inputAdd.value = '';
	const li = document.createElement('li');
	const btn = document.createElement('input');
	li.innerHTML = taskText;
	btn.type = 'button';
	btn.value = 'delete';
	btn.id = task.id;
	resultTasksBlock.appendChild(li);
	resultTasksBlock.appendChild(btn);
	btn.addEventListener('click', () => {
		deleteTask(task.id);
	});
};

getImagesButton.addEventListener('click', () => {
	const promise = getImages(pageNumber.value);
	promise.then(onImagesReceived);
});

getTasksButton.addEventListener('click', () => {
	const promise = getTasks();
	promise.then(onTasksReceived);
});

createTaskButton.addEventListener('click', () => {
	const taskText = inputAdd.value;
	const prpmise = createTask(taskText);
	prpmise.then(onTaskCreated(taskText));
});
