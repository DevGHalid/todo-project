// @flow
import React from 'react';
import Grid from '@material-ui/core/Grid';

// css
import './Main.css';

export default function Main(props) {
  return (
    <Grid className="main" container justify="center" spacing={3}>
      <Grid item xs={9}>
        <div className="main-container">{props.children}</div>
      </Grid>
    </Grid>
  );
}
