export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13')];

export const server_loads = [];

export const dictionary = {
	"/": [2],
	"/agent-list": [3],
	"/current-member": [4],
	"/deposit": [5],
	"/event-point-list-agent": [7],
	"/event-point-list": [6],
	"/login": [8],
	"/member-bet": [9],
	"/member-list": [10],
	"/mile-change": [11],
	"/mile-profit": [12],
	"/withdraw": [13]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};