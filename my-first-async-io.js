const fs = require('fs');
const filePath = process.argv[2];
const buffuerFile = fs.readFileSync(filePath, 'utf8', (err, data) => {
	const numberLines = buffuerFile.toString().split('\n').length - 1;
	console.log(numberLines);
});
