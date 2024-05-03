import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'ed5c2d8e-177f-4f4e-a17d-14a06b9652d1',
};

export const sampleWithPartialData: IAuthority = {
  name: '40340ee5-8e8c-491d-8c49-23a020b94808',
};

export const sampleWithFullData: IAuthority = {
  name: 'ba812e8e-9391-412c-a9b9-9e3343934c8c',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
