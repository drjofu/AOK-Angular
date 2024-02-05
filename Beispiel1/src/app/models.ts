export interface Measurement{
  units: string;
  value: string;
}

export interface Satellite{
  name: string;
  distance_from_planet: string;
  orbit: Measurement;
}

export interface Planet{
  color: string;
  name: string;
  radius: Measurement;
  length_of_year: string;
  mass: Measurement;
  day: Measurement;
  satellites?: Satellite[];
  distance: Measurement;
  density: Measurement;
}