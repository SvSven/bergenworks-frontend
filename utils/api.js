const host = process.env.API_HOST;

const Api = {
  site_info: host + "/bw/v1/site-info",
  menus: host + "/bw/v1/menus",
  frontpage: host + "/bw/v1/frontpage",
  pages: host + "/wp/v2/pages",
  posts: host + "/wp/v2/posts"
};

export default Api;
