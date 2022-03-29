import {buildDescriptionUserFoto} from './data.js';
import {setCloseBigPhoto, setOpenBigPhoto} from './full-screen-fotos.js';
import {renderPhotos} from './create-miniature.js';

const photosMoreUsers = buildDescriptionUserFoto();
renderPhotos(photosMoreUsers);

setOpenBigPhoto();
setCloseBigPhoto();
