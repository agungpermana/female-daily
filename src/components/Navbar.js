import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <div>
            <nav className="nav-search2">  
                <div className="nav-wrapper">
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
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
            <ul class="sidenav" id="mobile-demo">
                <li href="#">SKIN CARE</li>
                <li href="#">MAKE UP</li>
                <li href="#">BODY</li>
                <li href="#">HAIR</li>
                <li href="#">FRAGNANCE</li>
                <li href="#">NAILS</li>
                <li href="#">TOOLS</li>
                <li href="#">BRANDS</li>
            </ul>
        </div>
            // <div>
            //     <nav style={{justifyContent:"center", display:"flex", backgroundColor:"white"}} >
            //         <div className="nav-wrapper">
            //             <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            //             <ul class="right hide-on-med-and-down">
            //                 <li style={{color:"black", marginRight:"15px"}}>SKIN CARE</li>
            //                 <li style={{color:"black", marginRight:"15px"}}>MAKE UP</li>
            //                 <li style={{color:"black", marginRight:"15px"}}>BODY</li>
            //                 <li style={{color:"black", marginRight:"15px"}}>HAIR</li>
            //                 <li style={{color:"black", marginRight:"15px"}}>FRAGNANCE</li>
            //                 <li style={{color:"black", marginRight:"15px"}}>NAILS</li>
            //                 <li style={{color:"black", marginRight:"15px"}}>TOOLS</li>
            //                 <li style={{color:"black", marginRight:"15px"}}>BRANDS</li>
            //             </ul>
            //         </div>
            //     </nav>  
            //     <ul class="sidenav" id="mobile-demo">
            //         <li><a href="#">SKIN CARE</a></li>
            //         <li><a href="#">MAKE UP</a></li>
            //         <li><a href="#">BODY</a></li>
            //         <li><a href="#">HAIR</a></li>
            //         <li><a href="#">FRAGNANCE</a></li>
            //         <li><a href="#">NAILS</a></li>
            //         <li><a href="#">TOOLS</a></li>
            //         <li><a href="#">BRANDS</a></li>
            //     </ul>
            // </div>
        )
    }
}

export default Navbar;