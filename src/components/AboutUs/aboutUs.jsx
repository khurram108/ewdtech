import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
 leftSide: {
     padding: 40
 },
 rightSide: {
     padding: 40
 },


}));

const About = (props) => {
    const classes = useStyles()
    return (
        <div className="about-wrp">
            <div className="about-head">
                <p className="about-p">
                    About Us
                </p>
            </div>
            <Grid container>

                <Grid item xs={12} md={6}>
                    <Typography variant="p" component="p" className={classes.leftSide}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste labore ipsum rerum nostrum possimus quod molestias, mollitia dolore veniam aliquid ratione harum laborum, eveniet vitae, ipsam nobis nemo quaerat culpa.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className={classes.rightSide}>
                        
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default About