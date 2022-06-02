import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Style from "./index.module.css";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

export default function MediaCard(props) {
  const router = useRouter();

  const Direct = () => {
    router.push(`/detail/${props.id}`);
  };

  return (
    <main onClick={Direct} className={Style.main}>
      <Card sx={{ maxWidth: 345, minHeight: 364 }}>
        <CardMedia component="img" height="140" image={props.photo} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {props.address}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.phone}
          </Typography>
        </CardContent>
      </Card>
    </main>
  );
}
