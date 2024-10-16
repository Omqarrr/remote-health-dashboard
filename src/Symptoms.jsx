import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


const SymptomInput = () => {
    const [symptoms, setSymptoms] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [startDate, setStartDate] = useState('');
    const [duration, setDuration] = useState('');
    const [severity, setSeverity] = useState('');
    const [analysisResult, setAnalysisResult] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const requestData = {
            symptoms,
            additionalInfo,
            startDate,
            duration,
            severity,
        };

        try {
            const response = await fetch('/api/analyze-symptoms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            setAnalysisResult(result.analysis);
        } catch (error) {
            console.error('Error:', error);
            setAnalysisResult('There was an error processing your request. Please try again.');
        }
    };

    return (
        <div className="m-5">
            <h1 className="text-center">Input Your Symptoms</h1>
            <h3 className="text-center">Enter your symptoms below to receive AI-driven guidance on the best course of action.</h3>

            <form id="symptomInputForm" className="mt-4" onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="symptoms" className="form-label fs-4">Symptoms:</label>
                        <textarea
                            id="symptoms"
                            className="form-control"
                            placeholder="e.g., fever, cough, headache"
                            rows="2"
                            required
                            value={symptoms}
                            onChange={(e) => setSymptoms(e.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="additionalInfo" className="form-label fs-4">Additional Information:</label>
                        <textarea
                            id="additionalInfo"
                            className="form-control"
                            placeholder="Any other details..."
                            rows="2"
                            value={additionalInfo}
                            onChange={(e) => setAdditionalInfo(e.target.value)}
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-4">
                        <label htmlFor="startDate" className="form-label fs-4">Start Date:</label>
                        <input
                            type="date"
                            id="startDate"
                            className="form-control form-control-lg"
                            required
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="duration" className="form-label fs-4">Duration (Days):</label>
                        <input
                            type="number"
                            id="duration"
                            className="form-control form-control-lg"
                            placeholder="Number of days"
                            min="1"
                            required
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="severity" className="form-label fs-4">Severity:</label>
                        <select
                            id="severity"
                            className="form-select form-control-lg"
                            required
                            value={severity}
                            onChange={(e) => setSeverity(e.target.value)}
                        >
                            <option value="" disabled>Select severity</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                </div>

                <div className="text-center mt-5">
                    <button type="submit" className="btn btn-primary btn-lg">Get Analysis</button>
                </div>
            </form>

            <div id="results" className="mt-5">
                <h2 className="text-center">Analysis Results</h2>
                <div className="alert alert-info" role="alert">
                    {analysisResult || 'Your analysis results will be displayed here after you submit the form.'}
                </div>
            </div>

            <div id="helpfulResources" className="mt-5">
                <h2 className="text-center">Helpful Resources</h2>
                <div className="row mt-4 text-center">
                    <div className="col-md-4">
                        <div className="card shadow-sm p-3">
                            <div className="card-body">
                                <h5 className="card-title">Understanding Your Symptoms</h5>
                                <p className="card-text">Learn how to identify and interpret your symptoms effectively.</p>
                                <div className="text-center"><a href="#" className="btn btn-primary">Read More</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm p-3">
                            <div className="card-body">
                                <h5 className="card-title">When to Seek Medical Help</h5>
                                <p className="card-text">Know when it's time to consult a healthcare professional.</p>
                                <div className="text-center"><a href="#" className="btn btn-primary">Read More</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm p-3">
                            <div className="card-body">
                                <h5 className="card-title">Home Remedies for Common Symptoms</h5>
                                <p className="card-text">Discover natural ways to alleviate your common symptoms.</p>
                                <div className="text-center"><a href="#" className="btn btn-primary">Read More</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SymptomInput;
