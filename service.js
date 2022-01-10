// jQuery.ajax( url [, settings ] )
// url
// Type: String
// settings
// Type: PlainObject
// const getImagesOld = (pageNumber) => {
// 	const promise = $.ajax(`https://repetitora.net/api/JS/images?page=${pageNumber}&count=1`);
// 	return promise;
// };

const getImages = (pageNumber) => {
	const promise = axios.get(`https://repetitora.net/api/JS/images?page=${pageNumber}&count=1`);
	return promise.then((response) => response.data);
	// axios({
	// 	method: 'get',
	// 	url: `https://repetitora.net/api/JS/images?page=${pageNumber}&count=1`,
	// }).then((response) => response.data
	// });
};

const getTasks = () => {
	const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=400&count=40`);
	return promise.then((response) => response.data);
};

const createTask = (title) => {
	const promise = axios.post(`https://repetitora.net/api/JS/Tasks`, {
		widgetId: 400,
		title: title,
	});
	return promise.then((response) => {
		return response.data;
	});
};

const updateTask = (title, id) => {
	const promise = axios.put(`https://repetitora.net/api/JS/Tasks`, {
		widgetId: 400,
		title: title,
		taskId: id,
	});
	return promise.then((response) => {
		return response.data;
	});
};

const deleteTask = (id) => {
	const promise = axios.delete(`https://repetitora.net/api/JS/Tasks?widgetId=400&taskId=${id}`);
	return promise.then((response) => {
		return response.data;
	});
};
