import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 'e3a7fbb9-2b68-4742-b6d3-aa80ccff4dd3',
  login: 'jot.C@y\\i3E6AJ\\zEwOAh\\N5qqRFK',
};

export const sampleWithPartialData: IUser = {
  id: 'a8c40570-9171-4a02-9519-62a35ede3b10',
  login: 'CvSHos@KHS\\`Ret',
};

export const sampleWithFullData: IUser = {
  id: 'cab604d1-5dad-4629-95f1-0a084b82271a',
  login: 'M-FsJ@zh4\\jvQ\\,Jau\\,w2\\Vfa',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
