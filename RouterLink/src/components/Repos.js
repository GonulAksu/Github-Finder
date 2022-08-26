import React, { Component } from 'react'
import Repo from './Repo'
 class Repos extends Component {
    
  render() {
    return (

        this.props.repos.map((repo,index)=>{
            return <Repo repo={repo} key={index} />
       })
    )
  }
}
export default Repos

