import {PostType} from '../posttype';
import React from 'react'

export const Card: React.FC<PostType> = ({owner, text, image}) => {
    return (
    <div className="card">
        <div className="card-header">
            <img src={owner.picture} alt="User Image"/>
            <h3>{owner.firstName} {owner.lastName}</h3>
        </div>
        <div className="card-body">
            <p>
                {text}
            </p>
        </div>
        <div className="expander">
            <img src={image} alt="Post Image"/>
            <div className="card-body-full">
                <p>
                    {text}
                </p>
            </div>
            <a href="" className="show-more">...Mas</a>
            <a href="" className="">^</a>
        </div>
    </div>
    )
}