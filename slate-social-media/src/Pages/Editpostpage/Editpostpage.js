import {
  AccountSidebar,
  EditPostForm,
  Sidebar,
} from "../../Components/IndexAllComponents";

function Editpostpage() {
  return (
    <div className="flex w-full justify-between items-start">
      <Sidebar />
      <EditPostForm />
      <AccountSidebar />
    </div>
  );
}

export default Editpostpage;
