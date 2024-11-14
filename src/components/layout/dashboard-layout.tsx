// components/layout/Layout.js
import Sidebar from '../layout/sidebar';
import Header from '../custom/header';

const DasboardLayout = ({ children }: { children: React.ReactNode }) => (
    <div className="dashboard">
        <Sidebar />
        <main className="main-content">
            <Header />
            {children}
        </main>
    </div>
);

export default DasboardLayout;
