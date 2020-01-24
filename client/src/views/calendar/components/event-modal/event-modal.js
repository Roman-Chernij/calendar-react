import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

export const EventModal = () => {

  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState('');
  const [dataFrom, setDataFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [description, setDescription] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendEvent = () => {
    const result = {
      title,
      dataFrom,
      dateTo,
      description
    };
    console.log(result)
  };

  return (
    <>
      <div className="btn-add">
        <Fab color="primary" aria-label="add" onClick={handleClickOpen
        }>
          <AddIcon style={{ fontSize: 30 }} />
        </Fab>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <form>
            <TextField
              className="form-text-field"
              id="standard-basic"
              label="Title"
              value={title}
              onChange={(event) => setTitle(event.target.value)} />

            <TextField
              className="form-text-field"
              label="Date from"
              type="time"
              value={dataFrom}
              onChange={event => setDataFrom(event.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
            <TextField
              className="form-text-field"
              label="Date to"
              type="time"
              value={dateTo}
              onChange={event => setDateTo(event.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
            <TextField
              className="form-text-field"
              multiline={true}
              rows={2}
              rowsMax={4}
              id="standard-basic"
              onChange={event => setDescription(event.target.value)}
              label="Description" />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={sendEvent} color="primary" autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
};

