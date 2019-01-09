import React, { Component } from 'react';
import { getProfile }from '../Actions/ProfileAction'
import {connect} from 'react-redux'
import Repo from './Repos'
import '../styles/profile.css'


class Profile extends Component {
    componentDidMount (){
        getProfile()
    }
    render() { 
        return ( 
            <div className="mainCon">
                <div className="leftProfile">
                    <img src={this.props.profile.avatar_url}/>
                    <h2>{this.props.profile.name}</h2>
                    <p>{this.props.profile.login}</p>
                    <p>{this.props.profile.bio}</p>
                    <p>{this.props.profile.company}</p>
                    <p>{this.props.profile.location}</p>
                    <button className="follow"> Follow</button>
                </div>

               <div className="TopProfile">
                   <div className="dummyCon">
                       <span>Overview </span>
                       <span className="repoSpan">Repositories {this.props.profile.public_repos}</span>
                       <span>Stars {this.props.profile.public_gists}</span>
                       <span>Followers {this.props.profile.followers}</span>
                       <span>Following {this.props.profile.following}</span>
                   </div>
                   <div className="buttonCon">
                       <input type="text" placeholder="Find a Repo...."/>
                       <button>Type All <i class="arrow fa fa-sort-down"></i></button> 
                       <button>Language: All <i class="arrow fa fa-sort-down"></i></button> 
                       <button>New</button>
                   </div>
                   <Repo />
                   </div>
            </div>
         );
    }
}

function mapStateToProps (appState){
    return{
        profile: appState.profileReducer.profile
    }
}
 
export default connect(mapStateToProps)(Profile) ;