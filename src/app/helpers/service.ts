import { Prisoner } from '@/app/apollo/hooks/usePrisoners';

export type Update = {
  lastName: string;
  firstName: string;
  eventTitle: string;
  eventBody: string;
  date: string;
  time: string;
};
export type Suggestion = {
  prisoner: Prisoner;
  probability: string;
};

export const getSuggestions = async () => {
  const data: Suggestion[] = [
    {
      prisoner: {
        id: '1',
        name: 'Константин Константинович',
        date_of_birth: '01.01.2000',
        region: 'Республика Беларусь',
        articles: [],
      },
      probability: 'вероятно',
    },
    {
      prisoner: {
        id: '1',
        name: 'Константин Константинович',
        date_of_birth: '01.01.2000',
        region: 'Республика Беларусь',
        articles: [],
      },
      probability: 'вероятно',
    },
    {
      prisoner: {
        id: '1',
        name: 'Константин Константинович',
        date_of_birth: '01.01.2000',
        region: 'Республика Беларусь',
        articles: [],
      },
      probability: 'вероятно',
    },
  ];

  return Promise.resolve(data);
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
