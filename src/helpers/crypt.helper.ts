import * as bcrypt from 'bcrypt';

export const hash = (data: string) => bcrypt.hashSync(data, 10);
