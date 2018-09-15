import React, { Component } from 'react';
import Error from './_error';
import Layout from '../components/Layout';
import ListaPodcast from '../components/ListaPodcast';
import ListaSeries from '../components/ListaSeries';
import PodcatsPlayer from '../components/PodcatsPlayer';
class Channel extends Component {
    state = {
        openPodcats: null
    }

    openPodcats = (event, podcast) => {
        event.preventDefault()
        this.setState({
            openPodcats: podcast
        })
    }

    onClose=(event)=>{
        this.setState({
            openPodcats: null
        })
    }
    static async getInitialProps({ query, res }) {   
        let idChannel = query.id
        try {
            let [reqChannel, reqAudio, reqSeries] = await Promise.all([
                fetch(`https://api.audioboom.com/channels/${idChannel}`),
                fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
                fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)

            ])

            if (reqChannel.status >= 400) {
                res.statusCode = reqChannel.status
                return { rechannel: null, reqAudio: null, reqSeries: null, statusCode: reqChannel.status }

            }

            let dataChannel = await reqChannel.json()
            let channel = dataChannel.body.channel

            let datAudio = await reqAudio.json()
            let audioClips = datAudio.body.audio_clips

            let datSeries = await reqSeries.json()
            let series = datSeries.body.channels

            return { channel, audioClips, series, statusCode: 200 }
        } catch (e) {
            return { channel: null, audioClips: null, series: null, statusCode: 503 }
        }
    }

    render() {
        const { channel, audioClips, series, statusCode } = this.props
        const { openPodcats } = this.state
        if (statusCode !== 200) {
            return <Error statusCode={statusCode} />
        }

        return (
            <Layout title={channel.title}>
                <div>
                    <picture>
                        <div style={{ backgroundImage: `url(${channel.urls.banner_image.original})` }}></div>
                    </picture>
                    {openPodcats && <div className="modal">
                    <PodcatsPlayer clip={openPodcats} onClose={this.onClose} />
                        </div>}
                    <h2>Series</h2>
                    <div className="channels">
                        {series.map((serie) => (
                            <ListaSeries serie={serie} />
                        ))}
                    </div>
                    <h2>Ultimos Potcast</h2>
                    <div className="channels">
                        {audioClips.map((clip) => (
                            <ListaPodcast clip={clip} onPress={this.openPodcats} />
                        ))}
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
                        text-align:center;
                    }
                    .podcast img{
                        width:100%;
                    }
                    h2{
                        font-size:1.5em;
                       text-align:center;
                       
                    }
                    a{
                        text-decoration:none;
                        text-align:center;
                    }
                    picture div {
                     
                       text-align:center;
                        width: 350px;
                        height: 350px !important;
                        margin: 4px auto ;
                       
                    }
                    .modal{
                        position:fixed;
                        top:0;
                        left:0;
                        right:0;
                        bottom:0;
                        background:rgba(0,0,0,0.5);
                        z-index:9999;
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
            </Layout>
        );
    }
}

export default Channel;