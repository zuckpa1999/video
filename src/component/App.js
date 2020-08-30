import React, { Component } from 'react';
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import youtube from '../apis/youtube'
import VideoDetail from './VideoDetail'
class App extends React.Component {

  state = { videos: [], selectedVideo: null }



  componentDidMount() {

    this.onTermSubmit('cat');

  }
  onTermSubmit = async term => {

    console.log(term)
    const response = await youtube.get('/search', {
      params: {
        q: term
      }


    })
    console.log(response)
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }
  onVideoSubmit = video => {

    this.setState({ selectedVideo: video })


  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="twelve wide column">

              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="four wide column">
              <VideoList videos={this.state.videos} onVideoSubmit={this.onVideoSubmit} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;