import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';

class Layout extends Component {
    render() {
        const {children,title}=this.props
        return (
            <div>
                <Head>
                    <title>{title}</title>
                </Head>
                 <header><Link href="/"><a>Potcast</a></Link></header>          
                    {children}
                 <style jsx>{`                   
                    header{
                        color:#fff;
                        background:#8756ca;
                        padding:15px;
                        text-align:center;
                        }
                        header a{
                            color:#fff;
                            text-decoration:none;
                        }

                        `}
                </style>
            </div>
        );
    }
}

export default Layout;