import WordDay from '../pic/word_of_day.png';
import Curbo from '../pic/curbo.png';
import CurboWeb from '../pic/curbo_web.png';
import ParkAArchitecture from '../pic/parka_architecture.png';
import Meridiana from '../pic/meridiana.png';
import ParkA from '../pic/parka.png';
import ParkAImage from '../pic/parka_image.png';
import WordDayIcon from '../pic/word_of_day_icon.jpg';
import Subscription from '../pic/subscription.png';
import DistributedSystem from '../pic/distributed_system.png';
import SmartContract from '../pic/smart_contract.png';
import EmployeeManagementSystem from '../pic/employee_management_system.png';

const Portfolio_data = [
  {
    id: 1,
    category: 'DEVELOPMENT',
    title: 'Curbo',
    description:
      'Curbo is a web and mobile application that allows users to buy and selling cars',
    icon: Curbo,
    image: CurboWeb,
    ref: 'https://curbo.com',
  },

  {
    id: 2,
    category: 'ARCHITECTURE',
    title: 'Event Driven Architecture',
    description: `ParkA Architecture is based on microservices using distributed systems and event-driven architecture (version 2020).
       I also build another event driven architecture using pubsub and cloud functions for the backend of Curbo (version 2023) but I can't show it because it is private.`,
    image: ParkAArchitecture,
    icon: DistributedSystem,
    ref: 'https://github.com/ParkA-org/ParkA-Api-Microservices',
  },
  {
    id: 3,
    category: 'BLOCKCHAIN',
    title: 'Caos',
    description:
      'Caos is a smart contract designed for managing employee information on the blockchain. Developed using Solidity, it provides capabilities for employee registration, hour tracking, payment calculation, payment processing, transaction logging, and more. This contract permits to create, read, update, and delete employee records securely.',
    ref: 'https://github.com/bujosa/caos',
    image: EmployeeManagementSystem,
    icon: SmartContract,
  },
  {
    id: 4,
    category: 'APPLICATION',
    title: 'Word of the day',
    image: WordDay,
    icon: WordDayIcon,
    description:
      'Tarf is a simple application made in flutter, with the theme of being an app to show the word of the day and its meaning.',
    ref: 'https://github.com/bujosa/tarf',
  },
  {
    id: 5,
    category: 'APPLICATION',
    title: 'Meridiana - Subscriptions App',
    image: Meridiana,
    icon: Subscription,
    description:
      'Meridiana is a simple application made in flutter, with the theme of being an app to manage subscriptions.',
    ref: 'https://github.com/bujosa/meridiana',
  },
  {
    id: 6,
    category: 'DEVELOPMENT',
    title: 'ParkA',
    description: `ParkA is a web and mobile application that allows users to rent and sell 
      parking spaces, we developed this application using flutter for the mobile app 
      and react for the web app, the backend is based on microservices using distributed systems and event-driven architecture`,
    ref: 'https://github.com/bujosa/parka-mobile-app',
    image: ParkAImage,
    icon: ParkA,
  },
];
export default Portfolio_data;
