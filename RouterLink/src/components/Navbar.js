
import React, { Component } from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

 class Navbar extends Component {
  render() {
    return (
      <div>
            <nav className="navbar bg-primary navbar-dark navbar-expand-sm">
                <div className="container">
                <Link to="/" className='navbar-brand'>
                    <i className={this.props.icon}> </i> 
                    {this.props.title}
                </Link>
                
                <div className="collapse navbar-collapse"></div>
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <Link to="about" className='nav-link'>About</Link>
                      </li>
                    </ul>
                </div>
            </nav>
      </div>
    )
  }
}

//default Props !!!!!!!
//proptypes !!!!!!
/**
 * Ana Componentden gönderilen props parametreleri yerine default Porps ile propslara deger verilebilir
 * ancak ikisi aynı anda yapılırsa component içerisinde gönderilen deger defaultpropsu ezer !!!
 * proptypes ilede props paremetresinin tipini ve required özelliğini kontrol edebiliriz
 * bu tanımlara uymuyorsa hata verir console da 
 */
Navbar.defaultProps={
    title:"Github"
}
Navbar.propTypes={
    title:propTypes.string.isRequired,
    icon:propTypes.string.isRequired
}


export default Navbar

