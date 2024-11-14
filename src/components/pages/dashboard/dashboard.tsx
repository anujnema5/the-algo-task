import { useState, useEffect, Suspense } from 'react';
import { MoreHorizontal } from 'lucide-react';
import {
    doctors,
    healthPackages,
    medications,
    popularProducts,
    upcomingConsultation
} from '../../../data/data';

import {
    CardHeader,
    ConsultationCard,
    DoctorCard,
    PackageCard,
    ProductCard
} from '../../custom/card';

import { MedicationsList } from '../../custom/list';
import DashboardLayout from '../../layout/dashboard-layout';

import {
    Consultation,
    Doctor,
    HealthPackage,
    Medication,
    Product
} from './dashboard.types';
import DashboardSkeleton from '../../skeletons/dashboard-skelteton';

const DashboardSection = ({ className, children, isSmallCard = false }: {
    className: string; children: React.ReactNode; isSmallCard?: boolean;
}) => (
    <div className={`${isSmallCard ? 'small-card' : 'card'} ${className}`}>
        {children}
    </div>
);


// Main Dashboard Component
const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [dashboardData, setDashboardData] = useState({
        doctors: [] as Doctor[],
        medications: [] as Medication[],
        products: [] as Product[],
        packages: [] as HealthPackage[],
        consultation: null as Consultation | null
    });

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                setDashboardData({
                    doctors,
                    medications,
                    products: popularProducts,
                    packages: healthPackages,
                    consultation: upcomingConsultation
                });
            } catch (err) {
                setError(err instanceof Error ? err : new Error('Failed to fetch dashboard data'));
            } finally {
                setIsLoading(false);
            }
        };
        fetchDashboardData();
    }, []);

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <DashboardLayout>
            <Suspense fallback={<DashboardSkeleton />}>
                {isLoading ? (
                    <DashboardSkeleton />
                ) : (
                    <>
                        <div className="welcome">
                            <span className="welcome-greet">Welcome Back</span>
                            <strong style={{ fontWeight: "600" }}>Jubed Ahmed</strong>
                        </div>

                        <div className="grid-container">
                            <DashboardSection className="doctors-section">
                                <CardHeader title="Top Doctors" />
                                <div className="doctors-grid">
                                    {dashboardData.doctors.map((doctor, index) => (
                                        <DoctorCard
                                            key={`doctor-${doctor.name}-${index}`}
                                            doctor={doctor}
                                        />
                                    ))}
                                </div>
                            </DashboardSection>

                            <DashboardSection className="medications-section">
                                <div className="card-header">
                                    <h3 className="card-title">Medications</h3>
                                    <button className="more-options">
                                        <MoreHorizontal size={20} />
                                    </button>
                                </div>
                                <MedicationsList medicationList={dashboardData.medications} />
                            </DashboardSection>

                            <DashboardSection className="products-section" isSmallCard>
                                <CardHeader title="Popular Products" />
                                <div className="products-list">
                                    {dashboardData.products.map((product, index) => (
                                        <ProductCard
                                            key={`product-${product.name}-${index}`}
                                            product={product}
                                        />
                                    ))}
                                </div>
                            </DashboardSection>

                            <DashboardSection className="health-section" isSmallCard>
                                <CardHeader title="Health Package" />
                                <div className="packages-list">
                                    {dashboardData.packages.map((pkg, index) => (
                                        <PackageCard
                                            key={`package-${pkg.name}-${index}`}
                                            package={pkg}
                                        />
                                    ))}
                                </div>
                            </DashboardSection>

                            {dashboardData.consultation && (
                                <DashboardSection className="consultation-section" isSmallCard>
                                    <CardHeader title="Upcoming Consultation" showLink={false} />
                                    <ConsultationCard consultation={dashboardData.consultation} />
                                </DashboardSection>
                            )}
                        </div>
                    </>
                )}
            </Suspense>
        </DashboardLayout>
    );
};

export default Dashboard;
