import React from 'react';
import { useSelector } from 'react-redux';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
} from '@mui/material';

const Display = () => {
  const medications = useSelector((state) => state.medication.value);

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom color='white'>
        Medication List
      </Typography>
      <Card variant="outlined">
        <CardContent>
          <List>
            {medications.map((med) => (
              <ListItem key={med.id} divider>
                <ListItemText
                  primary={med.name}
                  secondary={`Stock Level: ${med.stockLevel}`}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Display;
