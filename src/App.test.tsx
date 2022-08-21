import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

import { DataList } from './components/DataList';
import { SearchInput } from './components/SearchInput'; 

test('test DataList component props', () => {

  const DataListProps = {
    dataDisplayed: <img src="https://cdn3.vectorstock.com/i/1000x1000/35/52/placeholder-rgb-color-icon-vector-32173552.jpg" alt="flickr" />,
    onChange: () => null,
    count: 10
  }

  const { getByAltText } = render(<DataList {...DataListProps } />);

  const paginationNumber = screen.getByText(10);
  expect(paginationNumber).toBeInTheDocument();

  const image = getByAltText('flickr'); 
  expect(image).toHaveAttribute('src');
  
});

test('test SearchInput search button', () => {
 
  const searchInputProps = {
    onSearch: () => null
  }

  const component = render(<SearchInput {...searchInputProps } />);

  const button = component.container.querySelector('#search-button');
  expect(button).toBeInTheDocument();

});
