import Axios from "axios";

const API_HOST = process.env.API_HOST;

const ENDPOINTS = {
  site_info: API_HOST + "/bw/v1/site-info",
  menus: API_HOST + "/bw/v1/menus",
  frontpage: API_HOST + "/bw/v1/frontpage",
  pages: API_HOST + "/wp/v2/pages",
  posts: API_HOST + "/wp/v2/posts"
};

const API = {
  getMenus: async () => {
    const response = await Axios.get(ENDPOINTS.menus);
    return response.data;
  },
  getFrontpage: async () => {
    const response = await Axios.get(ENDPOINTS.frontpage);
    return response.data;
  },
  getPage: async page => {
    const response = await Axios.get(`${ENDPOINTS.pages}?slug=${page}`);
    return response.data;
  },
  getPost: async post => {
    const response = await Axios.get(`${ENDPOINTS.posts}?slug=${post}`);
    return response.data;
  }
};

export default API;
