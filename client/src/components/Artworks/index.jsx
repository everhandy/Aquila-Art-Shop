import React from 'react';
import Gallery from '../Gallery/index';

const Artworks = () => {
    return (
        <section id="my-works" className="block spacer m-top-xl">
            <div className="wrapper">
                <h2>
                    <span >Art <span className="line">Works</span></span>
                </h2>
            </div>

            <Gallery paddingBottomClass="" />
        </section>
    );
};

export default Artworks;
