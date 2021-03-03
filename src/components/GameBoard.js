import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FlipCard from "./FlipCard";
import { sizeBoard } from "../redux/settingsSlice";
import { resetGame, flipCard, cardsGame } from "../redux/gameSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
  },
  card: {},
}));

function GameBoard() {
  const dispatch = useDispatch();
  const { widthBoard } = useSelector(sizeBoard);
  const cards = useSelector(cardsGame);

  const classes = useStyles();

  useEffect(() => {
    dispatch(resetGame());
  }, []);

  const handlerClick = (id) => {
    dispatch(flipCard(id));
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={12 / widthBoard}>
        {cards.map((card, id) => (
          <Grid item xs={12 / widthBoard} key={id + card.idImg}>
            <FlipCard
              className={classes.card}
              id={id}
              src={card.src}
              isOpen={card.isOpen}
              onClick={handlerClick}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default GameBoard;
