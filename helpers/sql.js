const { BadRequestError } = require("../expressError");

function sqlForPartialUpdate(dataToUpdate, jsToSql) {
	// Convert the keys of the data into an array
	const keys = Object.keys(dataToUpdate);
	// If there is no data, it means the array is empty. Throw an error
	if (keys.length === 0) throw new BadRequestError("No data");

	// {firstName: 'Aliya', age: 32} => ['"first_name"=$1', '"age"=$2']
	const cols = keys.map(
		(colName, idx) => `"${jsToSql[colName] || colName}"=$${idx + 1}`
	);

	return {
		setCols: cols.join(", "),
		values: Object.values(dataToUpdate),
	};
}

module.exports = { sqlForPartialUpdate };
