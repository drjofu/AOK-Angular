export interface Continent{
  id: number;
  name: string;
  area: number;
}


export interface Country {
  id: number;
  continentId: number;

  name: string;
  carCode: string;
  area: number;
  population: number;
  independenceDate: string;
  government: string;
}