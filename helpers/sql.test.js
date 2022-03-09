const { sqlForPartialUpdate } = require("./sql");

describe("Take in data to update and js to convert to sql", function () {
	test("should return object with setCols and values as keys", () => {
		const result = sqlForPartialUpdate(
			{ firstName: "Aliya", age: 32 },
			{
				numEmployees: "num_employees",
				logoUrl: "logo_url",
			}
		);
		expect(result).toEqual({
			setCols: '"firstName"=$1, "age"=$2',
			values: ["Aliya", 32],
		});
	});
});
