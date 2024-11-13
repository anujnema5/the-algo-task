import { Bell, Search, MoreHorizontal } from 'lucide-react';
import './App.css';
import { healthPackages, popularProducts, upcomingConsultation } from './data';

// Sample data
const doctors = [
  {
    name: "Dr. Darlene Robertson",
    specialty: "Dental Specialist",
    rating: "5.0",
    reviews: "50"
  },
  {
    name: "Dr. Darrell Steward",
    specialty: "Heart Specialist",
    rating: "4.9",
    reviews: "50"
  },
  {
    name: "Dr. Cameron Williamson",
    specialty: "Dental Specialist",
    rating: "5.0",
    reviews: "80"
  },
  {
    name: "Dr. Darlene Robertson",
    specialty: "Dental Specialist",
    rating: "5.0",
    reviews: "80"
  }
];

const medications = [
  {
    name: "Acetaminophen",
    dosage: "500 mg",
    instructions: "Take with food every morning"
  },
  {
    name: "Doxycycline",
    dosage: "100 mg",
    instructions: "Take 1 with food twice a day, and avoid drinking alcohol for 2 hours after"
  },
  {
    name: "Hydrochlorothiazide",
    dosage: "23 mg",
    instructions: "Take 3 tablets, 3 times a day for 7 days"
  }
];

const ProductCard = ({ product }: { product: typeof popularProducts[0] }) => (
  <div className="product-item">
    <div className="product-image">
      <img
        src="/api/placeholder/40/40"
      // alt={product.name} 
      />
    </div>
    <div className="product-info">
      <p className="product-name">{product.name}</p>
      <div className="product-price">
        <span className="current-price">${product.price.toFixed(2)}</span>
        <span className="original-price">${product.originalPrice.toFixed(1)}</span>
      </div>
    </div>
    <button className="product-action">→</button>
  </div>
);

const PackageCard = ({ package: pkg }: { package: typeof healthPackages[0] }) => (
  <div className="package-item">
    <div className="package-icon">{pkg.icon}</div>
    <div className="package-info">
      <h4 className="package-name">{pkg.name}</h4>
      <p className="package-description">{pkg.description}</p>
    </div>
    <button className="more-options">
      <MoreHorizontal size={16} />
    </button>
  </div>
);

const ConsultationCard = ({ consultation }: { consultation: typeof upcomingConsultation }) => (
  <div className="consultation-details">
    <div className="consultation-doctor">
      <img
        src="/api/placeholder/48/48"
        // alt={consultation.doctor.name}
        className="doctor-avatar"
      />
      <div className="doctor-info">
        <h4 className="doctor-name">{consultation.doctor.name}</h4>
        <p className="doctor-specialty">{consultation.doctor.specialty}</p>
      </div>
    </div>
    <div className="consultation-time">
      <div className="date-time">
        <span className="icon">📅</span>
        <span>{consultation.date}</span>
      </div>
      <div className="date-time">
        <span className="icon">⏰</span>
        <span>{consultation.time}</span>
      </div>
    </div>
    <div className="consultation-actions">
      <button className="btn-cancel">Cancel</button>
      <button className="btn-reschedule">Reschedule</button>
    </div>
  </div>
);

const Sidebar = () => (
  <aside className="sidebar">
    <h1 className="logo">medik</h1>
    <nav className="menu">
      {[
        "Home",
        "Appointment",
        "Lab Tests",
        "Medicine Order",
        "Favourites",
        "Family",
        "Prescription",
        "Messages",
        "Payments",
        "Settings"
      ].map((item, index) => (
        <a
          key={item}
          href="#"
          className={`menu-item ${index === 0 ? "active" : ""}`}
        >
          {item}
        </a>
      ))}
    </nav>
  </aside>
);

const Header = () => (
  <header className="header">
    <select className="header-select">
      <option>Default</option>
    </select>
    <div className="header-search">
      <Search className="search-icon" size={20} />
      <input
        type="text"
        placeholder="Search by doctor's name/ specialty etc"
        className="search-input"
      />
    </div>
    <div className="profile">
      <Bell className="notification-icon" size={20} />
      <div className="profile-pic" />
    </div>
  </header>
);

const DoctorCard = ({ doctor }: { doctor: typeof doctors[0] }) => (
  <div className="doctor-card">
    <div className="doctor-avatar" />
    <div className="doctor-info">
      <p className="doctor-name">{doctor.name}</p>
      <p className="doctor-specialty">{doctor.specialty}</p>
      <p className="doctor-rating">
        ⭐ {doctor.rating} • {doctor.reviews}+ Reviews
      </p>
    </div>
  </div>
);

const CardHeader = ({ title, link = "View all" }: { title: string; link?: string }) => (
  <div className="card-header">
    <h3 className="card-title">{title}</h3>
    <a href="#" className="card-link">
      {link}
    </a>
  </div>
);

const MedicationsList = () => (
  <div className="medications-list">
    {medications.map((med, index) => (
      <div key={index} className="medication-item">
        <h4 className="medication-name">
          {med.name} {med.dosage}
        </h4>
        <p className="medication-instructions">{med.instructions}</p>
      </div>
    ))}
  </div>
);

const Dashboard = () => (
  <div className="dashboard">
    <Sidebar />
    <main className="main-content">
      <Header />
      <div className="welcome">
        <span className="welcome-greet">Welcome Back</span>
        <strong>Jubed Ahmed</strong>
      </div>

      <div className="grid-container">
        <div className="card doctors-section">
          <CardHeader title="Top Doctors" />
          <div className="doctors-grid">
            {doctors.map((doctor, index) => (
              <DoctorCard key={index} doctor={doctor} />
            ))}
          </div>
        </div>

        <div className="card medications-section">
          <div className="card-header">
            <h3 className="card-title">Medications</h3>
            <button className="more-options">
              <MoreHorizontal size={20} />
            </button>
          </div>
          <MedicationsList />
        </div>

        <div className="card products-section">
          <CardHeader title="Popular Products" />
          <div className="products-list">
            {popularProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>

        <div className="card health-section">
          <CardHeader title="Health Package" />
          <div className="packages-list">
            {healthPackages.map((pkg, index) => (
              <PackageCard key={index} package={pkg} />
            ))}
          </div>
        </div>

        <div className="card consultation-section">
          <CardHeader title="Upcoming Consultation" />
          <ConsultationCard consultation={upcomingConsultation} />
        </div>
      </div>
    </main>
  </div>
);

export default Dashboard;