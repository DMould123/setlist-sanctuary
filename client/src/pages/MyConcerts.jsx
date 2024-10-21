import Sidebar from '../components/Sidebar';

const MyConcerts = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1>My Concerts</h1>
        {/* Add your My Concerts content here */}
      </div>
    </div>
  );
};

export default MyConcerts;
