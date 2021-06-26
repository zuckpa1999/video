import React from 'react'
import { VideoItem } from './VideoItem'


const VideoList = ({ videos, onVideoSubmit }) => {

    const renderedList = videos.map((v) => { return <VideoItem video={v} key={v.id.VideoId} onVideoSubmit={onVideoSubmit} /> })

    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )
}

export default VideoList