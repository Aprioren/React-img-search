import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';


export const ImageGallerey = ({images, onClick}) => {
    return (
        <Gallery>
        {images.map(({tags, id, webformatURL, largeImageURL})=> {
            return <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                tags={tags}
                onClick={onClick}
            />
        })}
    </Gallery>
    )
}