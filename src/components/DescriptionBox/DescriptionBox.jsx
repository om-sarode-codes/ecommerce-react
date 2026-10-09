
import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
    return (
        <div className="descriptionbox">

            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">
                    Description
                </div>

                <div className="descriptionbox-nav-box fade">
                    Reviews (122)
                </div>
            </div>

            <div className="descriptionbox-description">
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minima ullam accusantium maiores aspernatur commodi modi
                    aperiam necessitatibus sit dignissimos eius.
                </p>

                <p>
                    A facere praesentium similique maiores nobis consequatur
                    asperiores repudiandae non!
                </p>
            </div>

        </div>
    );
};

export default DescriptionBox;

