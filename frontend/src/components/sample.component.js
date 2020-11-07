import React, { useState } from 'react';

const Sample = props => {

    return (
        <div className='centered'>
            <h1>
                {props.sample.title}
            </h1>
            <img class="big" src={props.sample.img} alt="project image" />
            {props.sample.description.map((desc)=>(
                <h5>
                    {desc}
                </h5>
            ))}
        </div>
    )
}
export default Sample;