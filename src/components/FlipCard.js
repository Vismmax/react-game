import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReactCardFlip from "react-card-flip";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  card: {},
  media: {
    aspectRatio: "1 / 1",
  },
}));

function FlipCard({
  id = "",
  src = "",
  isOpen = false,
  onClick,
  className = "",
}) {
  const classes = useStyles();

  const handlerClick = () => {
    if (!isOpen) onClick(id);
  };
  return (
    <div className={className}>
      <ReactCardFlip isFlipped={isOpen} flipDirection="horizontal">
        <Card className={classes.card}>
          <CardActionArea onClick={handlerClick}>
            <CardMedia
              className={classes.media}
              image="https://picsum.photos/id/10/300/300"
              title="Flip Card"
            />
          </CardActionArea>
        </Card>

        <Card className={classes.card}>
          <CardActionArea onClick={handlerClick}>
            <CardMedia
              className={classes.media}
              image={src}
              title="Flip Card"
            />
          </CardActionArea>
        </Card>
      </ReactCardFlip>
    </div>
  );
}

export default FlipCard;
