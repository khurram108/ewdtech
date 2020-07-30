import React, { useState, useEffect } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './resources/style.scss'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflowX: 'hidden',
    },
}));

function Footer() {
    const classes = useStyles();


    return (
        <>

            <Grid
                direction="row"
                // container
                className="footer"
                >
                <Grid item xs={12} 
                className="footer_inner"
                
                >

                    <div className="empty-space"></div>
                    <div className="footer-item">
                        <div className="_head_footer">
                            <img src={require("./resources/ewd.png")} alt="" />
                            <span className="ewd-title">
                                EWDTECH
                            </span>
                        </div>
                        <div className="_footer_text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo quaerat velit dolorum, natus quos  Nemo quaerat velit dolorum, natus quos.

                        </div>
                    </div>
                    <div className="footer-item">
                        <div className="_head_footer">
                            <span className="footer-titles">
                                Services
                            </span>
                        </div>
                        <div className="_footer_text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo quaerat velit dolorum, natus quos  Nemo quaerat velit dolorum, natus quos.

                        </div>
                    </div>
                    <div className="footer-item">
                        <div className="_head_footer">
                            <span className="footer-titles">
                                Contact
                            </span>
                        </div>
                        <div className="_footer_text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo quaerat velit dolorum, natus quos  Nemo quaerat velit dolorum, natus quos.

                        </div>
                    </div>


                </Grid>
                <Grid item xs={12} className="footer_icons" >
                    <img src={require('./resources/instagram.png')} alt="" className="social"/>
                    <img src={require('./resources/facebook.png')} alt="" className="social"/>
                    <img src={require('./resources/twitter.png')} alt="" className="social"/>
                    <img src={require('./resources/linkedin.png')} alt="" className="social"/>
                    <img src={require('./resources/web.png')} alt="" className="social"/>
                    <img src={require('./resources/pinterst.png')} alt="" className="social"/>
                </Grid>




            </Grid>






        </>

    )


}

export default Footer