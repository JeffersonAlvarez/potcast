import React from 'react';
import Link from 'next/link';

function ListaPodcast(props){
    const {clip}=props
    return(
  
          <Link href={`/podcats?id=${clip.id}`} prefetch key={clip.id}>
        <a className="podcast">
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
        
         </Link>
       
    )
}

export default ListaPodcast;