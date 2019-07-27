import React from 'react';

class Search extends React.Component {
    render(){
        return (
            <div>
                <nav className="nav-search">
                    <div className="nav-wrapper">
                        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                        <a id="logo-container" className="left" href="#" style={{color:"black", marginLeft:"10px"}}>
                            Female Daily
                        </a>
                        <a href="#" className="right" style={{backgroundColor:"red", textAlign:"center", padding:"0px 32px"}}>Login / Sign Up</a>
                        <form className="container">
                            <input type="text" placeholder="Search.." name="search" />
                        </form>
                    </div>
                </nav>
                <nav className="nav-search2">  
                    <div className="nav-wrapper">
                    <div style={{justifyContent:"center", display:"flex", backgroundColor:"white"}}>
                        <ul class="right hide-on-med-and-down">
                            <li style={{color:"black", marginRight:"15px"}}>SKIN CARE</li>
                            <li style={{color:"black", marginRight:"15px"}}>MAKE UP</li>
                            <li style={{color:"black", marginRight:"15px"}}>BODY</li>
                            <li style={{color:"black", marginRight:"15px"}}>HAIR</li>
                            <li style={{color:"black", marginRight:"15px"}}>FRAGNANCE</li>
                            <li style={{color:"black", marginRight:"15px"}}>NAILS</li>
                            <li style={{color:"black", marginRight:"15px"}}>TOOLS</li>
                            <li style={{color:"black", marginRight:"15px"}}>BRANDS</li>
                        </ul>
                    </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Search;















// import React from 'react';

// class Search extends React.Component {
//     render(){
//         return (
//             // <div>
//                 <nav className="nav-search">
//                     <div className="nav-wrapper">
//                         <a id="logo-container" className="left" href="#" style={{color:"black", marginLeft:"10px"}}>
//                             Female Daily
//                         </a>
//                         <a href="#" className="right" style={{backgroundColor:"red", textAlign:"center", padding:"0px 32px"}}>Login / Sign Up</a>
//                         <form className="container">
//                             <input type="text" placeholder="Search.." name="search" />
//                         </form>
//                     </div>
//                 </nav>
//             // </div>
//                 // <nav className="white" role="navigation">
//                 //     <div>
//                 //         <a id="logo-container" href="#" className="brand-logo" style={{color:"black", marginLeft:"10px"}}>
//                 //             {/* <i className="large material-icons" style={{marginLeft:"10px"}}>
//                 //                 menu
//                 //             </i>  */}
//                 //             Female Daily
//                 //         </a>
                        
                        
//                 //         <ul className="right hide-on-med-and-down">
//                 //             <li><a href="#" style={{backgroundColor:"red"}}>Login / Sign Up</a></li>
//                 //         </ul>

//                 //         <ul id="nav-mobile" className="sidenav" style={{transform:"translateX(-105%)"}}>
//                 //             <li><a href="#" >Menu Samping</a></li>
//                 //         </ul>
//                 //         <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
//                 //     </div>
//                 // </nav>
//             // <nav className ="white" >
//             //         <ul className="left">
//             //             <li className="brand-logo" style={{color:"black"}}>Female Daily</li>
//             //         </ul>
//             //         <ul className="right">
//             //             <li><a className="waves-effect waves-light btn">Login / Sign Up</a></li>
//             //         </ul>
//             //         <form className="container">
//             //             <div className="input-field">
//             //                 <input id="search" type="search" required />
//             //                 <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
//             //                 <i className="material-icons">close</i>
//             //             </div>
//             //         </form>
//             // </nav>  
//         )
//     }
// }

// export default Search;