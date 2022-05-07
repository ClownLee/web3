import { createWebHistory, createRouter } from "vue-router";
import routes from "./modules";

export default new createRouter({
    history: createWebHistory(),
    routes,
})