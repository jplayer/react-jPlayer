import { controlTests } from '../../common';
import FullScreen from '../../../src/components/controls/fullScreen';

describe('shallow: <FullScreen />', () => {
  controlTests(FullScreen, 'a');
});
