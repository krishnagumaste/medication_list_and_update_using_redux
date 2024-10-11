import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Display from './components/Display';
import AddMedication from './components/AddMedication';
import RestockMedication from './components/RestockMedication';
import { Box, Grid } from '@mui/material';

const App = () => {
  return (
    <Provider store={store}>
      <Box sx={{ padding: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Display />
          </Grid>
          <Grid item xs={12} md={6} container direction="column" spacing={2}>
            <Grid item>
              <AddMedication />
            </Grid>
            <Grid item>
              <RestockMedication />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Provider>
  );
};

export default App;
