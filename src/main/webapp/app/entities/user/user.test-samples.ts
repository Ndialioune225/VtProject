import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 23717,
  login: '5GTV@j8BbPM\\NmfaLH\\FiST\\I8yJdsY\\^6AbT',
};

export const sampleWithPartialData: IUser = {
  id: 24099,
  login: "xTtu?G@yfbw8\\'H-fef\\URRMow\\XzyF\\KvEnB",
};

export const sampleWithFullData: IUser = {
  id: 1750,
  login: 'bKKq8-',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
