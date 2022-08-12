import React, { useState } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import EditUserProfile from "../EditUserProfile/EditUserProfile";

function EditProfileModal() {
  const loginData = useSelector((state) => state.auth.loginData);
  const { avatar, fullName, username, bio, link } = loginData;
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function setUserDetailsEditfn() {
    toggleModal();
    localStorage.setItem("avatar", avatar);
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("username", username);
    localStorage.setItem("bio", bio);
    localStorage.setItem("link", link);
  }

  return (
    <div>
      <span
        className="material-icons ml-2 text-sm cursor-pointer"
        onClick={setUserDetailsEditfn}
      >
        edit
      </span>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onRequestClose={toggleModal}
        contentLabel="Example Modal"
        className="h-auto w-auto"
      >
        <div className="flex flex-col justify-center items-center mt-32">
          <EditUserProfile toggleModal={toggleModal} />
        </div>

        <span
          className="material-icons cursor-pointer font-bold border-2 border-blue-800 text-center bg-red-500 text-white rounded-full h-8 w-8  absolute top-24 right-96 m-2"
          onClick={toggleModal}
        >
          close
        </span>
      </Modal>
    </div>
  );
}

export default EditProfileModal;
