import axios from "axios";
import axiosConfig from "./modules/axiosConfig";
import PageHome from './pages/Home.js'
import UseMouseOrKeyboard from "./modules/UseMouseOrKeyboard";
import DesignSystem from "./DesignSystem/DesignSystem";
import { register } from 'swiper/element/bundle';
import logs from "./utils/logs";
import ripple from "./modules/ripple";

// import SvgUse from "./utils/SvgUse";

// Init
GLOBAL.DesignSystem = DesignSystem({})
register() // Swiper Web Component 

// Config
axiosConfig({ csrf: GLOBAL.context?.csrf }, axios)
UseMouseOrKeyboard()
ripple()



// Pages
PageHome()








// utils logs
logs()



