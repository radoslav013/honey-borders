export type User = {
  name: string;
  username: string;
  email: string;
  age: number;
}

export function defaultUser(): User {
  return {
    name: '',
    username: '',
    email: '',
    age: 0,
  };
}
