import axios from "axios";
import axiosConfig from "./modules/axiosConfig";
import PageHome from './pages/Home.js'
import UseMouseOrKeyboard from "./modules/UseMouseOrKeyboard";
import DesignSystem from "./DesignSystem/DesignSystem";
import { register } from 'swiper/element/bundle';

// import SvgUse from "./utils/SvgUse";

// Init
GLOBAL.DesignSystem = DesignSystem({})
register()

// Config
axiosConfig({ csrf: GLOBAL.context }, axios)
UseMouseOrKeyboard()

// Pages
PageHome()








console.log({ GLOBAL })
console.log(import.meta.env)


