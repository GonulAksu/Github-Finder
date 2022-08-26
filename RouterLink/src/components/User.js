import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class User extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //             id:"73349013",
    //             name: "Gönül Aksu",
    //             login:"GonulAksu",
    //             avatar_url:"https://avatars.githubusercontent.com/u/73349013?v=4",
    //             html_url: "https://github.com/GonulAksu",
    //             public_repos:4,
    //             blog:"https://www.linkedin.com/in/gonul-aksu-63bb7b204/"


    //     }
    // }
    render() {
        // const {name,avatar_url,public_repos,blog,html_url}=this.state;
        const { login, avatar_url, html_url } = this.props.user;
        return (
            
                <div className="col-md-4 col-sm-6 col-lg-3">
                    <div className="card mt-2">
                        <img src={avatar_url} alt="" className='card-fluid' />
                        <div className="card-body">
                            <h5 className="card-title">{login}</h5>
                            <Link to={`/users/${login}`} className="btn btn-primary btn-sm">Go profile</Link>
                        </div>
                    </div>
                 </div>
              
                )
  }
}

                export default User
