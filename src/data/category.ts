import { Alert } from 'react-native';

interface DataItem {
  id: string;
  image: any;
  description: string;
  buttonLabel: string;
  buttonAction: () => void;
}

interface Category {
  id: string;
  name: string;
  items: DataItem[];
}

const data: Category[] = [
  {
    id: '1',
    name: 'Politike',
    items: [
      {
        id: '1',
        image: require('../assets/images/news1.webp'),
        description: 'Politike news description...',
        buttonLabel: 'Lexo me shume...',
        buttonAction: () => Alert.alert('Politike Test :)'),
      },
    ],
  },
  {
    id: '2',
    name: 'Sport',
    items: [
      {
        id: '2',
        image: require('../assets/images/news2.jpg'),
        description: 'Sport news description...',
        buttonLabel: 'Lexo me shume...',
        buttonAction: () => Alert.alert('Sport Test :)'),
      },
    ],
  },
  {
    id: '3',
    name: 'Art',
    items: [
      {
        id: '3',
        image: require('../assets/images/polling.png'),
        description: 'Art news description...',
        buttonLabel: 'Lexo me shume...',
        buttonAction: () => Alert.alert('Art Test :)'),
      },
    ],
  },
  {
    id: '4',
    name: 'Test',
    items: [
      {
        id: '4',
        image: require('../assets/images/polling.png'),
        description: 'Art news description...',
        buttonLabel: 'Lexo me shume...',
        buttonAction: () => Alert.alert('Art Test :)'),
      },
    ],
  },
];

export default data;
