import Axios from "axios";

const API_HOST = process.env.API_HOST;

const ENDPOINTS = {
  site_info: API_HOST + "/bw/v1/site-info",
  menus: API_HOST + "/bw/v1/menus", // get all menus
  menu: API_HOST + "/bw/v1/menus/", // specific menu: /menus/<menu_name>
  pages: API_HOST + "/bw/v1/pages", // all pages
  posts: API_HOST + "/bw/v1/posts", // all posts
  page: API_HOST + "/bw/v1/pages/", // individual page: /pages/<slug>
  post: API_HOST + "/bw/v1/posts/" // individual post: /posts/<slug>
};

export const API = {
  get: async endpoint => {
    const response = await Axios.get(endpoint);
    return response.data;
  },
  getGlobalInfo: async () => {
    return await API.get(ENDPOINTS.site_info);
  },
  getMenus: async () => {
    return await API.get(ENDPOINTS.menus);
  },
  getMenu: async menu => {
    return await API.get(ENDPOINTS.menu + menu);
  },
  getFrontpage: async () => {
    return await API.get(ENDPOINTS.page + "home");
  },
  getPage: async page => {
    return await API.get(ENDPOINTS.page + page);
  },
  getPost: async post => {
    return await API.get(ENDPOINTS.post + post);
  }
};

export const CONTENT_FIELD = "acf_content";

export default API;
