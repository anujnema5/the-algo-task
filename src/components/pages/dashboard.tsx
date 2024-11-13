import React from 'react';
// import './Dashboard.css';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <h2>Welcome Back, Jubed Ahmed</h2>
            <section className="top-doctors">
                <h3>Top Doctors</h3>
                <div className="doctor-cards">
                    <div className="doctor-card">Dr. Darlene Robertson</div>
                    <div className="doctor-card">Dr. Darrell Steward</div>
                    <div className="doctor-card">Dr. Cameron Williamson</div>
                </div>
            </section>
            <section className="medications">
                <h3>Medications</h3>
                <ul>
                    <li>Acetaminophen 500 mg</li>
                    <li>Doxycycline 100 mg</li>
                    <li>Hydrochlorothiazide 23 mg</li>
                </ul>
            </section>
            <section className="consultation">
                <h3>Upcoming Consultation</h3>
                <div className="consultation-card">
                    <p>Dr. Darlene Robertson</p>
                    <p>27 Oct 2021, 11:00 - 12:00 AM</p>
                    <button>Cancel</button>
                    <button>Reschedule</button>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
