// slices/medicationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [
    { id: 1, name: 'Aspirin', stockLevel: 50 },
    { id: 2, name: 'Ibuprofen', stockLevel: 30 },
    { id: 3, name: 'Amoxicillin', stockLevel: 20 },
  ],
};

const medicationSlice = createSlice({
  name: 'medication',
  initialState,
  reducers: {
    addMedication: (state, action) => {
      state.value.push(action.payload);
    },
    restockMedication: (state, action) => {
        const { medicationName, restockValue } = action.payload;
        const medication = state.value.find(med => med.name === medicationName);
        if (medication) {
          medication.stockLevel += restockValue;
        }
    },
  },
});

export const { addMedication, restockMedication } = medicationSlice.actions;
export default medicationSlice.reducer;
