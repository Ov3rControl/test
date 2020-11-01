import React from "react";
import { IRepo } from "../../types";
import { List, Input, Button } from "antd";
const { TextArea } = Input;

interface IProps {
  repos: IRepo[];
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>, name: string) => void;
  logout: () => void;
  saveComment: () => void;
  comments: () => string;
}

const HomeView: React.FC<IProps> = React.memo(
  ({ repos, onChange, logout, saveComment, comments }): JSX.Element => {
    const [comment, setComment] = React.useState<{
      name: string;
      body: string;
    }>();

    React.useEffect(() => {
      const data = localStorage.getItem("comments");
      setComment(JSON.parse(data));
    }, [saveComment]);
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
              {console.log(comment)}
              {comment.name === item.name && <p>{comment.body}</p>}
              <TextArea
                placeholder="Comment"
                allowClear
                onChange={(e) => onChange(e, item.name)}
              />
              <Button onClick={() => saveComment()} type="primary">
                Save
              </Button>
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
