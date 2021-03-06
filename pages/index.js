import 'isomorphic-fetch';
import React, { Component } from 'react';
import Layout from '../components/Layout';
import ChannelGrid from '../components/ChannelGrid';
import VistaPodcats from '../components/VistaPodcats';

class index extends Component {
    static async getInitialProps(res) {
        try{

        
        let req = await fetch('https://api.audioboom.com/channels/recommended')
        let { body: channels } = await req.json()
        return { channels, statusCode:200 }
        }catch(e){
            res.statusCode=503
            res.statusCode=404
            return { channels:null, statusCode:503 }
        }
    }
    render() {
        const { channels ,statusCode} = this.props

        if(statusCode!==200){
            return <div>Se rompio el server</div>
        }

        return(
         <Layout title="Podcats" >
       
            <ChannelGrid channels={channels}/>
        
            </Layout>
        );
    }
}

export default index;