import React from 'react';

const Movieslist = props => {
  console.log(props);

  const renderMovies = movies =>
    movies ? movies.map(item => <div key={item.id}>{item.name}</div>) : null;
  return <div>{renderMovies(props.data.movies)}</div>;
};

export default Movieslist;
