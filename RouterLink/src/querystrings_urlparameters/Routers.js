import React from "react";
import ReactDOM from "react-dom";


import { BrowserRouter, Route, Switch ,Link,NavLink} from 'react-router-dom';
//linkleri her iki component tede ekledik ki içeriklerinde gözüksün
//ve bu linkleri adreslerine yönlendirecek olan yapı Route yapısı !!!!!

//a yerine reac-router kütüphanesine ait olan Link yapısınıda kullanabilriiz
//ve linkleri her sayfada göstereceksek component olarak tanımlayıp ana componentlere ekelyebiliriz
//Link'e ek olarak NavLink de var ve extra paremetrelere sahip activeClassName gibi
//active olan linke style.scss de active clasında tanımladığımız özelliklerle ,özellik kazandırabiliriz
//sadece active olan linke class özellikleri tanımlaması için excat paremetresini ekledik
const Nav=()=>(
    <>
     {/* <nav>
       <Link to="/">Home</Link> | 
       <Link to="/contact">Contact</Link>
    </nav> */}

    <nav>
       <NavLink to="/" exact activeClassName="active">Home</NavLink> | 
       <NavLink to="/contact" exact activeClassName="active">Contact</NavLink> |
       <NavLink to="/contact/contactdetails/12" activeClassName="active">ContactDetails</NavLink> |
       <NavLink to="/extra/#items" activeClassName="active">Extra</NavLink>

    </nav>
    </>
);
const Header=()=>(
    <h1>Github Finder</h1>
);

const HomePage = () => (<>
    <div>  Home Page </div>
    {/* <nav>
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
    </nav> */}
   
</>
);
const ContactPage = () => (<>
    <div>Contact Page</div>
    {/* <nav>
       <Link to="/">Home</Link> | 
       <Link to="/contact">Contact</Link>
    </nav> */}
</>
);
const ContactDetailsPage=(props)=>{
    console.log(props);
    return (
        <>
        <div>ContactDetailsPage</div>
        {props.match.params.id}
        </>
        );
    }
const Extra=(props)=>{
        console.log(props);
        return (
            <>
            <div>Extra</div>
            {props.location.hash}
            </>
            );
        }   



const Notfound = () => (<div>Not found</div>);







//BrowserRoter(tarayıcıYönlendirici)kapsayıcı
//Router Her bir linke karşılık gelen yapı
//exact homepage yapısı slash ve contact yapısıda slash ile başlar ve 
//contact sayfasında homepage de döner bunu engellemek için exact parametresini ekledik
//notfound componenti herhangi bir link ile eşleşmediği için her component ile döner
//tarayıcıda aranan link Router'lardan hangisi ile eşleşirse sadece o dönmesi için
//Switch yapısını kullanacağız(Switch programlamada tek bir koşul gerçekleştiği zaman o şarta bağlı sonucu gerçekleştirir)
const routers = (
    <BrowserRouter>
        <Header/>
        <Nav/>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route path="/contact/contactdetails/:id" component={ContactDetailsPage}/>
            <Route path="/extra" component={Extra}/>
            <Route component={Notfound} />
        </Switch>
    </BrowserRouter >
);

export default routers