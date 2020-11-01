import React from "react";
import { IRepo } from "../../types";
import api from "../../utils/api";
import HomeView from "./home.view";
import { useHistory } from "react-router-dom";

const Home: React.FC = (): JSX.Element => {
  const [data, setData] = React.useState<IRepo[]>();
  const [comments, setComments] = React.useState<{
    name: string;
    body: string;
  }>();
  const history = useHistory();

  React.useEffect(() => {
    api
      .getData()
      .then((response) =>
        api
          .getData(response.data.repos_url)
          .then((response) => setData(response.data))
      );
  }, []);

  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>, name: string) => {
      setComments({ ...comments, name, body: e.target.value });
    },
    []
  );
  const saveComment = React.useCallback(() => {
    const commentsData = JSON.stringify(comments);
    localStorage.setItem("comments", commentsData);
  }, [comments]);

  const loadComments = () => {
    return localStorage.getItem("comments");
  };

  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <div>
      <HomeView
        saveComment={saveComment}
        logout={logout}
        onChange={onChange}
        repos={data}
        comments={loadComments}
      />
    </div>
  );
};

export default Home;
