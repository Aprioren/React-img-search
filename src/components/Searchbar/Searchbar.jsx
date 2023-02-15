import { useState } from 'react';
import {
  Header,
  Form,
  FormButton,
  Input,
  Span,
  Icon,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  const reset = () => {
    setQuery('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query === '') {
      return;
    }

    onSubmit(query);

    reset();
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <FormButton type="submit">
          <Icon width="20px" height="20px" />
          <Span>Search </Span>
        </FormButton>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={query}
          name="query"
        />
      </Form>
    </Header>
  );
};
