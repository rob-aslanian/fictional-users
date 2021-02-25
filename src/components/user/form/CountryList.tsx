import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import { ICountry, IInputProps } from '../../../core/models';
import CountryService from '../../../core/services/countries.services';

export default function CountryList({ control, name }: IInputProps) {
  const [countries, setCountries] = useState([] as any);

  useEffect(() => {
    const ac = new AbortController();
    const signal = ac.signal;

    (async function loadDataAsync() {
      try {
        const result = await CountryService.getCountries(signal);
        setCountries(result);
      } catch (e) {
        console.warn(e);
      }
    })();
    return () => ac.abort();
  });

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel id="country-select">Country</InputLabel>
      <Controller
        as={
          <Select
            labelId="country-select"
            style={{ minWidth: '200px' }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {countries.map((cty: ICountry) => (
              <MenuItem value={cty.name} key={cty.id}>
                {cty.name}
              </MenuItem>
            ))}
          </Select>
        }
        name={name}
        control={control}
        defaultValue=""
      />
    </FormControl>
  );
}
