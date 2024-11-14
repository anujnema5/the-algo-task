// DashboardSkeleton.js
import './dashboard-skeleton.css';

const DashboardSkeleton = () => (
    <div className={'animatePulse'}>
        <div className={'skeletonHeader'} />
        <div className={'gridContainer'}>
            {[...Array(5)].map((_, i) => (
                <div
                    key={i}
                    className={`${'skeletonCard'} ${i === 0 ? 'doctors-section' : 'medications-section'}`}
                />
            ))}
        </div>
    </div>
);

export default DashboardSkeleton;
