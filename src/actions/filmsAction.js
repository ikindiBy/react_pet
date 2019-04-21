export function filmsFetchDataSuccess(data) {
  return {
    type: "FILMS_FETCH_DATA_SUCCESS",
    payload: data
  };
}

export function filmsFetchData(url) {
  return dispatch => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(data => dispatch(filmsFetchDataSuccess(data)))
      .catch(() => {});
  };
}
