import React, { Component } from 'react'
import Loading from './Loading'
import Repos from './Repos'

class Userdetails extends Component {
    componentDidMount(){
        //Route üzerinden extra bilgi almak için routedan bu componentde props gönderdik
           this.props.getUser(this.props.match.params.login);
           this.props.getuserRepos(this.props.match.params.login);
    }

  render() {
  const {login,avatar_url,location,html_url,bio,blog,followers,following,public_repos}=this.props.user
    if(this.props.loading){
      return <Loading/>
    }
    return (
     
      <>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <img src={avatar_url} alt="" className="card-img-top" />
                <div className="card-body">
                  <h3 className="card-title">{login}</h3>
                  <p className="card-text"><i className="fa-solid fa-location-crosshairs"></i> {location}</p>
                  <a href={html_url} className='btn btn-primary'>go profile</a>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="card">
                <div className="card-body">
                     {
                      bio&&<>
                      <h3>About</h3>
                      <p>{bio}</p>
                      </>
                     }
                     {
                      blog&&<>
                            <h3>Blog</h3>
                            <p>{blog}</p>

                      </>
                      }
                      <div>
                        <span className="bagde badge-primary m-1">Followers:{followers}</span>
                        <span className="badge badge-danger m-1">Following:{following}</span>
                        <span className="badge badge-warning m-1">Public_repos:{public_repos}</span>
                      </div>
                </div>
                <ul className='list-group list-group-flush'>
                      <Repos repos={this.props.userrepos}></Repos>
                </ul>
               
              </div>

            </div>

          </div>
        </div>
      </>
    )
  }
}
export default Userdetails;
