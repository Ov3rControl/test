import React from "react";
import { IRepo } from "../../types";
import api from "../../utils/api";
import HomeView from "./home.view";
import { useHistory } from "react-router-dom";

const Home: React.FC = (): JSX.Element => {
  const [data, setData] = React.useState<IRepo[]>();
  const history = useHistory();
  React.useEffect(() => {
    api
      .getData()
      .then((response) =>
        api
          .getData(response.data.repos_url)
          .then((response) => setData(response.data))
      );
    // return () => {
    //   cleanup
    // }
  }, []);
  const onChange = () => {};

  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <div>
      <HomeView logout={logout} onChange={onChange} repos={data} />
    </div>
  );
};

export default Home;
