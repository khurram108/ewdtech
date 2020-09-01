import React, { useState, useEffect } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './resources/Home/animation.css'
import './resources/Home/style.scss'
import Footer from './Footer/Footer'
import Header from './Header/Header';
import { withRouter, Link } from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflowX: 'hidden'
    },
    logo: {
        padding: 30,
        paddingLeft: 50
    },
    navOuter: {
        padding: 20,
        paddingLeft: 50,
        display: "flex"

    },
    tab: {
        width: "100px !important"
    },
    bannerOuter: {
        height: 800,
        overflow: "hidden",
        textAlign: "-webkit-center"
    },
    bannerContainer: {
        backgroundColor: 'white',
        // width: 1000,
    },
    bottomContainer: {
        backgroundColor: 'white',
        position: 'relative',
        zIndex: 50,
        height: 550,
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 50,

    },
    Ecomerce: {
        paddingTop: 30,
        backgroundColor: 'white',

    },
    Design: {
        paddingTop: 30,
        // height: 1000,
        backgroundColor: 'white',
    },
    number: {
        fontSize: 20
    },
    footer: {
        height: 500
    }
}));

function HomePage() {
    const classes = useStyles();
    const [spacing, setSpacing] = React.useState(2);

    const [active, setActive] = React.useState(0);

    const handleChange = (index) => {
        setActive(index);
    };

    return (
        <>
            {/* <Header /> */}
            <section id="">

                <div className="container">

                    <Grid container className={classes.bannerContainer}>
                        <Grid item xs={12} md={3} className={classes.bannerOuter}>
                            <Grid className="ewd-text">
                                {/* <img src={require('./resources/Home/')} alt=""/> */}
        ewdtech
    </Grid>
                        </Grid>
                        <Grid item xs={12} md={9} className={classes.bannerOuter}>

                            <div className="animate-outer">
                                <div className="cloud-outer">
                                    <img src={require('./resources/Home/images/cloud.png')} alt="" className="cloud-image" />

                                </div>
                                <div className="table-outer">
                                    <img src={require('./resources/Home/images/table.png')} alt="" className="table-image" />

                                </div>
                                <div className="pc-outer">
                                    <img src={require('./resources/Home/images/computer-8.png')} alt="" className="pc-image" />

                                </div>
                                <div className="human-outer">
                                    <img src={require('./resources/Home/images/chair.png')} alt="" className="human-image" />

                                </div>
                                <div className="icons-outer">
                                    <img src={require('./resources/Home/images/icons.png')} alt="" className="icons-image" />

                                </div>

                            </div>
                        </Grid>
                    </Grid>


                    {/* Card section */}
                    <Grid container className={classes.bottomContainer}>
                        <div className="card-section">

                            <div className="card-header">

                            </div>
                            <div className="card-cicle">
                                <img src={require("./resources/Home/images/E-COMMERCE_SOLUTION.png")} alt="" className="ecomrce card-image" />
                            </div>
                            <div className="text-section-card">
                                <div className="head-text">
                                    E-Commerce Solutions
            </div>
                                <div className="body-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repellat ipsum obcaecati consectetur.
            </div>
                            </div>

                        </div>
                        <div className="card-section">

                            <div className="card-header">

                            </div>
                            <div className="card-cicle">
                                <img src={require("./resources/Home/images/WEB_APPLICATION.png")} alt="" className="web-app card-image" />
                            </div>
                            <div className="text-section-card">
                                <div className="head-text">
                                    Web Application
            </div>
                                <div className="body-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repellat ipsum obcaecati consectetur.
            </div>
                            </div>

                        </div>
                        <div className="card-section">

                            <div className="card-header">

                            </div>
                            <div className="card-cicle">
                                <img src={require("./resources/Home/images/DESIGN_SERVICES.png")} alt="" className="d-service card-image" />
                            </div>
                            <div className="text-section-card">
                                <div className="head-text">
                                    Design Services
            </div>
                                <div className="body-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repellat ipsum obcaecati consectetur.
            </div>
                            </div>

                        </div>


                    </Grid>

                    <Grid
                        direction="row"
                        container
                        className={classes.Ecomerce}
                    >

                        <Grid item xs={6} >
                            <div className="number_tag ">
                                #1
</div>
                            <div className="heading-tag">
                                E-Commerce Solutions
</div>
                            <div className="description_tag">
                                The choice of right strategy is your first step for successful e-commerce business. This is what you can find on our platform of EWDTech. We are helping individuals and companies by their E-Commerce business. We promise your e-commerce success by providing relative support, consultation and implementation.
</div>
                            <div className="button-read-outer">
                                <Link to="/about_us">
                                    <button className="read-more-btn" title="Read More">
                                        Read More
                                     </button>
                                </Link>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <img src={require("./resources/Home/images/E-Commerce_vector.png")} alt="" className="_img_card" />
                        </Grid>

                    </Grid>
                    <Grid
                        direction="row"
                        container
                        className={classes.Ecomerce}
                    >

                        <Grid item xs={6} >
                            <div className="number_tag ">
                                #2
</div>
                            <div className="heading-tag">
                                Web Application
</div>
                            <div className="description_tag">
                                The choice of right strategy is your first step for successful e-commerce business. This is what you can find on our platform of EWDTech. We are helping individuals and companies by their E-Commerce business. We promise your e-commerce success by providing relative support, consultation and implementation.
</div>
                            <div className="button-read-outer">
                                <button className="read-more-btn" title="Read More">
                                    Read More
    </button>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <img src={require("./resources/Home/images/WEB_APPLICATIN_vectors-8.png")} alt="" className="_left _img_card" />
                        </Grid>

                    </Grid>

                    <Grid
                        direction="row"
                        container
                        className={classes.Design}
                    >

                        <Grid item xs={6} >
                            <div className="number_tag ">
                                #3
</div>
                            <div className="heading-tag">
                                Design Service
</div>
                            <div className="description_tag">
                                The choice of right strategy is your first step for successful e-commerce business. This is what you can find on our platform of EWDTech. We are helping individuals and companies by their E-Commerce business. We promise your e-commerce success by providing relative support, consultation and implementation.
</div>
                            <div className="button-read-outer">
                                <button className="read-more-btn" title="Read More">
                                    Read More
    </button>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <img src={require("./resources/Home/images/design_services_vector-8.png")} alt="" className=" _img_card" />
                        </Grid>

                    </Grid>


                </div>
            </section>
            {/* <Footer /> */}


            {/* Header End */}


        </>

    )


}

export default HomePage