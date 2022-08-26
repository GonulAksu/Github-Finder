
import React, { Component, Fragment } from 'react';
import Navbar from './Navbar';
// import User from './User';
import Users from './Users';
import Search from './Search';
import axios from 'axios';
import Alert from './Alert';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';
import About from './About';
import Userdetails from './Userdetails';

//npm axios paketide fetch api gibi hazır promise yapısı sunar
export class App extends Component {
    constructor(props) {
        super(props);
        this.UserSearch = this.UserSearch.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
        this.setAlert = this.setAlert.bind(this);
        this.getUser = this.getUser.bind(this);
        this.getuserRepos=this.getuserRepos.bind(this);

        this.state = {
            loading: false,
            users: [],
            user: {},
            userrepos: [],
            alert: null
        }
    }

    //artık service deki tüm kaynağı ekranda göstermektense 
    //kaynak içinde aranan istenilen kısmı gösterelim

    // componentDidMount(){
    //         this.setState({
    //             loading:true
    //         });

    //         setTimeout(() => {
    //             axios.get("https://api.github.com/users").then(
    //             res=>{
    //                 //30 tane obje içeren diziyi 
    //                 // console.log(res.data);
    //                 this.setState({users:res.data,loading:false})
    //             }
    //         )

    //         }, 1000);

    // }

    UserSearch(keyword) {
        this.setState({
            loading: true
        })
        setTimeout(() => {
            axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
                res => {
                    // console.log(res.data.items);
                    this.setState({ users: res.data.items, loading: false })
                }
            )
        }, 1000);
  
    }
    getUser(username) {
        // console.log(username);
        // username'e göre alıcaz(search sayfasında kullanıcılar ekrana geldikten sonra go profile butonuna bastığımızda kullanıcı details sayfasına yönlendirileceğiz)
        this.setState({ loading: true });
        setTimeout(() => {
            //kaynagımıza apisayfasından baktık
            axios.get(`https://api.github.com/users/${username}`).then(
                res => {
                    // console.log(res.data);
                    this.setState({ user: res.data, loading: false });
                }
            )

        }, 1000);
    }
    getuserRepos(username) {
        // console.log(username);
        this.setState({ loading: true })
        setTimeout(() => {
            axios.get(`https://api.github.com/users/${username}/repos`).then(
                res => {
                    this.setState({ userrepos: res.data, loading: false });
                }
            )

        }, 1000);

    }
    clearSearch() {
        this.setState({ users: [] })
    }
    setAlert(msg, type) {
        this.setState({
            alert: { msg, type }
        })
        setTimeout(() => {
            this.setState({
                alert: null
            })
        }, 2000);
        // console.log(this.state.alert);
    }

    render() {
        return (
            <BrowserRouter>
                <Navbar icon="fa-brands fa-github" title="Github Finder" />
                <Alert alert={this.state.alert} />
                <Switch>
                    <Route exact path="/" render={
                        props => (
                            <>
                                <Search UserSearch={this.UserSearch} clearSearch={this.clearSearch} shwclearbtn={this.state.users.length > 0 ? true : false}
                                    alert={this.setAlert} />
                                <Users users={this.state.users} loading={this.state.loading} />
                            </>
                        )

                    } />

                    <Route path="/about" component={About} />
                    <Route path="/users/:login" render={
                        props => (
                            <Userdetails
                                {...props}
                                getUser={this.getUser}
                                user={this.state.user}

                                getuserRepos={this.getuserRepos}
                                userrepos={this.state.userrepos}

                                loading={this.state.loading} />
                        )
                    } />

                </Switch>
            </BrowserRouter>
        )
    }
}

export default App
