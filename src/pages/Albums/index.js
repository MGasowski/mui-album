import axios from "axios";
import { useEffect, useState } from "react";
import AlbumCard from "../../components/AlbumCard";

const Albums = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAlbumData = async () => {
      const albums = await axios.get(
        "https://jsonplaceholder.typicode.com/albums"
      );

      setData(albums.data);
    };
    fetchAlbumData();
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data && data.map((el) => <AlbumCard id={el.id} />)}
    </div>
  );
};

export default Albums;
