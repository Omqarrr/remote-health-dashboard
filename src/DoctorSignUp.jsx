import React, { useState, useEffect } from 'react';

const DoctorSignup = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        clinicName: '',
        specialization: '',
        phone: '',
        availability: '',
        bio: ''
    });

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        // Fetch the list of doctors from the API
        const fetchDoctors = async () => {
            try {
                const response = await fetch('/api/doctors');
                const data = await response.json();
                setDoctors(data);
            } catch (error) {
                console.error('Error fetching doctors:', error);
            }
        };

        fetchDoctors();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/doctor_signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Clear the form after successful submission
            setFormData({
                fullName: '',
                email: '',
                clinicName: '',
                specialization: '',
                phone: '',
                availability: '',
                bio: ''
            });

            // Re-fetch the doctors list
            const updatedResponse = await fetch('/api/doctors');
            const updatedData = await updatedResponse.json();
            setDoctors(updatedData);
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    return (
        <div className="m-5">
            <h1 className="text-center">Doctor Signup</h1>
            <h3 className="text-center">Join our platform to support patients by providing consultations.</h3>
            <form className="mt-5" onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="fullName" className="form-label">Full Name</label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            id="fullName"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="clinicName" className="form-label">Clinic/Hospital Name</label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            id="clinicName"
                            name="clinicName"
                            required
                            value={formData.clinicName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="specialization" className="form-label">Specialization</label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            id="specialization"
                            name="specialization"
                            required
                            value={formData.specialization}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input
                            type="tel"
                            className="form-control form-control-lg"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="availability" className="form-label">Availability</label>
                        <select
                            className="form-select"
                            id="availability"
                            name="availability"
                            required
                            value={formData.availability}
                            onChange={handleChange}
                            style={{ lineHeight: 2 }}
                        >
                            <option value="" disabled>Choose your availability</option>
                            <option value="weekdays">Weekdays</option>
                            <option value="weekends">Weekends</option>
                            <option value="both">Both</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="bio" className="form-label">Short Bio</label>
                    <textarea
                        className="form-control"
                        id="bio"
                        name="bio"
                        rows="3"
                        required
                        value={formData.bio}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="text-center mt-4">
                    <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
                </div>
            </form>

            <h2 className="mt-5 mb-3">Thanks to Our Doctors</h2>
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Clinic Name</th>
                            <th>Specialization</th>
                            <th>Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doctor) => (
                            <tr key={doctor.id}>
                                <td>{doctor.id}</td>
                                <td>{doctor.full_name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.phone}</td>
                                <td>{doctor.clinic_name}</td>
                                <td>{doctor.specialization}</td>
                                <td>{doctor.availability}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DoctorSignup;
