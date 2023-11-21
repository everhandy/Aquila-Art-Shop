import React, { Component } from 'react';
import Isotope from 'isotope-layout';
import ImagesLoaded from 'imagesloaded';
import PropTypes from 'prop-types';
import GalleryItemsData from '../../galleryItems';

class Gallery extends Component {
    componentDidMount() {
        const galleryItemsName = this.grid;
        const galleryItemName = '.gallery-item';

        const iso = new Isotope(galleryItemsName, {
            itemSelector: galleryItemName,
            masonry: {
                horizontalOrder: true
            }
        });

        const imgLoad = new ImagesLoaded(galleryItemsName);

        imgLoad.on('progress', function (instance, image) {
            iso.layout();
        });
    }

    render() {
        return (
            <div className="gallery">
                <div className="wrapper">
                </div>
                <div className={"gallery-item-wrapper" + this.props.paddingBottomClass}>
                    <div className="gallery-items" ref={(c) => this.grid = c}>
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
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

Gallery.propTypes = {
    seeMore: PropTypes.string,
    paddingBottomClass: PropTypes.string
};

export default Gallery;
