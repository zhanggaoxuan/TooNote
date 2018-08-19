import EventEmitter from 'events';

const eventHub = new EventEmitter();
export default eventHub;

export const EVENTS = {
	// 笔记
	NOTE_CREATED: 'NOTE_CREATED',
	NOTE_CHANGED: 'NOTE_CHANGED',
	NOTE_DELETED: 'NOTE_DELETED',
	NOTE_CONTENT_CHANGED: 'NOTE_CONTENT_CHANGED',

	// 分类
	CATEGORY_CREATED: 'CATEGORY_CREATED',
	CATEGORY_CHANGED: 'CATEGORY_CHANGED',
	CATEGORY_DELETED: 'CATEGORY_DELETED',

	// 笔记本
	NOTEBOOK_CREATED: 'NOTEBOOK_CREATED',
	NOTEBOOK_CHANGED: 'NOTEBOOK_CHANGED',
	NOTEBOOK_DELETED: 'NOTEBOOK_DELETED',

	// 任务
	TASK_RUN: 'TASK_RUN',
	TASK_FINISH: 'TASK_FINISH',

	// 用户
	USER_LOGIN: 'USER_LOGIN'
};
