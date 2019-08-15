import axios from "axios";

export const fetchNewsAsync = data => {
  return { type: "FETCH_NEWS", value: data };
};

// initial api call for first ten newsfeeds using search
export const fetchNextPageNews = id => {
  return dispatch => {
    axios
      .get(
        "https://api.github.com/search/repositories?q=" +
          id +
          "&sort=forks&order=desc"
      )
      .then(response => {
        var resultData = response.data;
        resultData["searchKey"] = id;
        console.log("resultData: ", resultData);
        dispatch(fetchNewsAsync(resultData));
      })
      .catch(error => console.log(error.response));
  };
};
