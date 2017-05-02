import { errors, hints } from '../constants';

export default context => ({
  context,
  message: errors.URL_NO_SUPPORT,
  hint: hints.URL_NO_SUPPORT,
});
