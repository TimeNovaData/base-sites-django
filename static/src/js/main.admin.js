import PageLogin from './pages/Login'
import UseMouseOrKeyboard from './modules/UseMouseOrKeyboard'
import logs from './utils/logs'
import formErros from './modules/formErros'
import checkbox from './modules/checkbox'

UseMouseOrKeyboard()
formErros()
PageLogin()?.init()
logs()
checkbox()?.init()
