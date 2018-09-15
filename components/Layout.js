import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';


Router.onRouteChangeStart = (url) => {
    NProgress.start()
  }
  Router.onRouteChangeComplete = () => NProgress.done()
  Router.onRouteChangeError = () => NProgress.done()

class Layout extends Component {
    render() {
        const {children,title}=this.props
        return (
            <div>
                <Head>
                    <title>{title}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <html lang="es" />
                </Head>
                 <header><Link href="/"><a><h3 style={{fontSize:25}}>Potcast</h3></a></Link></header>          
                    {children}
                    <footer>
                      <a>  <h3 style={{}}>Create by Jefferson Alvarez</h3></a>
                        <h3 style={{}}>Trabaja en <a href="https://www.btaapps.com" target="_blank" >www.Btaapps.com</a></h3>
                    </footer>
                 <style jsx>{`                   
                    header{
                        color:#fff;
                        background:#08244b;
                        padding:15px;
                        text-align:center;
                        }
                        header a{
                            color:#fff;
                            text-decoration:none;
                        }
                        footer a{
                          color:#ffbd0d;
                            text-decoration:none;
                        }
                        h3{
                          font-size:1em;
                          font-style:italic;
                          line-height:.5em;
                        }
                        footer{
                          width:100%;
                          height:9vh;
                        color:#fff;
                        background:#08244b;
                        padding:1px;
                        text-align:center;
                        position:relative;
                        bottom:0;
                        left:0;
                        right:0;
                        
                        display:block;
                     
                        }
                        

                        `}
                </style>
                <style jsx global>{`
                  body{
                    
                  }
                #nprogress {
                    pointer-events: none;
                  }
                  
                  #nprogress .bar {
                    background: #29d;
                  
                    position: fixed;
                    z-index: 1031;
                    top: 0;
                    left: 0;
                  
                    width: 100%;
                    height: 8px;
                  }
                  
                  /* Fancy blur effect */
                  #nprogress .peg {
                    display: block;
                    position: absolute;
                    right: 0px;
                    width: 100px;
                    height: 100%;
                    box-shadow: 0 0 10px #29d, 0 0 5px #29d;
                    opacity: 1.0;
                  
                    -webkit-transform: rotate(3deg) translate(0px, -4px);
                        -ms-transform: rotate(3deg) translate(0px, -4px);
                            transform: rotate(3deg) translate(0px, -4px);
                  }
                  
                  /* Remove these to get rid of the spinner */
                  #nprogress .spinner {
                    display: block;
                    position: fixed;
                    z-index: 1031;
                    top: 15px;
                    right: 15px;
                  }
                  
                  #nprogress .spinner-icon {
                    width: 20px;
                    height: 20px;
                    box-sizing: border-box;
                  
                    border: solid 3px transparent;
                    border-top-color: #29d;
                    border-left-color: #29d;
                    border-radius: 50%;
                  
                    -webkit-animation: nprogress-spinner 400ms linear infinite;
                            animation: nprogress-spinner 400ms linear infinite;
                  }
                  
                  .nprogress-custom-parent {
                    overflow: hidden;
                    position: relative;
                  }
                  
                  .nprogress-custom-parent #nprogress .spinner,
                  .nprogress-custom-parent #nprogress .bar {
                    position: absolute;
                  }
                  
                  @-webkit-keyframes nprogress-spinner {
                    0%   { -webkit-transform: rotate(0deg); }
                    100% { -webkit-transform: rotate(360deg); }
                  }
                  @keyframes nprogress-spinner {
                    0%   { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                  }
                `}

                </style>
            </div>
        );
    }
}

export default Layout;