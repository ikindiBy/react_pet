const getRequestToAPI = (searchBy, searchingWord) => {
  return `https://reactjs-cdp.herokuapp.com/movies?search=${searchingWord}&searchBy=${searchBy}`;
};

export { getRequestToAPI };
