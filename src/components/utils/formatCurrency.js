const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD'
});
export default ({ value }) => formatter.format(value);
