export interface Statistical {
  aquafina: number;
  other: number;
}

export interface User {
  key: string;
  name: string | undefined;
  phone: string | undefined;
  avatar: string;
  point: number;
  statistical: Statistical;
}
