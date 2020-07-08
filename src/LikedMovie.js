import React, {Component} from 'react'

class LikedMovie extends Component {
  render(){
    const users = this.props.users;
    const favMovieProfile = this.props.favProfiles;
    
    return(
      <div>
        <p>Liked By:</p>
        <ul>
      		{favMovieProfile.map(profile => 
              {
      			const user = users[profile.userID-1];
				return(<li key={user.id}>{user.name}</li>)
              }
    		)}
          
        </ul>
      </div>
    )
  }
}

export default LikedMovie