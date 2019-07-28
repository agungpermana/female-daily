import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actionCreators  from './actions';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Youtube from './Youtube.js';

class Home extends Component {
    constructor(props) {
        super(props);
        let ds = "";
        this.state = {
            ds: ds,
            selected: 0
        }
        // this.menuItems = Menu(list, selected);
    }
    onSelect = key => {
        this.setState({ selected: key });
      }
    componentDidMount() {
        this.props.getDataApi();
    }
    render() {
        const { selected } = this.state;
        if(this.props.loading) {
            return (
                <div>
                    <h1>Loading .....</h1>
                </div>
            )
        } else {
            // console.log('this.props.items : ', this.props.items[`editor's choice`])
                let itemList = this.props.items[`editor's choice`].map((item, index) => {                    
                    return (
                        <div className="box">
                            <div style={{margin:"10px"}}>
                                <div className="editor-card">
                                    <a className="editor-image">
                                        <img src="http://static.femaledaily.com/dyn/70/images/user-pics/8cfa98979828b03949df998669bcca01.jpg" alt={item.product.description}/>
                                    </a>
                                    <div>
                                        <p style={{margin:"1px", fontSize:"12px"}}>{item.editor}</p>
                                        <p style={{margin:"1px", fontSize:"12px"}}>{item.role}</p>
                                    </div>
                                </div>
                                <div className="card" key={index}>
                                    <div className="card-image">
                                        <img src={item.product.image}/>
                                        {/* <span to="/" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></span> */}
                                    </div>
                                    <div className="card-content">
                                        <p><b>Rating: {item.product.rating}</b></p>
                                        <p>{item.product.description.substring(0, 18)}</p>
                                        <p>{item.product.description.substring(19, 28)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })

                let itemListProduct = this.props.items[`editor's choice`].map((item, index) => {                    
                    return (
                        <div className="box">
                            <div style={{margin:"10px"}}>
                                <div className="card" key={index}>
                                    <div className="card-image">
                                        <img src={item.product.image}/>
                                    </div>
                                    <div className="card-content">
                                        <p><b>Rating: {item.product.rating}</b></p>
                                        <p className="left">
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star"></span>
                                        </p><br />
                                        <p>{item.product.description.substring(0, 18)}</p>
                                        <p>{item.product.description.substring(19, 28)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })

                let itemListArticles = this.props.items[`latest articles`].map((item,index) => {
                    return (
                        <div className="container-card-article">
                            <div className="card-image" key={index}>
                                <a>
                                    <img style={{width:"300px"}} src={item.image} alt={item.title}/>
                                </a>
                                <div className="card-content">
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        </div>
                    )
                })

                let itemListReviews = this.props.items[`latest review`].map((item,index) => {
                    return (
                        <div>
                            <div className="card-latest">
                                <a className="left">
                                    <img style={{width:"60px", height:"60px"}} src={item.product.image} alt="" />
                                </a>
                                <a >
                                    <p>{item.product.name}</p>
                                    <p>{item.product.desc}</p>
                                </a>
                                <p style={{borderTop: "1px rgb(196, 196, 196) solid", padding: "0px", margin: "0px"}}></p>
                                <p className="left">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                </p>
                                <p className="right">
                                    <span style={{color:"grey"}}>a few second ago</span>
                                </p>
                                <p className="hyphenate" style={{marginTop:"52px"}}>
                                    {item.comment.substring(0,51)}
                                </p>
                                <p className="hyphenate">
                                    {item.comment.substring(52,93)}
                                </p>
                                <p className="hyphenate">
                                    {item.comment.substring(94,138)}
                                </p>
                            </div>
                            <div className="review-card">
                                <a className="editor-image">
                                    <img src="http://static.femaledaily.com/dyn/70/images/user-pics/8cfa98979828b03949df998669bcca01.jpg" alt={item.product.description}/>
                                </a>
                                <div className="review-card-user">
                                    <p>{item.user}</p>
                                </div>
                            </div>
                        </div>
                        // <div className="card horizontal" key={index} style={{margin:"5px", width:"310px"}}>
                        //     <div className="card-image">
                        //         <img style={{width:"60px", height:"60px"}} src={item.product.image}/>
                        //     </div>
                        //     <div class="card-stacked">
                        //         <div className="card-content">
                        //             <p><b>{item.product.name}</b></p><br />
                        //             <p>{item.product.desc}</p>
                        //         </div>
                        //     </div>
                        // </div>
                    )
                })

                return (
                    <div>
                        <div className = "container">
                            <div id="index-banner2" className="parallax-container2" >
                                <div className="section no-pad bot">
                                    <div className="container" style={{justifyContent:"center", display:"flex", marginBottom:'10px'}}>
                                        <div >
                                            <p>970x50</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="index-banner3" className="parallax-container3">
                                <div className="section no-pad bot">
                                    <div className="container" style={{justifyContent:"center", display:"flex"}}>
                                        <p>970x250</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h5>Editor's Choice</h5>
                                <h5 style={{color:'grey'}}>Curated with love</h5>
                            </div>
                        </div>
                        <ScrollMenu data={itemList} selected={selected} />
                        <div className = "containter">
                            <div id="index-banner4" className="parallax-container4">
                                <div className="section no-pad bot">
                                    <div className="container">
                                        <p></p> <br />
                                        <p className="containerbanner">Psst! We give product matches that will be perfect for you!</p>
                                        <p className="containerbanner2">They will fit your skin, hair, body, AND they solve your beauty concerns at the same time. Sign up and complete your Beauty ID now!</p>
                                        <div className="containerbanner2">
                                            <a class="waves-effect waves-light btn" style={{backgroundColor:"red", float:"right"}}>Login</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "container" style={{marginTop:"15px"}}>
                            <div id="index-banner3" className="parallax-container3">
                                <div className="section no-pad bot">
                                    <div className="container" style={{justifyContent:"center", display:"flex", marginBottom:'10px'}}>
                                        <p>970x250</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h6><b>Lates Articles</b></h6>
                                </div>
                                <div className="left" >
                                    <h6><a style={{color:'grey'}}>Unravel more beauty</a></h6>
                                </div>
                                <div className="right" >
                                    <h6><a style={{color:'red'}}>See More > </a></h6>
                                </div>
                            </div>
                            <div className="box" style={{marginTop:"50px"}}>
                                {itemListArticles}
                            </div>
                        </div>
                        <div className = "container">
                            <div>
                                <h6><b>Latest Review</b></h6>
                            </div>
                            <div className="left">
                                <h6 style={{color:'grey'}}>So you can make better purchase decision</h6>
                            </div>
                            <div className="right">
                                <h6 style={{color:'red'}}>See More > </h6>
                            </div>
                        </div>
                        <div className = "container" style={{marginTop:"50px"}}>
                            <ScrollMenu data={itemListReviews}  selected={selected}/>
                        </div>
                        <div className = "container">
                            <div>
                                <h5>Popular Groups</h5>
                                <h5 style={{color:'grey'}}>Where the beauty TALK are</h5>
                            </div>
                            <div class="row">
                                <div class="col s12 m3">
                                    <div class="card blue-grey darken-1">
                                        <div class="card-content white-text">
                                            <span class="card-title">Image</span>
                                            <p>Title</p>
                                        </div>
                                        <div class="card-action">
                                            <a href="#">This is a link</a>
                                            <a href="#">This is a link</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col s12 m3">
                                    <div class="card blue-grey darken-1">
                                        <div class="card-content white-text">
                                            <span class="card-title">Image</span>
                                            <p>Title</p>
                                        </div>
                                        <div class="card-action">
                                            <a href="#">This is a link</a>
                                            <a href="#">This is a link</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col s12 m3">
                                    <div class="card blue-grey darken-1">
                                        <div class="card-content white-text">
                                            <span class="card-title">Image</span>
                                            <p>Title</p>
                                        </div>
                                        <div class="card-action">
                                            <a href="#">This is a link</a>
                                            <a href="#">This is a link</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col s12 m3">
                                    <div class="card blue-grey darken-1">
                                        <div class="card-content white-text">
                                            <span class="card-title">Image</span>
                                            <p>Title</p>
                                        </div>
                                        <div class="card-action">
                                            <a href="#">This is a link</a>
                                            <a href="#">This is a link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className ="containter">
                            <div>
                                <h5>Latest Video</h5>
                                <h5 style={{color:'grey'}}>Watch and Learn Ladies</h5>
                            </div>
                            <Youtube />
                        </div> */}
                        <div className = "container">
                            <div>
                                <h5>Trending This Week</h5>
                                <h5 style={{color:'grey'}}>See our weekly most reviewed products</h5>
                            </div>
                        </div>
                        <ScrollMenu data={itemListProduct} selected={selected} />
                    </div>
                )
        }
    }
}

const mapStateToProps = (state, props)=>{
    // return state
    return {
        loading: state.dataReducer.loading,
        items: state.dataReducer.data
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)