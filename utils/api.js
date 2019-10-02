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
  getFrontpage: async () => {
    return await API.get(ENDPOINTS.frontpage);
  },
  getPage: async page => {
    return await API.get(`${ENDPOINTS.pages}?slug=${page}`);
  },
  getPost: async post => {
    return await API.get(`${ENDPOINTS.posts}?slug=${post}`);
  }
};

export default API;
