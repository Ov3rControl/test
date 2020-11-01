import * as actionTypes from "./actionTypes";
import { RepoState, RepoAction } from "../types";

const initialState: RepoState = {
  repos: []
};

const reducer = (
  state: RepoState = initialState,
  action: RepoAction
): RepoState => {
  switch (action.type) {
    case actionTypes.ADD_COMMENT:
      const newComment = {
        body: action.repo
      };
      return {
        ...state,
        repos: state.repos
      };
  }
  return state;
};

export default reducer;
