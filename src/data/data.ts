
import {
    FaHome,
    FaCalendarCheck,
    FaFlask,
    FaPills,
    FaHeart,
    FaUserFriends,
    FaFileMedical,
    FaEnvelope,
    FaMoneyBill, FaCog
} from 'react-icons/fa';
import { Doctor } from '../components/pages/dashboard/dashboard.types';



export const doctors: Doctor[] = [
    {
        name: "Dr. Darlene Robertson",
        specialty: "Dental Specialist",
        rating: 5.0,
        reviews: 50,
        imgSrc: 'https://img.freepik.com/premium-photo/doctor-digital-avatar-generative-ai_934475-9326.jpg'
    },
    {
        name: "Dr. Darrell Steward",
        specialty: "Heart Specialist",
        rating: 4.9,
        reviews: 50,
        imgSrc: 'https://img.freepik.com/premium-photo/doctor-digital-avatar-generative-ai_934475-9326.jpg'
    },
    {
        name: "Dr. Cameron Williamson",
        specialty: "Dental Specialist",
        rating: 5.0,
        reviews: 80,
        imgSrc: 'https://img.freepik.com/premium-photo/doctor-digital-avatar-generative-ai_934475-9326.jpg'
    },
    {
        name: "Dr. Darlene Robertson",
        specialty: "Dental Specialist",
        rating: 5.0,
        reviews: 80,
        imgSrc: 'https://img.freepik.com/premium-photo/doctor-digital-avatar-generative-ai_934475-9326.jpg'
    }
];

export const medications = [
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

export const popularProducts = [
    {
        name: "Necessaire 75ML",
        price: 27.60,
        originalPrice: 34.7,
        image: "/product1.png"
    },
    {
        name: "Mario 118ml",
        price: 25.70,
        originalPrice: 32.7,
        image: "/product2.png"
    },
    {
        name: "Allergy Relief 25mg",
        price: 25.70,
        originalPrice: 32.7,
        image: "/product3.png"
    }
];

export const healthPackages = [
    {
        name: "Basic Health Package",
        description: "Ideal for individuals aged 21-40...",
        icon: "B"
    },
    {
        name: "Fever Panel",
        description: "Ideal for individuals aged 21-40...",
        icon: "F"
    }
];

export const upcomingConsultation = {
    doctor: {
        name: "Dr. Darlene Robertson",
        specialty: "Dental Specialist",
        avatar: "/doctor-avatar.png"
    },
    date: "27 Oct 2021",
    time: "11:00 - 12:00 AM",
    imgSrc: "https://img.freepik.com/premium-photo/dentist-digital-avatar-generative-ai_934475-9021.jpg"
};

export const navItems = [
    { Icon: FaHome, text: "Home" },
    { Icon: FaCalendarCheck, text: "Appointment" },
    { Icon: FaFlask, text: "Lab Tests" },
    { Icon: FaPills, text: "Medicine Order" },
    { Icon: FaHeart, text: "Favourites" },
    { Icon: FaUserFriends, text: "Family" },
    { Icon: FaFileMedical, text: "Prescription" },
    { Icon: FaEnvelope, text: "Messages" },
    { Icon: FaMoneyBill, text: "Payments" },
    { Icon: FaCog, text: "Settings" }
];
