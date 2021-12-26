var fs = require('fs');

fs.readdir(process.argv[2], function (err, list) {
	if (err) {
		console.log(err);
	} else {
		list.forEach(function (fileName) {
			if (process.argv[2].extname(fileName) === '.' + process.argv[3]) {
				console.log(fileName);
			}
		});
	}
});
