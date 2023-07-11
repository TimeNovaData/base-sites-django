/** @param {String} selector  
 * @param {HTMLElement} parent 
 * */
const find = (selector, parent = document) => parent.querySelector(selector)

/** @param {String} selector 
 * @param {HTMLElement} parent
 * */
const findAll = (selector, parent = document) => parent.querySelectorAll(selector)




export { find, findAll }
