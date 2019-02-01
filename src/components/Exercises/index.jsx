import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@material-ui/core";

const styles = {
  Paper: {
    padding: 20,
    margin: 10,
    height: "500px",
    overflowY: "auto"
  },
  Typo: {
    textTransform: "uppercase"
  }
};

const index = ({
  exercises,
  category,
  onSelect,
  exercise: {
    id,
    title = "Welcome to Exercise DB!",
    description = "Please select an exercise to learn more!"
  }
}) => {
  return (
    <Grid container>
      <Grid item sm>
        <Paper style={styles.Paper}>
          {exercises.map(([bodyPart, exercises]) => {
            return !category || category === bodyPart ? (
              <Fragment key={bodyPart}>
                <Typography variant="headline" style={styles.Typo}>
                  {bodyPart}
                </Typography>
                <List component="nav">
                  {exercises.map(({ id, title }) => (
                    <ListItem button key={id} onClick={() => onSelect(id)}>
                      <ListItemText primary={title} />
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null;
          })}
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper style={styles.Paper}>
          <Typography variant="headline">{title}</Typography>
          <Typography variant="subheading">{description}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default index;
