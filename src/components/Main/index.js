// @flow
import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// css
import './Main.css';

// type props
type Props = {
  children: React.Node
};

export default function Main(props: Props) {
  return (
    <Grid className="main" container justify="center" spacing={3}>
      <Grid item xs={9}>
        <div className="main-container">{props.children}</div>
      </Grid>
    </Grid>
  );
}
