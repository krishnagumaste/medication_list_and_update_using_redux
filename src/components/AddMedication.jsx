import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMedication } from '../store/slice';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

const AddMedication = () => {
  const [medicationName, setMedicationName] = useState('');
  const [stockValue, setStockValue] = useState('');
  const dispatch = useDispatch();

  const medications = useSelector((state) => state.medication.value);

  const handleAddMedication = () => {
    if (medicationName === '') {
      alert('Provide the medication name!');
    } else if (stockValue === '') {
      alert('Provide the stock value!');
    } else {
      const lastId = medications.length > 0 ? medications[medications.length - 1].id : 0;

      const newMedication = {
        id: lastId + 1,
        name: medicationName,
        stockLevel: Number(stockValue),
      };

      dispatch(addMedication(newMedication));

      setMedicationName('');
      setStockValue('');
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, margin: 'auto', marginTop: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Add Medication
      </Typography>
      <Box component="form" onSubmit={(e) => e.preventDefault()} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Medication Name"
          variant="outlined"
          value={medicationName}
          onChange={(e) => setMedicationName(e.target.value)}
          placeholder="Enter medication name"
          fullWidth
        />
        <TextField
          label="Stock Level"
          variant="outlined"
          type="number"
          value={stockValue}
          onChange={(e) => setStockValue(e.target.value)}
          placeholder="Enter stock level"
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleAddMedication} sx={{ marginTop: 2 }}>
          Add Medication
        </Button>
      </Box>
    </Paper>
  );
};

export default AddMedication;
