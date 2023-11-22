import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Title = () => {
    return (
        <section id="page-title" className="block">
            <div className="wrapper">
                <div className="row">
                    <div className="col col-1 position-relative">
                        <div className="title">
                            <h1 className="">Aquila</h1>
                        </div>
                        <TypeAnimation
                            sequence={[
                            'The',
                            1800,
                            'Gallery',
                            1800,
                            ]}
                            wrapper='div'
                            repeat={Infinity}
                            style={{ fontSize: "25px" }}
                            className="p-large w-75"
                         />
                    </div>
                    <div className="col col-2 d-none d-sm-block">
                        <div className="d-flex">
                            <div className="align-self-start w-100">
                                <div className="img object-fit">
                                    <div className="object-fit-cover">
                                        <img src="https://i.imgur.com/AMNkP75.png" className="img-fluid" alt="hero" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Title;
