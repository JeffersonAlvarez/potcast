import React from 'react';

function ListaSeries(props){
    const {serie}=props
    return(
        <div className="podcast">
        <img src={serie.urls.logo_image.original} alt="" />
        {serie.title}
        <style jsx>{`                   
              
                 
                    .podcast img{
                        width:100%;
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
    )
}


export default ListaSeries;