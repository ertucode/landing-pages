export type IMonthlyCard = {
	title: string;
	date: Date;
	tags: string[];
	author: {
		name: string;
		imgSrc?: string;
	};
};
