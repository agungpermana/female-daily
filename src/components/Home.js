import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actionCreators  from './actions';
import ScrollMenu from 'react-horizontal-scrolling-menu';

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
                let id = 0;
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

                let itemListArticles = this.props.items[`latest articles`].map((item,index) => {
                    return (
                        <div className="container-card-article">
                            <div className="card-article" key={index}>
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
                            {/* <div >
                                <div className="box">
                                    {itemList}
                                </div>
                            </div> */}
                        </div>
                        <ScrollMenu data={itemList} selected={selected} />
                        <div className = "containter">
                            <div id="index-banner4" className="parallax-container4">
                                <div className="section no-pad bot">
                                    <div className="container" style={{justifyContent:"center", display:"flex", marginBottom:'10px'}}>
                                        <p>970x250</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "container">
                            <div id="index-banner3" className="parallax-container3">
                                <div className="section no-pad bot">
                                    <div className="container" style={{justifyContent:"center", display:"flex", marginBottom:'10px'}}>
                                        <p>970x250</p>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div>
                                    <p>Lates Articles</p>
                                </div>
                                <div>
                                    <a style={{color:'grey'}}>Unravel more beauty</a>
                                </div>
                            </div>
                            <div>
                                    
                            </div>
                            <div className="box">
                                {itemListArticles}
                            </div>
                        </div>
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