import React, { Component } from 'react';
import {Link} from '../routes';
import slug from '../helpers/slug';

function ChannelGrid(props){
  
        const {channels}=props
        return (
            <div>
                   <div className="channels">
                    {
                        channels.map((chanel) =>
                            <Link route="channel" params={{
                                slug:slug(chanel.title),
                                id:chanel.id
                            }} prefetch>
                                <a className="channel">
                                    <img src={chanel.urls.logo_image.original} alt="" />
                                    <h3>{chanel.title}</h3>
                                    
                                </a>
                            </Link>
                        )
                    }
                </div>
                <style jsx>{`    
                .channel{
                        display:block;                    
                        border-radius:3px;
                        box-shadow:0px 2px 6px rgba(0,0,0,0.15);
                        
                    }
                    .channels{
                        display:grid;
                        grid-gap:15px;
                        padding:15px;
                        grid-template-columns:repeat(auto-fill, minmax(160px, 1fr));
                    }
                    .channel img{
                        width:100%;
                    }
                    h3{
                        font-size:.7em;
                        color:#000;
                       
                    }
                    a{
                        text-decoration:none;
                        text-align:center;
                    }
                        `}
                </style>
                <style jsx global>
                    {`                  
                        body {
                            margin:0 auto;
                            font-family:system-ui;
                        }
                        `}
                </style>
            </div>
        );
    
}

export default ChannelGrid;