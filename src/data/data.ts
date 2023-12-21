import {AnimationObject} from 'lottie-react-native';

export interface OnboardingData {
  id: number;
  animation: AnimationObject;
  text: string;
  textColor: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    animation: require('../assets/animations/Lottie1.json'),
    text: 'Welcome to ClickDot',
    textColor: '#6E3DD6',
    backgroundColor: '#D2BEFE',
  },
  {
    id: 2,
    animation: require('../assets//animations/Lottie2.json'),
    text: 'Unlock Learning Adventures',
    textColor: '#1e2169',
    backgroundColor: '#bae4fd',
  },
  {
    id: 3,
    animation: require('../assets//animations/Lottie3.json'),
    text: 'Begin Your Learning Voyage',
    textColor: '#F15937',
    backgroundColor: '#faeb8a',
  },
];

export default data;
