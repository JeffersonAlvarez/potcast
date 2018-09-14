import React, { Component } from 'react';
import Link from 'next/link'

import VistaPodcats from '../components/VistaPodcats';
import Layout from '../components/Layout';
class podcats extends Component {
    static async getInitialProps({ query }) {
        let id = query.id
        let fecthClip = await fetch(`https://api.audioboom.com/audio_clips/${id}.mp3`)
        let clip = (await fecthClip.json()).body.audio_clip
        return { clip }
    }
    render() {
        const { clip } = this.props
        return (
            <Layout title={clip.title}>
            <VistaPodcats clip={clip} />            
               
            </Layout>
        );
    }
}


export default podcats;