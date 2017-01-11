import { controlTests } from '../../common';
import Mute from '../../../src/components/controls/mute';

describe('shallow: <Mute />', () => {
  controlTests(Mute, 'a');
});
