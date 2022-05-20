import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { red } from "@mui/material/colors";

const AlbumCard = (props) => {
  const [images, setImages] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchImagesData = async () => {
      const imageUrls = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?albumId=${props.id}&_limit=4`
      );
      setImages(imageUrls.data);
    };
    fetchImagesData();
  }, [props.id]);

  useEffect(() => {
    const fetchAlbumData = async () => {
      const album = await axios.get(
        `https://jsonplaceholder.typicode.com/albums/${props.id}?_expand=user`
      );
      setData(album.data);
      console.log(album.data.user);
    };
    fetchAlbumData();
  }, [props.id]);

  return (
    <>
      <Card sx={{ width: 300, margin: 2 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {data.user?.name.charAt(0)}
            </Avatar>
          }
          action={<IconButton aria-label="settings"></IconButton>}
          title={data.title}
          subheader={data.user?.name}
        />
        <Grid container>
          {images.map((el) => (
            <Grid item xs={6}>
              <img
                style={{ margin: 0 }}
                key={el.id}
                src={el.thumbnailUrl}
                alt=""
              />
            </Grid>
          ))}
        </Grid>

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {data.title}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default AlbumCard;
