export type Update = {
  lastName: string;
  firstName: string;
  eventTitle: string;
  eventBody: string;
  date: string;
  time: string;
};
export const getUpdates = async () => {
  const data: Update[] = [
    {
      lastName: 'Константин-Константинович',
      firstName: 'Константин Константинович',
      eventTitle: 'Новое судебное заседание',
      eventBody:
        'Зал судебных заседаний № 247, Постановление приговора, 03.03.2023 ',
      date: '25.02.2024',
      time: '13:00',
    },
    {
      lastName: 'Константин-Константинович',
      firstName: 'Константин Константинович',
      eventTitle: 'Новое судебное заседание',
      eventBody:
        'Зал судебных заседаний № 247, Постановление приговора, 03.03.2023 ',
      date: '25.02.2024',
      time: '13:00',
    },
  ];

  return Promise.resolve(data);
};
