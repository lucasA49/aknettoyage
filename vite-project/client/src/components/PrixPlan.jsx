import * as React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import CheckIcon from "@mui/icons-material/Check";
import "../styles/planprix.css";

function PrixPlan() {
  const plans = [
    {
      title: 'Basic',
      price: 50,
      features: [
        'Lorem ipsum dolor sit amet',
        'consectetur adipiscing elit',
        'Lorem ipsum dolor sit amet',
      ],
    },
    {
      title: 'Premium',
      price: 100,
      features: [
        'Lorem ipsum dolor sit amet',
        'consectetur adipiscing elit',
        'Lorem ipsum dolor sit amet',
      ],
    },
    {
      title: 'Golden',
      price: 150,
      features: [
        'Lorem ipsum dolor sit amet',
        'consectetur adipiscing elit',
        'Lorem ipsum dolor sit amet',
      ],
    },
  ];

  return (
    <div className='prixp'>
      {plans.map((plan) => (
        <Card key={plan.title} sx={{ maxWidth: 345, margin: '1rem' }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {plan.title}
            </Typography>
            <Typography variant="h3" component="div">
              {plan.price}€
            </Typography>
            <List>
              {plan.features.map((feature) => (
                <ListItem key={feature}>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary={feature} />
                </ListItem>
              ))}
            </List>
            <Button variant="contained" fullWidth>
              Payer Maintenant
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default PrixPlan;