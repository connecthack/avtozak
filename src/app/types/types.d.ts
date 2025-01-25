type CardPZProps = {
  name: string | null;
  body: string | null;
  sex: string | null;
  status: string | null;
  freedomdate: string | null;
  articles: (null | string)[] | null;
  primaryAction: ReactNode;
  secondaryAction: ReactNode;
  pictureUrl: string | null;
};
