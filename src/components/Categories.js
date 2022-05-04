import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { categories } from '../redux/categories/categories';

const Categories = () => {
  const categoriesValue = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div>
      <button type="button" onClick={() => { dispatch(categories()); }}>Check Status</button>
      <h1>{categoriesValue}</h1>
    </div>
  );
};

export default Categories;
