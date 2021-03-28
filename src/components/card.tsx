import {PostType} from '../posttype';
import $ from "jquery";
import React from 'react'
import { idText } from 'typescript';

export const Card: React.FC<PostType> = ({owner, text, image}) => {
    const handleClick = (event:any) => {        
        $(`#${owner.id}`).css({
            height: "auto"
        });
        $(`#${owner.id} > img`).animate({
            height: "200px"
        }, 500, () => {});

        $(`#card-body-full-${owner.id}`).animate({
            height: "100px"
        }, 500, () => {});

        $(`#show-more-${owner.id}`).css({
            visibility: "hidden"
        });

        $(`#show-less-${owner.id}`).css({
            visibility: "visible"
        });
    }

    const handleClose = (event:any) => {
        $(`#${owner.id}`).css({
            height: "0px"
        });
        $(`#${owner.id} > img`).animate({
            height: "0px"
        }, 50, () => {});

        $(`#card-body-full-${owner.id}`).animate({
            height: "0px"
        }, 50, () => {});

        $(`#show-more-${owner.id}`).css({
            visibility: "visible"
        });

        $(`#show-less-${owner.id}`).css({
            visibility: "hidden"
        });
    }
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
            <div className="expander" id={owner.id}>
                <img src={image} alt="Post Image"/>
                <div className="card-body-full" id={`card-body-full-${owner.id}`}>
                    <p>
                        {text}
                    </p>
                </div>
            </div>
            <div className="card-footer">
                <a href="#" onClick={handleClick} id={`show-more-${owner.id}`} className="show-more">...Show more</a>
                <br/>
                <a href="#"  onClick={handleClose} id={`show-less-${owner.id}`} className="show-less">^</a>
            </div>                    
        </div>
    )
}