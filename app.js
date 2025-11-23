import React from "react";
import ReactDOM from "react-dom/client";
/*
* Header
*  - Logo
*  - Nav
* Body
*  - search  
*  - restarauntContainer
*      -restaraunt Container
          -img 
          -name of res , star Rating ,cusine,delevery time
* Footer
*  -CopyRight
*  -Links
*  -address
*  -contact
*/
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://images.unsplash.com/vector-1739890612737-eac2bdd65b5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMGFwcCUyMGxvZ298ZW58MHx8MHx8fDI%3D" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>contact</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    )
}
const RestarauntCard = () => {
    return (
        <div className="res-card">
            <img className="res-logo" src="https://images.unsplash.com/photo-1642821373181-696a54913e93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJpeWFuaXxlbnwwfHwwfHx8MA%3D%3D" />
            <h3>Nahadi Mandhi</h3>
            <h4>Mandhi,South,Asian</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestarauntCard />
                <RestarauntCard />
                <RestarauntCard />
                <RestarauntCard />
                <RestarauntCard />
                <RestarauntCard />
                <RestarauntCard />
                <RestarauntCard />
                <RestarauntCard />
                <RestarauntCard />
            </div>
        </div>
    )
}


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


