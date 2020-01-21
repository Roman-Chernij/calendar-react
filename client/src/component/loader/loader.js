import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Loader = () => (
  <>
    <LinearProgress />
    <div className="loader-circular">
      <CircularProgress />
    </div>
  </>
);
