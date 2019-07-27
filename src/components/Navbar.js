import React from 'react';

class Navbar extends React.Component {
    // componentDidMount(){
    //     window.addEventListener('DOMContentLoaded', function() {
    //         let elems = document.querySelectorAll('.sidenav');
    //         let instances = M.Sidenav.init(elems, options);
    //     });
    // }
    render() {
        return (
            <div>
                <nav style={{justifyContent:"center", display:"flex", backgroundColor:"white"}} >
                    <div className="nav-wrapper">
                        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
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
                </nav>  
                <ul class="sidenav" id="mobile-demo">
                    <li><a href="#">SKIN CARE</a></li>
                    <li><a href="#">MAKE UP</a></li>
                    <li><a href="#">BODY</a></li>
                    <li><a href="#">HAIR</a></li>
                    <li><a href="#">FRAGNANCE</a></li>
                    <li><a href="#">NAILS</a></li>
                    <li><a href="#">TOOLS</a></li>
                    <li><a href="#">BRANDS</a></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;