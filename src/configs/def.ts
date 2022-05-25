export namespace SERVER {
  export const PORT = process.env.PORT || 3000;
  export const IP = process.env.IP || '0.0.0.0';
}

export namespace DB {
  export const URI = '127.0.0.1:27017';
  export const NAME = 'sample_mongodb';
}
