/** 
* @param {string} {csrf} TOkEN 
* @param {object} instance - axios or api instance
*/
export default function ({ csrf }, instance) {
	instance.defaults.xsrfCookieName = 'csrftoken'
	instance.defaults.xsrfHeaderName = "X-CSRFTOKEN"
	instance.defaults.headers.post['X-CSRFTOKEN'] = csrf;
}