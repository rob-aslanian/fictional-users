import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@material-ui/core';
import React from 'react';
import { Controller } from 'react-hook-form';
import { IInputProps } from '../../../core/models';

export default function Habbits({ control, name }: IInputProps) {
  const habbits = ['Music', 'Reading', 'Coding', 'Sleeping'];

  return (
    <FormControl fullWidth component="fieldset" margin="normal">
      <FormLabel component="legend">Habbits</FormLabel>
      <FormGroup row>
        {habbits.map((habbit, i) => (
          <Controller
            key={habbit}
            as={
              <FormControlLabel
                control={<Checkbox value={habbit} />}
                label={habbit}
              />
            }
            name={`${name}[${i}]`}
            control={control}
            defaultValue={false}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
}
