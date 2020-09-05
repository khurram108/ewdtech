import React, { useState } from 'react'
import './portfolio.css'
import RecipeReviewCard from './card'
import {withRouter} from 'react-router'
const Portfolio = () => {
    const [state, setState] = useState(
        [
           {
            Card: 'Title',
            src: './download2.jpg'
           },
           {
            Card: 'Title',
            src: './download1jpg.jpg'
           },
           
           {
            Card: 'Title',
            src: './download4.jpg'
           },
           {
            Card: 'Title',
            src: './download2.jpg'
           },
           {
            Card: 'Title',
            src: './download1jpg.jpg'
           },
           
           {
            Card: 'Title',
            src: './download4.jpg'
           },
        ]
    )


    return (<div>

        <div className="container">

            <div className="row">

                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="portfolio__heading">
                        <h1>Enjoy Our Amazing Projects</h1>
                        <p>
                            View some of our work and case studies for clients. We will work to deliver that strategy by building out your existing campaigns, or establishing accounts at new networks.

                        </p>

                        <div className="portfolio__list">
                            <ul>
                                <li active >All</li>
                                <li >Digital  PR</li>
                                <li >MONITORIN G</li>
                                <li >PPC</li >
                                <li >SEO</li >

                                <li>SMM</li>


                            </ul>
                        </div>

                    </div>



                    <div className="portfolio__card">

                        {

                            state.map((item) => {
                                return <RecipeReviewCard src={item.src} name={item.Card} />
                            })

                        }

                      

                    </div>


<div className='portfolioLoad__button'>
    <button>LOAD MORE</button>
</div>


                </div>

            </div>

        </div>
    </div>)
}

export default Portfolio
