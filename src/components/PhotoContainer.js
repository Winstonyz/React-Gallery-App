import React, { Component } from 'react';
import Photo from './Photo';
import NoResults from './NoResults';

//Stateful components are suited for search form and photo container where data can be managed with state.
class PhotoContainer extends Component {
  render (){
    let photos
    const results = this.props.data
    if(results.length > 0){
      photos = results.map(photos =>
        <Photo url = {`https://live.staticflickr.com/${photos.server}/${photos.id}_${photos.secret}.jpg`} key={photos.id} />
      )}else{
        photos = <NoResults />
      }

      return (
        <div>
          <div className='photo-container'>
            <h2>Search Results</h2>
            <ul>
              {photos}
            </ul>
          </div>
        </div>
      )
  }
}

export default PhotoContainer;