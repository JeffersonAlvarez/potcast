import React from 'react';
import Link from 'next/link';
import slug from '../helpers/slug'

function ListaPodcast(props){
    const {clip,onPress}=props
    return(
  
      
        <a className="podcast" href={`/${slug(clip.channel.title)}.${clip.channel.id}/${slug(clip.title)}.${clip.id}`} 
        onClick={(event) => onPress(event,clip) }>
            <img src={clip.urls.image} alt="" />
            <h3>{clip.title}</h3>
            <div className="meta">
                {Math.ceil(clip.duration / 60)} minutes
    </div>
    <style jsx>{`                   
       .podcast img{
                 width:100%;
             } 
             a{
                 text-decoration:none;
             }   
             .meta{
                 float:left;
                 font-size:.7em;
                 color:black
             }  
             h3{
                 font-size:.7em;
                 color:black;
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
        </a >
        
   
       
    )
}

export default ListaPodcast;