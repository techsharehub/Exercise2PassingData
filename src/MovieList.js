import React, {Component} from 'react';
import LikedMovie from './LikedMovie.js';

class  MovieList extends Component {
  render() {
    const movie = this.props.movie;
    const favProfiles = this.props.favProfiles;
    const users = this.props.users;
    let content = "";
    if (favProfiles.length === 0) {
      content = <p>None of the current users liked this movie</p>;
    }
    else {
      content = <LikedMovie favProfiles={favProfiles} users={users}/>;
    }
    return(
     	 <div>
        	<h2>{movie.name}</h2>
      		{content}
		</div>
    )
  }
}

export default MovieList;