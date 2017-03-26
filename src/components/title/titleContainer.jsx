import { connectWithId } from '../../util/index';
import Title from './title';

const formatArtistAndTitle = (artist, title) => {
  let titleText = '';

  if (artist !== '') {
    titleText += `${artist}`;
  }

  if (title !== '') {
    if (artist !== '') {
      titleText += ' - ';
    }
    titleText += `${title}`;
  }

  return titleText;
};

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  children: children || formatArtistAndTitle(jPlayers[id].media.artist, jPlayers[id].media.title),
  attributes,
});

export default connectWithId(mapStateToProps)(Title);
