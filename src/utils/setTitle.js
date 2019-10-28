import { SITE_TITLE } from '../constants'

const setTitle = title => {
  if (typeof document === 'undefined' ) return;
  document.title = (title ? title + ' | ' + SITE_TITLE : SITE_TITLE)
};

export default setTitle
