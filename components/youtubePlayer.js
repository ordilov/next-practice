function YoutubePlayer({src}){
    return <iframe id="player" width="853" height="500" src={src} allowFullScreen allow="autoplay"> </iframe>
}

export default YoutubePlayer;