import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { restockMedication } from '../store/slice';
import { Box, Button, TextField, Typography, Paper, Autocomplete } from '@mui/material';

const RestockMedication = () => {
  const [medicationName, setMedicationName] = useState('');
  const [restockValue, setRestockValue] = useState('');
  const medications = useSelector((state) => state.medication.value);
  const dispatch = useDispatch();

  const medicationNames = medications.map((med) => med.name);

  const handleRestock = () => {
    if (!medicationNames.includes(medicationName)) {
      alert('Please select a medication name from the dropdown list.');
      return;
    }

    dispatch(
      restockMedication({
        medicationName,
        restockValue: Number(restockValue),
      })
    );

    setMedicationName('');
    setRestockValue('');
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, margin: 'auto', marginTop: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Restock Medication
      </Typography>
      <Box
        component="form"
        onSubmit={(e) => e.preventDefault()}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <Autocomplete
          options={medicationNames}
          value={medicationName}
          onChange={(event, newValue) => {
            setMedicationName(newValue);
          }}
          inputValue={medicationName}
          onInputChange={(event, newInputValue) => {
            setMedicationName(newInputValue);
          }}
          renderInput={(params) => (
            <TextField {...params} label="Medication Name" variant="outlined" placeholder="Enter medication name" />
          )}
          fullWidth
        />
        <TextField
          label="Restock Amount"
          variant="outlined"
          type="number"
          value={restockValue}
          onChange={(e) => setRestockValue(e.target.value)}
          placeholder="Enter restock amount"
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleRestock}
          sx={{ marginTop: 2 }}
        >
          Restock Medication
        </Button>
      </Box>
    </Paper>
  );
};

export default RestockMedication;
