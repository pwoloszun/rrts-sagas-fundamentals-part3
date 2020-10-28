import DataApiService from './data-api.service';
import { Todo } from './models/todo.model';

const url = `/api/todos`;

const api = new DataApiService<Todo>(url);

export default api;
