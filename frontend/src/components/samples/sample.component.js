import React, { useState } from 'react';
import Slider from 'infinite-react-carousel';
import CustomButton from '../../shared/elements/button/custom-button.component';


const Sample = props => {
    const [showDetail, setShowDetail] = useState(false);

    return (
        <div className='centered'>
            <div className="sample-banner">
                <h2>
                    {props.sample.title}
                </h2>
            </div>
            <div className="pc-only size-holder middle">
                <div className="grid-split middle size-holder-desc">
                    {showDetail ?
                        <div className="shadow">
                            <CustomButton
                                buttonStyle="blue"
                                action={() => { setShowDetail(!showDetail) }}
                                label="Hide Detail"
                            />
                        </div>
                        :
                        <div className="shadow">
                            <CustomButton
                                buttonStyle="blue"
                                action={() => { setShowDetail(!showDetail) }}
                                label="Show Detail"
                            />
                        </div>
                    }
                    <div></div>
                    <a href={props.sample.codeLink} className="shadow">
                        <CustomButton
                            buttonStyle="green"
                            action={() => { setShowDetail(!showDetail) }}
                            label="See The Code"
                        />
                    </a>
                </div>
                {showDetail ?
                    <Slider dots>
                        {props.sample.images.map(image => (
                            <div>
                                <img src={image.image} key={image.desc} alt={image.desc} className="img-carousel" />
                                <h5>{image.desc}</h5>
                            </div>
                        ))}
                    </Slider>
                    :
                    <div>
                        <img className="big" src={props.sample.img} alt="projectImage" />
                    </div>
                }
            </div>
            <div className="mobile-only">
                <Slider dots>
                    {props.sample.images.map(image => (
                        <div>
                            <img src={image.image} key={image.desc} alt={image.desc} className="img-carousel" />
                            <h5>{image.desc}</h5>
                        </div>
                    ))}
                </Slider>
                <div className="grid-split">
                    <div></div>
                    <a href={props.sample.codeLink} className="shadow">
                        <CustomButton
                            buttonStyle="green"
                            action={() => { setShowDetail(!showDetail) }}
                            label="See The Code"
                        />
                    </a>
                </div>
            </div>
            {props.sample.description.map((desc) => (
                <div key={desc} className="size-holder-desc middle">
                    <h5>
                        {desc}
                    </h5>
                </div>
            ))}
        </div>
    )
}
export default Sample;