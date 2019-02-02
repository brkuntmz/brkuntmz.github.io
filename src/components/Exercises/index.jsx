import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
  IconButton
} from "@material-ui/core";

import { Delete, Edit } from "@material-ui/icons";
import Form from "./Form";

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
  exercise,
  exercise: {
    id,
    title = "Welcome to Exercise DB!",
    description = "Please select an exercise to learn more!"
  },
  onDelete,
  onSelectEdit,
  onEdit,
  editMode,
  muscles
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
                  {exercises.map(({ id, title, description }) => (
                    <ListItem button key={id} onClick={() => onSelect(id)}>
                      <ListItemText primary={title} />
                      <ListItemSecondaryAction key={id}>
                        <IconButton onClick={() => onSelectEdit(id)}>
                          <Edit />
                        </IconButton>
                        <IconButton onClick={() => onDelete(id)}>
                          <Delete />
                        </IconButton>
                      </ListItemSecondaryAction>
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
          {editMode ? (
            <Form muscles={muscles} onSubmit={onEdit} exercise={exercise} />
          ) : (
            <Fragment>
              <Typography variant="headline">{title}</Typography>
              <Typography variant="subheading">{description}</Typography>
            </Fragment>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default index;
