import React from 'react';

const Title = () => {
    return (
        <section id="page-title" className="block">
            <div className="wrapper">
                <div className="row">
                    <div className="col col-1 position-relative">
                        <div className="title">
                            <h1 className="h">Aquila</h1>
                            <div className="title-clone">Art</div>
                        </div>
                        <div className="spacer p-top-lg">
                            <p className="p-large w-75">The Gallery</p>
                        </div>
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