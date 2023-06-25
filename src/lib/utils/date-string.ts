const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } as const;

export const dateString = (date: Date) => {
	return 'on ' + date.toLocaleDateString('en-US', dateOptions);
};
