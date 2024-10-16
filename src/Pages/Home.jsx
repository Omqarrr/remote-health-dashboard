import React from 'react';
import cover from '../static/images/cover.png'
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

            <div id="advantagesCarousel" className="carousel slide m-5" data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="advantages-content text-center carousel-item-bg">
                            <div style={{ backgroundImage: `url('./static/images/c1.jpg')` }} className="bg-image"></div>
                            <div className="content">
                                <h1>Instant Symptom Analysis</h1>
                                <h3>Receive AI-driven guidance based on your symptoms to help you decide the best course of action.</h3>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="advantages-content text-center carousel-item-bg">
                            <div style={{ backgroundImage: `url('./static/images/c2.jpg')` }} className="bg-image"></div>
                            <div className="content">
                                <h1>Accessible Anytime, Anywhere</h1>
                                <h3>Get health advice 24/7 from the comfort of your home, without needing an appointment.</h3>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="advantages-content text-center carousel-item-bg">
                            <div style={{ backgroundImage: `url('./static/images/c3.jpg')` }} className="bg-image"></div>
                            <div className="content">
                                <h1>Comprehensive Health Resources</h1>
                                <h3>Access a wealth of information and resources to empower your health decisions.</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#advantagesCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#advantagesCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

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
