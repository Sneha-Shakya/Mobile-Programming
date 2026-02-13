import StatCard from "../components/StatCard";
import ProductTable from "../components/ProductTable";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="stats">
        <StatCard title="Total Sales" value="$12,450" />
        <StatCard title="Orders" value="320" />
        <StatCard title="Products" value="85" />
      </div>

      <ProductTable />
    </div>
  );
}

export default Dashboard;
