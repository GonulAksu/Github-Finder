import { Button } from 'bootstrap';
import React, { Component } from 'react'

class Search extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            keyword: ""
        }
    }

    onChange(e) {
        //onchange eventi inputa her deger girildiğinde çalışır
        // console.log(e.target.value);
        this.setState({
            keyword: e.target.value
        })
    }

    onSubmit(e) {
        // console.log(this.state.keyword);
        //gelen bu bilgiyi api/search ile service üzerinde nasıl arama yapacağımıza bakarak
        //data içerisinde arayacağız
        if(this.state.keyword === ""){
            this.props.alert("lütfen bir anahatar kelime giriniz","warning");
        }
        else{
            this.props.UserSearch(this.state.keyword);
            //arama yaptıktan sonra input içerisini temilemek için state içindeki keyworde boşluk atayacağız
            //ama inputda value özelliğine girilen keyword degeri saklanmış olacak
            this.setState({ keyword: "" })
        }


        e.preventDefault();
    }
    render() {
        return (
            <div>
                <div className="container my-3">
                    <form action="" onSubmit={this.onSubmit}>

                        <div className="input-group">
                            <input onChange={this.onChange} value={this.state.keyword} type="text" className="form-control" />
                            <button type='submit' className='btn btn-primary input-group-append'>search</button>
                        </div>
                            {this.props.shwclearbtn && 
                                <button onClick={this.props.clearSearch} className="btn btn-secondary mt-2">clearSearch</button>
                            }
                    </form>
                </div>
            </div>
        )
    }
}

export default Search
