import React from 'react'
import { Advertisement } from 'semantic-ui-react';
import WebTorrent from 'webtorrent';
import './VideoPlayer.css';
import moment from 'moment';
const torrentId = 'https://webtorrent.io/torrents/sintel.torrent'
class VideoPlayer extends React.Component{
    constructor(props){
        super(props);
        this.webTorrent = new WebTorrent();
        this.state = {
            progress: 0,
            numPeers: '',
            downloaded: 0,
            total: 0,
            uploadSpeed: 0,
            downloadSpeed: 0,
            remaining: 0,
            percent: 0,
            file: null,
            totalTip: "加载中..."
        }
    }

    onProgress = (torrent) => {
        if(torrent){
            console.log("种子数量", torrent.numPeers);
            
            let numPeers = torrent.numPeers + (torrent.numPeers === 1 ? ' peer' : ' peers');
            this.setState({
                numPeers,
                totalTip: ''

            });
            let percent = Math.round(torrent.progress * 100 * 100) / 100;
            this.setState({
                percent
            })
            let total = this.prettyBytes(torrent.length)
            this.setState({
                    total
            });
            let downloadSpeed = this.prettyBytes(torrent.downloadSpeed) + '/s'
            this.setState({
                downloadSpeed
            });

            let uploadSpeed = this.prettyBytes(torrent.uploadSpeed)+ '/s';
            this.setState({
                uploadSpeed
            });

            let remaining
            if (torrent.done) {
                remaining = 'Done.'
            } else {
                remaining = moment.duration(torrent.timeRemaining / 1000, 'seconds').humanize()
                remaining = remaining[0].toUpperCase() + remaining.substring(1) + ' remaining.'
            }
            this.setState({
                remaining
            });



        }
       

    }
    prettyBytes = (num) => {
        var exponent, unit, neg = num < 0, units = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        if (neg) num = -num
        if (num < 1) return (neg ? '-' : '') + num + ' B'
        exponent = Math.min(Math.floor(Math.log(num) / Math.log(1000)), units.length - 1)
        num = Number((num / Math.pow(1000, exponent)).toFixed(2))
        unit = units[exponent]
        return (neg ? '-' : '') + num + ' ' + unit
    }

    getFileFromTorrent = (torrent) => {
        let file = torrent.files.find((file) =>{
            return file.name.endsWith('.mp4')
          })
  
          // Stream the file in the browser
          let output = this.refs.output;
          file.appendTo(output,{
              autoplay: true
          });
          
          
         
    }
    onDone=(torrent)=>{
        this.refs.videoRoot.className += ' is-seed';
        this.onProgress(torrent);
    }

    watchDownloading=(torrent)=>{
        this.getFileFromTorrent(torrent);
        setInterval(()=>this.onProgress(torrent), 500)
        this.onProgress(torrent);
        torrent.on('done', ()=>this.onDone(torrent))
        
    }
    componentDidMount(){
        this.webTorrent.add(torrentId, torrent=>this.watchDownloading(torrent));
        

    }
    render(){
        return (
            <div ref="videoRoot">
                <Advertisement unit='netboard' test={this.state.totalTip} 
                    children={
                        <div id="hero">
                            <div id="output" ref="output">
                                <div id="progressBar" style={{width: this.state.percent+"%"}} ref='progressBar'></div>
                                
                            </div>
                            <div id="status">
                                <div>
                                <span className="show-leech">Downloading </span>
                                <span className="show-seed">Seeding </span>
                                <code>
                                    <a id="torrentLink" href="https://webtorrent.io/torrents/sintel.torrent">sintel.torrent</a>
                                </code>
                                <span className="show-leech"> from </span>
                                <span className="show-seed"> to </span>
                                <code id="numPeers">{this.state.numPeers}</code>.
                                </div>
                                <div>
                                <code id="downloaded"></code>
                                of <code id="total">{this.state.total}</code>
                                — <span id="remaining">{this.state.remaining}</span><br/>
                                &#x2198;<code id="downloadSpeed">{this.state.downloadSpeed} b/s</code>
                                / &#x2197;<code id="uploadSpeed">{this.state.uploadSpeed} b/s</code>
                                </div>
                            </div>
                        </div>
                    }
                />
                
            </div>
        )
    }
}

export default VideoPlayer