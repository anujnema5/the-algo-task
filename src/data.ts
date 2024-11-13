// src/data.ts

// Sample data for doctors
export const doctors = [
    {
        name: "Dr. Amelia Brown",
        specialty: "Cardiologist",
        rating: 4.8,
        reviews: 120,
    },
    {
        name: "Dr. Ethan Clark",
        specialty: "Dermatologist",
        rating: 4.5,
        reviews: 98,
    },
    {
        name: "Dr. Olivia Smith",
        specialty: "Pediatrician",
        rating: 4.7,
        reviews: 150,
    },
    {
        name: "Dr. Mason Lee",
        specialty: "Orthopedic Surgeon",
        rating: 4.9,
        reviews: 75,
    },
];

// Sample data for medications
export const medications = [
    {
        name: "Amoxicillin",
        dosage: "500 mg",
        instructions: "Take one tablet every 8 hours for 7 days.",
    },
    {
        name: "Ibuprofen",
        dosage: "200 mg",
        instructions: "Take one tablet every 6-8 hours as needed for pain.",
    },
    {
        name: "Atorvastatin",
        dosage: "10 mg",
        instructions: "Take one tablet daily with food.",
    },
    {
        name: "Lisinopril",
        dosage: "20 mg",
        instructions: "Take one tablet daily for blood pressure control.",
    },
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
    },

    {
        name: "Fever Panel",
        description: "Ideal for individuals aged 21-40...",
        icon: "F"
    },
];

export const upcomingConsultation = {
    doctor: {
        name: "Dr. Darlene Robertson",
        specialty: "Dental Specialist",
        avatar: "/doctor-avatar.png"
    },
    date: "27 Oct 2021",
    time: "11:00 - 12:00 AM"
};