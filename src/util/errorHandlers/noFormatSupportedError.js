import { errors, hints } from '../constants';

export default context => ({
  context,
  message: errors.FORMAT_NO_SUPPORT,
  hint: hints.FORMAT_NO_SUPPORT,
});
