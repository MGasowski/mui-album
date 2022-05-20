import { Card } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Users = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsersData = async () => {
      const users = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setData(users.data);
    };
    fetchUsersData();
  }, []);

  return (
    <div>
      {data &&
        data.map((el) => (
          <Card key={el.id} variant="outlined">
            {el.username}
          </Card>
        ))}
    </div>
  );
};

export default Users;
