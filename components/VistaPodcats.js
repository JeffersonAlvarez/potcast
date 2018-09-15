import React, { Component } from 'react';

function VistaPodcats (props){
  
      const {clip}=props
        return (
           
                 <div className="modal">
                    <div className="clip">                      

                        <picture>
                            <div style={{backgroundImage:`url(${clip.urls.image || clip.channel.urls.logo_image.original})`}}></div>
                        </picture>
                        <div className="player">
                            <h3>{clip.title}</h3>
                            <h6>{clip.channel.title}</h6>
                            <audio controls autoPlay={true}>
                                    <source src={clip.urls.high_mp3} type='audio/mpeg' />
                            </audio>
                        </div>
                    </div>
                    <style jsx>{`
                header{
                        color:#fff;
                        background:#8756ca;
                        padding:15px;
                        text-align:center;
                }
        nav {
          background: none;
        }
        nav a {
          display: inline-block;
          padding: 15px;
          color: white;
          cursor: pointer;
          text-decoration: none;
        }
        .clip {
          display: flex;
          height: 100vh;
          width:100%;
          flex-direction: column;
          background: #875 6ca;
          color: white;
        }
        picture {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1;
          flex-direction: column;
          width: auto;
          padding: 10%;          
        
        }
        picture div {
          width: 100%;
          height: 100%;
          background-position: 50% 50%;
          background-size: contain;
          background-repeat: no-repeat;
        }
        .player {
          padding: 30px;
          background: rgba(0,0,0,0.3);
          text-align: center;
          font-size:.1em;
        }
        h3 {
          margin: 0;
          font-size:.5em;
        }
        h6 {
          margin: 0;
          margin-top: 1em;
        }
        audio {
          margin-top: 2em;
          width: 100%;
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
        }
      `}</style>

      <style jsx global>{`
        body {
          margin: 0;
          font-family: system-ui;
          background: white;
        }
      `}</style>
                </div>
           
          
        )
    }


export default VistaPodcats;