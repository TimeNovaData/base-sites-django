/** 
 * @param {String} selector  
 * @param {HTMLElement} parent 
 * @returns {HTMLElement | undefined}
 * */
const find = (selector, parent = document) => parent.querySelector(selector)

/** 
 * @param {String} selector 
 * @param {HTMLElement} parent
 * @returns {Array}
 * */
const findAll = (selector, parent = document) => [...parent.querySelectorAll(selector)]




export { find, findAll }
