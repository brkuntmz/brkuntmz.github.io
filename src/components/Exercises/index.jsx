import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
  IconButton,
  withStyles
} from "@material-ui/core";

import { Delete, Edit } from "@material-ui/icons";
import Form from "./Form.jsx";

import { withContextHOC } from "../../context.jsx";

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3,
    overflowY: "auto",
    [theme.breakpoints.up("sm")]: {
      margin: 5,
      height: "calc(100% - 10px)"
    },
    [theme.breakpoints.down("xs")]: {
      height: "100% "
    }
  },
  typo: {
    textTransform: "uppercase"
  },
  "@global": {
    "html, body, #root": {
      height: "100%"
    }
  },
  container: {
    [theme.breakpoints.up("sm")]: {
      height: "calc(100% - 64px - 48px)"
    },
    [theme.breakpoints.down("xs")]: {
      height: "calc(100% - 56px - 48px)"
    }
  },
  item: {
    [theme.breakpoints.down("xs")]: {
      height: "50%"
    }
  }
});

const index = ({
  exercisesByMuscles,
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
  muscles,
  classes
}) => {
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} sm={6} className={classes.item}>
        <Paper className={classes.paper}>
          {exercisesByMuscles.map(([muscles, exercises]) => {
            return !category || category === muscles ? (
              <Fragment key={muscles}>
                <Typography
                  variant="headline"
                  color="secondary"
                  className={classes.typo}
                >
                  {muscles}
                </Typography>
                <List component="nav">
                  {exercises.map(({ id, title, description }) => (
                    <ListItem button key={id} onClick={() => onSelect(id)}>
                      <ListItemText primary={title} />
                      <ListItemSecondaryAction key={id}>
                        <IconButton
                          onClick={() => onSelectEdit(id)}
                          color="primary"
                        >
                          <Edit />
                        </IconButton>
                        <IconButton
                          onClick={() => onDelete(id)}
                          color="primary"
                        >
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
      <Grid item xs={12} sm={6} className={classes.item}>
        <Paper className={classes.paper}>
          <Typography
            variant="headline"
            gutterBottom
            color="secondary"
            style={{ textTransform: "uppercase" }}
          >
            {title}
          </Typography>
          {editMode ? (
            <Form
              muscles={muscles}
              onSubmit={onEdit}
              exercise={exercise}
              key={id}
            />
          ) : (
            <Typography variant="subheading">{description}</Typography>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default withContextHOC(withStyles(styles)(index));
