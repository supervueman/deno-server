export interface UserI {
	id: string;
	name: string;
}

export interface CtxI {
	response: any;
	params?: {
		id: string;
	};
}
