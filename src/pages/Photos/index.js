import { Card } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Photos = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPhotosData = async () => {
      const photos = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );

      setData(photos.data);
    };
    fetchPhotosData();
  }, []);

  return (
    <div>
      {data &&
        data.map((el) => (
          <Card key={el.id} variant="outlined">
            {el.title}
            {el.id}
          </Card>
        ))}
    </div>
  );
};

export default Photos;
