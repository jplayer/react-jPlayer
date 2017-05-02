import { errors, hints } from '../constants';

export default context => ({
  context,
  message: errors.URL_NOT_SET,
  hint: hints.URL_NOT_SET,
});
