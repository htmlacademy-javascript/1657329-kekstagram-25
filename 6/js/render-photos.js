import {isEscEvent} from './util.js';
import {renderBigPhoto, openBigPhoto, closeBigPhoto} from './full-screen-photos.js';

const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const containerUsersPictures = document.querySelector('.pictures');
const elementFragment = document.createDocumentFragment();

const renderThumbnail = (item) => {
  const thumbnail = templatePicture.cloneNode(true);
  thumbnail.querySelector('.picture__img').setAttribute('src', item.url);
  thumbnail.querySelector('.picture__likes').textContent = item.likes;
  thumbnail.querySelector('.picture__comments').textContent = item.comments.length;
  return thumbnail;
};

const onBigPhotoEscKey = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

const renderPhotos = (items) => {
  items.forEach((item) => {
    const thumbnail = renderThumbnail(item);
    thumbnail.addEventListener('click', () => {
      renderBigPhoto(item);
      openBigPhoto();
    });
    elementFragment.append(thumbnail);
  });
  return containerUsersPictures.append(elementFragment);
};

export {renderPhotos, onBigPhotoEscKey};
