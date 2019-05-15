export function filmsFetchDataSuccess(data) {
  return {
    type: "FILMS_FETCH_DATA_SUCCESS",
    payload: data,
  };
}

export function filmByIdFetchDataSuccess(data) {
  return {
    type: "FILM_BY_ID_FETCH_DATA_SUCCESS",
    payload: data,
  };
}

export function setIdForDP(id) {
  return {
    type: "SET_ID_FOR_DP",
    payload: id,
  };
}

export function filmsFetchData(url) {
  return (dispatch) => {
    fetch(url)
      .then((response) => {
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

export function filmByIdFetchData(url) {
  return (dispatch) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(data => dispatch(filmByIdFetchDataSuccess(data)))
      .catch(() => {});
  };
}
