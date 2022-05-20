import { Card } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Todos = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTodosData = async () => {
      const todos = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );

      setData(todos.data);
    };
    fetchTodosData();
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

export default Todos;
