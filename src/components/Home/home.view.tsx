import React from "react";
import { IRepo } from "../../types";
import { List, Input, Button } from "antd";
const { TextArea } = Input;

interface IProps {
  repos: IRepo[];
  onChange: () => void;
  logout: () => void;
}

const HomeView: React.FC<IProps> = React.memo(
  ({ repos, onChange, logout }): JSX.Element => {
    return (
      <>
        <Button style={logoutBtn} onClick={logout} type="primary" danger>
          Logout
        </Button>

        <List
          style={container}
          itemLayout="horizontal"
          dataSource={repos}
          renderItem={(item) => (
            <>
              <List.Item>
                <List.Item.Meta
                  title={item.name}
                  description={item.full_name}
                />
              </List.Item>
              <TextArea
                placeholder="textarea with clear icon"
                allowClear
                onChange={onChange}
              />
              <Button type="primary">Save</Button>
            </>
          )}
        />
      </>
    );
  }
);
const container = {
  marginLeft: 20,
  marginRight: 20,
};

const logoutBtn = {
  justifyContent: "center",
  marginTop: 20,
  marginBottom: 20,
};
export default HomeView;
