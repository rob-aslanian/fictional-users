import { ICountry } from '../models';

export default class CountryService {
  static async getCountries(
    signal: AbortSignal,
  ): Promise<ICountry[]> {
    return await fetch('https://restcountries.eu/rest/v2/all', {
      signal,
    })
      .then((res) => res?.json())
      .then((countries: any[]) =>
        countries.map(({ name, alpha3Code }) => ({
          name,
          id: alpha3Code,
        })),
      );
  }
}
