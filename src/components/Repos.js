import React, { Component } from 'react';
import { getRepo }from '../Actions/RepoAction'
import {connect} from 'react-redux'
import '../styles/repo.css'
import 'font-awesome/css/font-awesome.css'

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
                        <p className="language"> <i class="fa fa-circle"></i> {item.language}</p>
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