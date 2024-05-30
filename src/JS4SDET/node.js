/**
* TASK-1: Fetch method
* 1. You need to make a GET request (via async/await) to the resource: https://jsonplaceholder.typicode.com/posts
* using fetch method inside the sendRequest function
* DOCS:
* 		fetch (JSON example): https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
* 		async/await: https://javascript.info/async-await
* 		async/await: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
*
* 2. Save the payload of the response to "./response.json" (to the current directory!) file with only items which id less than 20.
* Use the promisified version of FS module.
* DOCS:
* 		fs.writeFile: https://nodejs.org/docs/latest-v16.x/api/fs.html#fspromiseswritefilefile-data-options
*
* 3. Check yourself by running "npm run test:dev"
*/
const fs = require('fs/promises');
const path = require('path');

/**
* Run fetch method inside the function
* Use the fs.writeFile method inside the function
*/
const sendRequest = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    const filtered = data.filter(item => item.id < 20);
    if (filtered.length > 0) {
      await fs.writeFile(path.join(__dirname, 'response.json'), JSON.stringify(filtered));
    }
  } catch (e) {
    console.log(e);
    throw e
  }
};

/**
* TASK-2: JSON Parser
* 1. You need to write a parser, which takes the "../utils/test.json" file
* and will create a new JSON file with the name "./parsed.json" (in current directory!) with the structure:
* [
*  {
*    "docId": "http://doc.epam.com/077b1523-56f0-492a-b954-1269e3acc191"
*  },
*  {
*    "docId": "http://doc.epam.com/077d3a4c-a2fe-4ab9-9046-89c0ce5c5b38"
*  }
*  .....
* ]
* where 077b1523-56f0-492a-b954-1269e3acc191 - is the value of the name attribute from the "./test.json" file
* Please NOTE, that you should omit the ".html" extension
*
* Use the promise version of FS module.
* DOCS:
* 		fs.readFile: https://nodejs.org/docs/latest-v16.x/api/fs.html#fspromisesreadfilepath-options
* 		fs.writeFile: https://nodejs.org/docs/latest-v16.x/api/fs.html#fspromiseswritefilefile-data-options
*
* 2. Check yourself by running "npm run test:dev"
*
*/

const jsonParser = async () => {
  try {
    const file = await fs.readFile(path.join(__dirname, 'utils/test.json'));
    const parsedFile = JSON.parse(file);

    let result = parsedFile.list.entries.map(e => {
      return { docId: 'http://doc.epam.com/' + e.entry.name.slice(0, e.entry.name.length - 5) };
    });

    await fs.writeFile(path.join(__dirname, 'parsed.json'), JSON.stringify(result));
  } catch (e) {
    console.log(e);
  }
};



module.exports = {
  sendRequest,
  jsonParser
};