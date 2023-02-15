import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallerey } from '../ImageGallery/ImageGallery';
import { useEffect, useState } from 'react';
import { AppContainer } from './App.styled';
import { fetchImages } from '../API/FetchAPI';
import { Loader } from '../Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal } from 'components/Modal/Modal';
import { LoadMore } from './App.styled';

export const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState(null);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState('');
  const [tags, setTags] = useState('');

  const handleSearch = query => {
    setImages([]);
    setQuery(query);
    setPage(1);
    setError(null);
  };

  const loadMore = () => {
    setPage(page => page + 1);
  };

  useEffect(() => {
    if (!query) return;
    fetchData(page, query);
  }, [page, query]);

  const fetchData = async () => {
    const perPage = 12;
    setIsLoading(true);

    await fetchImages(query, page, perPage)
      .then(({ hits, totalHits }) => {
        const totalPages = Math.ceil(totalHits / perPage);

        if (hits.lenght < 0) {
          return toast.error('Ups i`m sorry, sorry for what?!');
        }

        if (page === totalPages) {
          toast.warn('You reach the end of the collection');
        }

        if (page === 1) {
          toast.success(`We found ${totalHits} pictures!`);
        }
        setImages(images => [...images, ...hits]);
        setTotal(totalHits);
      })
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  };

  const handleToggle = largeImageURL => {
    setShowModal(!showModal);
    setLargeImageURL(largeImageURL);
  };

  const loadImages = images.length !== 0;
  const isLastPage = images.length === total;
  const loadMoreBtn = loadImages && !isLoading && !isLastPage;

  return (
    <AppContainer>
      <Searchbar onSubmit={handleSearch} />

      {isLoading && <Loader />}

      <ImageGallerey images={images} onClick={handleToggle} />

      <ToastContainer theme="light" position="top-right" autoClose={3000} />

      {loadMoreBtn && (
        <LoadMore type="button" onClick={loadMore}>
          Load More
        </LoadMore>
      )}

      {showModal && (
        <Modal onClose={handleToggle}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </AppContainer>
  );
};
