interface ILinks {
  title: string;
  url: string;
}

export interface IUser {
  name: string;
  description: string;
  links: ILinks[];
}
