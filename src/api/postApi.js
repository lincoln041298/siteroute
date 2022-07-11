// eslint-disable-next-line import/no-anonymous-default-export
export default {
  list: (perPage, page) => fetch(`https://api.gcosoftware.vn/wp-json/wp/v2/posts?search=web&per_page=${perPage}&page=${page}`),
};
