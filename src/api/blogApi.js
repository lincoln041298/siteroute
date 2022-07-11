// eslint-disable-next-line import/no-anonymous-default-export
export default {
    search: (keyword) => fetch(`https://api.gcosoftware.vn/wp-json/wp/v2/posts?search=web&keyword=${keyword}`),
  };
  