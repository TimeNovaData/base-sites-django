import axios from 'axios'
import axiosConfig from './modules/axiosConfig'
import PageHome from './pages/Home.js'
import PageDsSections from './pages/ds_sections.js'
import PageLogin from "./pages/Login";
import UseMouseOrKeyboard from "./modules/UseMouseOrKeyboard";
import DesignSystem from "./DesignSystem/DesignSystem";
import { register } from 'swiper/element/bundle';
import logs from "./utils/logs";
import ripple from "./modules/ripple";
import formErros from "./modules/formErros";
import animaAoScroll from "./animation/animaAoScroll";
import animateSetup from "./animation/animateSetup";
import animationNumbers from './pages/counter';

// import SvgUse from "./utils/SvgUse";

// Init
GLOBAL.DesignSystem = DesignSystem({})
register() // Swiper Web Component

// Config
axiosConfig({ csrf: GLOBAL.context?.csrf }, axios)
UseMouseOrKeyboard()
ripple()
formErros()
animateSetup()
animaAoScroll()
animationNumbers()
// Pages
PageHome()
PageDsSections()
PageLogin()?.init()

// utils logs
logs()

