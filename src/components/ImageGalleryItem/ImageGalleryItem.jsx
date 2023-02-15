import { GalleryItem, GallereyImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, onClick }) => {
    return (
        <GalleryItem onClick={() => {
            onClick(largeImageURL);
        }}>
        <GallereyImg src={webformatURL} alt={tags} />
    </GalleryItem>
    );
}