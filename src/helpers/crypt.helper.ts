import * as bcrypt from 'bcrypt';

export const hash = (data: string) => bcrypt.hashSync(data, 10);
export const compare = (currentData: string, compareData: string) =>
  bcrypt.compareSync(currentData, compareData);
