import React, { Component } from 'react'
import User from './User'
import Loading from './Loading'

 class Users extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         users:[
    //             {
    //               "login": "mojombo",
    //               "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
    //               "html_url": "https://github.com/mojombo",
    //             },
    //             {
    //               "login": "defunkt",
    //               "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
    //               "html_url": "https://github.com/defunkt",
    //             },
    //             {
    //               "login": "pjhyett",
    //               "avatar_url": "https://avatars.githubusercontent.com/u/3?v=4",
    //               "html_url": "https://github.com/pjhyett",
                
    //             },{
    //                 "login": "mojombo",
    //                 "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
    //                 "html_url": "https://github.com/mojombo",
    //               },
    //               {
    //                 "login": "defunkt",
    //                 "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
    //                 "html_url": "https://github.com/defunkt",
    //               },
    //               {
    //                 "login": "pjhyett",
    //                 "avatar_url": "https://avatars.githubusercontent.com/u/3?v=4",
    //                 "html_url": "https://github.com/pjhyett",
                  
    //               }
    //         ]
    //     }
    // }
  render() {
    if(this.props.loading){
      //loading true ise Loading componenti gösterilsin 
      //değil ise User componenti
      return <Loading/> 
    }else{
      return (
        <div className='container mt-3'>
            <div className="row">
            {this.props.users.map((user,index)=>{
                   return <User user={user} key={index} />
              })}
            </div>
          </div>
        )
    }
  
  }
}

export default Users
