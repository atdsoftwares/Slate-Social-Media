import {
  AccountSidebar,
  Footer,
  Header,
  Posteditor,
  Sidebar,
} from "../../Components/IndexAllComponents";

function Homepage() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Posteditor />
      <AccountSidebar />
      <Footer />
    </div>
  );
}

export default Homepage;
