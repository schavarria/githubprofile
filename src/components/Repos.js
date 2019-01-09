import React, { Component } from 'react';
import { getRepo }from '../Actions/RepoAction'
import {connect} from 'react-redux'
import '../styles/repo.css'

class Repo extends Component {
    componentDidMount (){
        getRepo()
    }
    render() { 
        return ( 
            <div>
                {this.props.repo.map(item => (
                    <a key={item.id} href={item.html_url}>
                        <div className="infoCon"> 
                        <p className="name">{item.name}</p>
                        <p className="language"> {item.language}</p>
                        </div> 
                     </a>
                ))}
            </div>
         );
    }
}

function mapStateToProps (appState){
    return{
        repo: appState.repoReducer.repo
    }
}
 
export default connect(mapStateToProps)(Repo) ;