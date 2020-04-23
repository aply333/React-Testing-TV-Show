import axios from "axios";

const fetchShow = async () => {
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then((res) => {
      console.log("%c fetchShow data:", "color: orange;", res.data);
      console.log(
        "%c fetchShow embdedded.data:",
        "color: orange;",
        res.data._embedded.episodes
      );
      return res;
    })
    .catch((err) => {
      console.error(
        "%c Error from fetchShow Api, Err:",
        "color:red",
        err.message
      );
      return err;
    });
};

export default fetchShow;

//  NOTE TO SELF
//  REMBER TO ADD RETURN OTHERWISE NO DATA WILL BE ACCESSABLE
