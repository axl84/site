import React from 'react';
import { Typography, Grid } from 'material-ui';
import Section from '../components/Section';

const NotFoundPage = () => (
  <Section>
    <Grid item xs={12} sm={8}>
      <Typography variant="display1">ТУТ НИЧЕГО НЕТ 🤦‍♂️</Typography>
      <Typography>
        You just hit a route that doesn&#39;t exist... the sadness.
      </Typography>
    </Grid>
  </Section>
);

export default NotFoundPage;
