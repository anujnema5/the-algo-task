import { CalendarDaysIcon, ClockIcon } from "@heroicons/react/24/outline";
import { doctors, healthPackages, popularProducts } from "../../data/data";
import { upcomingConsultation } from "../../data/data";
import { IoIosArrowForward, IoIosStar } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { MoreHorizontal } from "lucide-react";

const CardHeader = ({ title, link = "View all", showLink = true }: { title: string; link?: string, showLink?: boolean }) => (
    <div className="card-header">
        <h3 className="card-title">{title}</h3>
        {showLink &&
            <a href="#" className="card-link" style={{}}>
                {link}
                <IoIosArrowForward />
            </a>
        }
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
                src={consultation.imgSrc}
                // alt={consultation.doctor.name}
                className="doctor-avatar"
            />
            <div className="doctor-info doctor-info-secondary">
                <h4 className="doctor-name">{consultation.doctor.name}</h4>
                <p className="doctor-specialty">{consultation.doctor.specialty}</p>
            </div>
        </div>
        <div className="consultation-time " >
            <div className="date-time">
                <CalendarDaysIcon className="h-6 w-6 text-gray-500" />
                <span>{consultation.date}</span>
            </div>
            <div className="date-time">
                <ClockIcon className="h-6 w-6 text-gray-500" />
                <span>{consultation.time}</span>
            </div>
        </div>
        <div className="consultation-actions">
            <button className="btn-cancel">Cancel</button>
            <button className="btn-reschedule">Reschedule</button>
        </div>
    </div>
);


const ProductCard = ({ product }: { product: typeof popularProducts[0] }) => (
    <div className="product-item">
        <div className="product-image">
            <img
                src="/api/placeholder/40/40"
            // alt={product.name} 
            />
        </div>
        <div className="product-info" style={{ display: "flex", justifyContent: "space-between" }}>
            <p className="product-name">{product.name}</p>
            <div className="product-price">
                <span className="current-price">${product.price.toFixed(2)}</span>
                <span className="original-price" style={{ marginRight: "30px" }}>${product.originalPrice.toFixed(1)}</span>
            </div>
        </div>
        <button className="product-action">→</button>
    </div>
);

const DoctorCard = ({ doctor }: { doctor: typeof doctors[0] }) => (
    <div className="doctor-card">
        {/* <div className="doctor-avatar" /> */}
        <img src={doctor.imgSrc} alt="" className="doctor-avatar" />
        <div className="doctor-info">
            <p className="doctor-name">{doctor.name}</p>
            <p className="doctor-specialty">{doctor.specialty}</p>
            <p className="doctor-rating" style={{ position: "relative" }}>
                <IoIosStar />
                <span>
                    {doctor.rating} • {doctor.reviews}+ Reviews
                </span>
                <FaArrowRightLong className='doctor-card-arrow' />
            </p>
        </div>
    </div>
);



export { ConsultationCard, ProductCard, DoctorCard, CardHeader, PackageCard }