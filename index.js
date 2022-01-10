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
		const btn = document.createElement('button');
		const span = document.createElement('span');
		btn.innerHTML = '✖';
		span.innerText = task.title;
		li.dataset.id = task.id;
		li.appendChild(btn);
		li.appendChild(span);
		resultTasksBlock.appendChild(li);
	});
};

const onTaskCreated = () => {
	inputAdd.value = '';
	const promise = getTasks();
	promise.then(onTasksReceived);
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
	const text = inputAdd.value;
	const promise = createTask(text);
	promise.then(onTaskCreated);
});
