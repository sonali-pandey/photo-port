import React from "react";
import PhotoList from '../Photolist/index';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery({ currentCategory }) {
  return (
    <section>
      <h1>{ capitalizeFirstLetter(currentCategory.name) }</h1>
      <p>{currentCategory.description}</p>
      <PhotoList category={currentCategory.name}/>
    </section>
  );
}
export default Gallery;