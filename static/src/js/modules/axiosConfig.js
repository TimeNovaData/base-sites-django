/** 
* @param {string} csrf_token 
* @param {object} instance - axios or api instance
*/
export default function (csrf_token, instance) {
    instance.defaults.xsrfCookieName = 'csrftoken'
    instance.defaults.xsrfHeaderName = "X-CSRFTOKEN"
    instance.defaults.headers.post['X-CSRFTOKEN'] = csrf_token;
}