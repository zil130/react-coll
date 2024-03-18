interface ILinks {
  title: string;
  url: string;
}

interface IUser {
  name: string;
  description: string;
  links: ILinks[];
}

export default IUser;
