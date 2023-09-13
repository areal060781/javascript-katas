const { promiseResolve, promiseReject } = require('./promises');
const { getDogs, getCats, getBirds } = require('../../utils/utilPromises');
/**
 * Materials:
 * - https://javascript.info/async-await
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 */

/**
 * TASK-1: Resolve the created earlier promiseResolve() promise
 * using async/await syntax inside the asyncPromiseResolve function
 * and modify the message to -> Resolved! with async await
 * @returns {Promise<"Resolved! with async await">}
 *
 */
async function asyncPromiseResolve() {
  try {
    let result = await promiseResolve();
    result += ' with async await';
    return result;
  } catch (e) {
    console.log('Task 1 error: ', e);
  }
}

/**
 * TASK-2: Reject the created earlier promiseReject() promise
 * using async/await syntax inside the asyncPromiseReject function
 * and modify the message to -> Rejected! with async await
 * @returns {Promise<"Rejected! with async await">}
 */
async function asyncPromiseReject() {
  try {
    await promiseReject();
  } catch (e) {
    let result = e.message + ' with async await';
    return result;
  }
}

/**
 * TASK-3:
 * 1. Get the results array of 3 promises: getDogs(), getCats() and getBirds() from the './utils/utilPromises' file using await syntax;
 * 2. Modify the array ['dogs', 'cats', 'birds'] -> ['DOGS', 'CATS', ''BIRDS]
 * 3. Return the modified array
 * @returns {Promise<"['DOGS', 'CATS', 'BIRDS']">}
 */
async function asyncPromiseAll() {
  try {
    let result = await Promise.all([getDogs(), getCats(), getBirds()]);
    return result.map(animal => animal.toUpperCase());
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  asyncPromiseResolve,
  asyncPromiseReject,
  asyncPromiseAll,
};