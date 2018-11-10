import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "../contants/types";
import axios from "axios";

export default {
  asyncFetchList({ commit, state }, param) {
    commit(FETCH_REQUEST);
    axios
      .get("http://118.24.155.105:4000/v1/qiniu/bucket")
      .then(({ data }) => {
        commit(FETCH_SUCCESS, {
          data: data.data
        });
        // console.log("success:", data);
      })
      .catch(err => {
        commit(FETCH_FAILURE, {
          error: err
        });
        // console.log("error:", err);
      });
  }
};
