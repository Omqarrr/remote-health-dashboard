import React from 'react';
import cover from '../static/images/cover.png'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import c1 from '../static/images/c1.jpg'
import c2 from '../static/images/c2.jpg'
import c3 from '../static/images/c3.jpg'
import '../styles/style.css'


const HomePage = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-6 px-5 py-3">
                    <h1 className="fw-normal mt-5 text-center custom-h1">
                        Your Personal Health Assistant for Immediate Self-Care
                    </h1>
                    <h3 className="text-center mt-3">
                        Get instant advice on managing symptoms and know when to seek medical help, all from the comfort of your home.
                    </h3>
                </div>
                <div className="col-12 col-md-6">
                    <img className="img-fluid cover" src={cover} alt="cover" />
                </div>
            </div>

            <Carousel>
                <div>
                    <img src ={c1} />
                </div>
                <div>
                    <img src={c2} />
                </div>
                <div>
                    <img src={c3} />
                </div>
            </Carousel>

            <div className="m-5">
                <h2 className="text-center">Frequently Asked Questions</h2>
                <div className="accordion mt-3" id="faqAccordion">
                    <div className="accordion-item">
                        <h1 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                What symptoms can I input?
                            </button>
                        </h1>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                            <div className="accordion-body faq-body">
                                You can input a wide range of symptoms, including fever, cough, headaches, and more. The AI will provide guidance based on your inputs.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Is the service free to use?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                            <div className="accordion-body faq-body">
                                Yes, our platform offers free access to basic features. Additional premium services may be available in the future.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                How does the AI provide guidance?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                            <div className="accordion-body faq-body">
                                Our AI uses a database of medical knowledge and algorithms to analyze your symptoms and offer tailored advice for self-care.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
