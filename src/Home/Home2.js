import React, { Component } from 'react'
import Leg from "../mastersgymimages/leg.png";
import Chest from "../mastersgymimages/chest.jpg";
import Back from "../mastersgymimages/back.png";
import Shoulders from "../mastersgymimages/shoulders.png";
import Biceps from "../mastersgymimages/biceps.png";
import { Container, Row, Col } from "reactstrap";

export class Home2 extends Component {
    render() {
        return (
            <div style={{marginBottom:"150px"}}>
                <h1 className="text-center m-auto pt-5">Body basic muscles</h1>
                <hr></hr>
                
                <Container>
                    <Row>
                        <Col sm="12" md="12" lg="12" xl="12" className="p-5">

                            <div id="accordion">
                                {/* card one  */}
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <img src={Leg} className="img-fluid" />
                                        <h5 class="mb-0">
                                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                legs
                                            </button>
                                        </h5>
                                    </div>

                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div class="card-body">
                                            The legs consist of dozens of muscles that flex, bend, extend, adduct, abduct, and rotate your legs and allow movement. This ultimate leg workout focuses on four main muscle groups — the quadriceps, hamstrings, glutes, and calves. Understanding how they all fit together and work with each other will ensure you get the most out of your workout.
                                        <button className="btn btn-danger ml-4 btn1" data-toggle="modal" data-target=".modal1">whatch now</button>
                                        </div>
                                    </div>
                                </div>

                                {/* card two  */}
                                <div class="card">
                                    <div class="card-header" id="headingTwo">
                                        <img src={Chest} className="img-fluid" />
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Chest
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div class="card-body">
                                            Exercises that define and sculpt your chest help you look your best at the beach or the gym. They can also help you do a variety of daily tasks, like lifting or pushing objects. On top of all that, while you improve your look and strength, you lift your mood, too.
                                            <button className="btn btn-danger btn2" data-toggle="modal" data-target=".modal2">whatch now</button>
                                        </div>
                                    </div>
                                </div>

                                {/* card three  */}
                                <div class="card">
                                    <div class="card-header" id="headingThree">
                                        <img src={Back} className="img-fluid" />
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                back
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div class="card-body">
                                            There's a reason we don't shoot Men's Health cover stars from behind. It's because we know that given the choice men want to see abs and arms, chest and boulder shoulders, not back muscles. But trust us when it comes to working out, you should be paying the same attention to back exercises as you do any other muscle group.

                                            There are loads benefits to training your rear, from injury prevention, to helping you pull more weight in all lifts, to developing the coveted V-shape. In fact, a study published in the Journal of Strength and Conditioning Research found that 16 weeks of back workouts was enough to alleviate discomfort felt by 30 men who had suffered from chronic back pain for around two years.
                                            <button className="btn btn-danger ml-3 btn3" data-toggle="modal" data-target=".modal3">whatch now</button>
                                        </div>
                                    </div>
                                </div>

                                {/* card four  */}
                                <div class="card">
                                    <div class="card-header" id="headingFour">
                                        <img src={Shoulders} className="img-fluid" />
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                shoulders
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                        <div class="card-body">
                                            Should you be new to a quality shoulder workout routine, you’ll discover that these muscles develop rather quickly compared to other areas of your body. However, don’t take that to mean shoulder exercises are easy. On the contrary, a decent number of men dread shoulder day at the gym, as the workout can get quite intense…presuming you’re doing it properly.
                                        <button className="btn btn-danger btn4" data-toggle="modal" data-target=".modal4">whatch now</button>
                                        </div>
                                    </div>
                                </div>

                                {/* card five  */}
                                <div class="card">
                                    <div class="card-header" id="headingFive">
                                        <img src={Biceps} className="img-fluid" />
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                arm (Biceps and triceps)
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                                        <div class="card-body">
                                            <h3>Biceps</h3>
                                        Let’s face it, if you’re planning a triumphant post-isolation return to the gym, chances are you are going to start with the biceps. The beefy, front-arm section is a highly concentrated muscle group that suggests strength, and demands respect, praise and the best bicep exercises you can throw at them. After all, large biceps muscles are the calling card of the gym-rat and can work wonders for your general appearance.
                                        <h3 className="mt-3">Triceps</h3>
                                        Triceps are the muscles located on the back of the upper arm, and are made up of three heads: the lateral, medial and long heads. If you want to hit all three heads then you're going to need a range of different exercises and plethora of different tricep workouts
                                        <button className="btn btn-danger ml-4 btn5" data-toggle="modal" data-target=".modal5">whatch now</button>
                                        </div>
                                    </div>
                                </div>


                                {/* modals for cards  */}

                                {/* modal 1  */}
                                <div class="modal modal1" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Nr0voKyfiiE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>

                                {/* modal 2  */}
                                <div class="modal modal2" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg2">
                                        <div class="modal-content">
                                            <iframe width="560" height="315" src="https://www.youtube.com/embed/3kkS62sIw9M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>

                                {/* modal 3  */}
                                <div class="modal modal3" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <iframe width="560" height="315" src="https://www.youtube.com/embed/dK3NP3tDy5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>

                                {/* modal 4  */}
                                <div class="modal modal4" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Vk3Q8WvUwf4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>



                                {/* modal 5  */}
                                <div class="modal modal5" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <iframe width="560" height="315" src="https://www.youtube.com/embed/4niUC9KHFeM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>






                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home2
