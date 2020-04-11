const core = require("@actions/core");
const fs = require("fs");
const algoliasearch = require("algoliasearch");

const client = algoliasearch("WL4Z3D2OUG", core.getInput("algoliaAdminKey"));
const index = client.initIndex("code-shmode");

try {
	// add/update files
	const newFiles = core.getInput("new-files");
	const updatedFiles = core.getInput("updated-files");

	const data = [];

	const newFileArray = JSON.parse(newFiles);
	const updatedFileArray = JSON.parse(updatedFiles);
	const filesToUpdate = newFileArray.concat(updatedFileArray);

	filesToUpdate.forEach(file => {
		if (
			file.includes(".md") &&
			!file.includes("README.md") &&
			!file.includes("LICENCE.md") &&
			!file.includes("index.md")
		) {
			const objectID = file.replace(".md", "");

			let content = fs.readFileSync(file, "utf8");

			let title = objectID;

			if (content.indexOf("#") !== -1) {
				title = content.substring(content.indexOf("# ") + 2, content.indexOf("\n")).trim();

				content.replace(title, "").trim();
				console.log(content);
			}

			const object = {
				objectID,
				title,
				content
			};
			data.push(object);
		}
	});

	index
		.saveObjects(data)
		.then(success => {
			console.log(success);
		})
		.catch(err => {
			console.log("error adding/updating", err);
		});

	// delete files
	const deletedFiles = core.getInput("deleted-files");
	const deletedFileArray = JSON.parse(deletedFiles);

	const deletedData = [];

	deletedFileArray.forEach(file => {
		const path = file.replace(".md", "");
		const objectID = section + path;

		deletedData.push(objectID);
	});

	index
		.deleteObjects(deletedData)
		.then(success => {
			console.log(success)
		})
		.catch(err => {
			console.log("error deleting", err);
		});
} catch (error) {
	core.setFailed(error.message);
}
