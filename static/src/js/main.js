import axios from "axios";
import axiosConfig from "./modules/axiosConfig";
import PageHome from './pages/Home.js'
import DesignSystem from "./DesignSystem/DesignSystem";
// import SvgUse from "./utils/SvgUse";

// Init
GLOBAL.DesignSystem = DesignSystem({})

// Config
axiosConfig({ csrf: GLOBAL.context }, axios)

// Pages
PageHome()








console.log({ GLOBAL })
console.log(import.meta.env)


