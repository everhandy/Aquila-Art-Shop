import React, { useEffect, useRef } from 'react';
import Isotope from 'isotope-layout';
import ImagesLoaded from 'imagesloaded';
import PropTypes from 'prop-types';
import GalleryItemsData from '../../galleryItems';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

const Gallery = (props) => {
    const [state, dispatch] = useStoreContext();
    const { cart } = state;
    const galleryRef = useRef(null);
  
    const addToCart = (item) => {
      if (!item._id) {
        console.error('Item does not have an _id property');
        return;
        }
      const itemInCart = cart.find((cartItem) => cartItem._id === item._id);
      if (itemInCart) {
        const newQuantity = parseInt(itemInCart.purchaseQuantity) + 1;
        
        dispatch({
          type: UPDATE_CART_QUANTITY,
          _id: item._id,
          purchaseQuantity: newQuantity
        });

        idbPromise('cart', 'put', {
          ...itemInCart,
          purchaseQuantity: newQuantity
        });
      } else {
        dispatch({
          type: ADD_TO_CART,
          product: { ...item, purchaseQuantity: 1 }
        });
        idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
      }
    };
  
    useEffect(() => {
      const iso = new Isotope(galleryRef.current, {
        itemSelector: '.gallery-item',
        masonry: {
          horizontalOrder: true
        }
      });
  
      const imgLoad = new ImagesLoaded(galleryRef.current);
      imgLoad.on('progress', function () {
        iso.layout();
      });
    }, []);
     
  
    return (
      <div className="gallery">
        <div className="wrapper">
        </div>
        <div className={"gallery-item-wrapper" + props.paddingBottomClass}>
          <div className="gallery-items" ref={galleryRef}>
            {GalleryItemsData && GalleryItemsData.map((item, key) => (
              <div key={key} className="gallery-item active ">
                <div className="img object-fit">
                  <div className="object-fit-cover">
                    <img src={item.imgLink} alt={item.title} />
                  </div>
                </div>
  
                <div className="gallery-hover">
                  <div className="gallery-hover-wrapper">
                    <h3>{item.title}</h3>
                    <button onClick={() => addToCart(item)}>Add to cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  Gallery.propTypes = {
    paddingBottomClass: PropTypes.string
  };
  
  export default Gallery;
