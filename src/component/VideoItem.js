import React from 'react'
import './video-item.css'
export const VideoItem = ({ video, onVideoSubmit }) => {
    return (
        <div onClick={() => onVideoSubmit(video)} className="item videoitem">
            <img alt="video.snippet.title" className="ui image" src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    )
}
