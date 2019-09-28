export namespace SERVER {
  export const PORT = process.env.PORT || 3000;
  export const IP = process.env.IP || '0.0.0.0';
}

export namespace DB {
  export const URI = '127.0.0.1:27017';
  export const NAME = 'ecommerce_db';
}

export namespace Category {

}

export namespace OrderStatus {
  export const NEW = 1000;
  export const ORDERED = 1001;
  export const CONFIRMED = 1002;
  export const SHIPPING = 1003;
  export const DONE = 1004;
}
