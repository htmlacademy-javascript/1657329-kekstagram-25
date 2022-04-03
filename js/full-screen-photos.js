import {isEscEvent} from './util.js';

const photoPopup = document.querySelector('.big-picture');
const socialCommentCount = photoPopup.querySelector('.social__comment-count');
const commentsLoader = photoPopup.querySelector('.comments-loader');
const templateComment = document.querySelector('#comment').content.querySelector('.social__comment');
const containerComments = document.querySelector('.social__comments');
const elementFragment = document.createDocumentFragment();
const exitPopup = photoPopup.querySelector('#picture-cancel');

const closeBigPhoto = () => {
  photoPopup.classList.add('hidden');
  socialCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onBigPhotoEscKey);
  containerComments.querySelectorAll('.social__comment').forEach((item) => item.remove());
};

const openBigPhoto = () => {
  photoPopup.classList.remove('hidden');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onBigPhotoEscKey);
};

function onBigPhotoEscKey(evt) {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
}

const renderComment = (item) => {
  const comment = templateComment.cloneNode(true);
  comment.querySelector('.social__picture').setAttribute('src', item.avatar);
  comment.querySelector('.social__picture').setAttribute('alt', item.name);
  comment.querySelector('.social__text').textContent = item.message;
  return comment;
};

const renderBigPhoto = (item) => {
  photoPopup.querySelector('.big-picture__img>img').setAttribute('src', item.url);
  photoPopup.querySelector('.likes-count').textContent = item.likes;
  photoPopup.querySelector('.comments-count').textContent = item.comments.length;
  photoPopup.querySelector('.social__caption').textContent = item.description;
  item.comments.forEach((comment) => {
    const commentLast = renderComment(comment);
    elementFragment.append(commentLast);
  });
  containerComments.append(elementFragment);
  openBigPhoto();
};

exitPopup.addEventListener('click', closeBigPhoto);

export {renderBigPhoto};
