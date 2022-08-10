import { Toaster } from "react-hot-toast";
function Toasts() {
  return (
    <div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerStyle={{
          top: "1rem",
          right: "1rem",
          fontSize: "0.9rem",
        }}
      />
    </div>
  );
}

export default Toasts;
