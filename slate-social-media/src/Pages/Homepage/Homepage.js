import {
  AccountSidebar,
  Editpost,
  Footer,
  Header,
  Posteditor,
  Sidebar,
} from "../../Components/IndexAllComponents";

function Homepage() {
  return (
    <div className="flex w-full justify-between items-start">
      <Sidebar />
      <Posteditor />
      <AccountSidebar />
    </div>
  );
}

export default Homepage;
