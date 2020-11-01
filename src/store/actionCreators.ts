import { DispatchType, IRepo, RepoAction } from "../types";
import * as actionTypes from "./actionTypes";

export const addComment = (repo: IRepo) => {
  const action: RepoAction = {
    type: actionTypes.ADD_COMMENT,
    repo
  };

  return (dispatch: DispatchType) => {
      dispatch(action);
  };
}
