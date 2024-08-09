import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '376f69aa-5748-4e76-9c65-d12ead32a636',
};

export const sampleWithPartialData: IAuthority = {
  name: '58a894c0-ba77-4bb0-80ee-d6078fc24061',
};

export const sampleWithFullData: IAuthority = {
  name: '0e3bc7f2-aed9-4d56-a7cc-a7eb61c68beb',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
