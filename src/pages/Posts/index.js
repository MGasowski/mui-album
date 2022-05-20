import { Card } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Posts = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPostsData = async () => {
      const posts = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setData(posts.data);
    };
    fetchPostsData();
  }, []);

  return (
    <div>
      {data &&
        data.map((el) => (
          <Card key={el.id} variant="outlined">
            {el.title}
            {el.userId}
          </Card>
        ))}
    </div>
  );
};

export default Posts;
