// import Swiper from "swiper";
import axios from "axios";
import axiosConfig from "./modules/axiosConfig";
import PageHome from './pages/Home.js'
import DesignSystem from "./modules/DesignSystem/DesignSystem";


// Init
axiosConfig(GLOBAL.context.csrf, axios)
DesignSystem()

// Pages
PageHome()




console.log("🟡 main.js");
