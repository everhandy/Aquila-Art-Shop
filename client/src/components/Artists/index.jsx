import React from 'react';
import Artist from '../../artists';

const Artists = () => {
    return (
        <section id="artist" className="block spacer p-top-xl">
            <div className="wrapper">
                <h2 className="text-right">
                    <a>
                        <span className="line linea">Artists</span>
                    </a>
                </h2>
            </div>

            <div className="bg-gray-light ptb-artist">
                <div className="wrapper">
                    <div className="row gutter-width-lg">
                        {Artist && Artist.map((item, key) => (
                            <div key={key} className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="card card-post">
                                    <div className="card-top position-relative">
                                        <div className="img object-fit overflow-hidden">
                                            <div className="object-fit-cover transform-scale-h">
                                                <img className="card-top-img" src={item.imgLink} alt={item.imgAlt} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Artists;
