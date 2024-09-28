import { MdEdit } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import moment from "moment";
import { myContext } from "../../../../utils/PrivateRoutes";
import { useContext, useState, useEffect, useCallback } from "react";
import { LuLampDesk } from "react-icons/lu";
import { FaPersonWalking } from "react-icons/fa6";
import { IoShuffle } from "react-icons/io5";
import EditEventModal from "./EditEventModal";
import { IoMdMicOff } from "react-icons/io";
import { FaStar } from "react-icons/fa";


function EventBox({ event, handleConfirm }) {
  const { userProfile } = useContext(myContext);
  // console.log(userProfile);
  const {
    appointments,
    openEbEditModal,
    setOpenEbEditModal,
    editEvent,
    setEditEvent,
  } = useContext(myContext);

  // console.log("openeditmodal", openEbEditModal);
  const [isInFav,setIsInFav] = useState(false);
  
  useEffect(() => {
    const checkFavorite = () => {
      // const formattedEventName = getFormattedName(event.name);
      const isFavorite = userProfile.favorites.some(fav => fav.name === event.event.matchedPersonFullName);
      setIsInFav(isFavorite);
    };
    checkFavorite();
  }, [event.event.name, userProfile.favorites,appointments]);

  // console.log('new Event',matchPic);
  // console.log('EventBox',event.event, 'user',userProfile);

  function handleEdit(eventid) {
    setOpenEbEditModal(true);
    const event_to_edit = appointments.filter(
      (appointment) => appointment.myID === eventid
    );
    console.log(event_to_edit);
    setEditEvent(event_to_edit);
  }

  // console.log('isInFav',isInFav)
  return (
    <>
      <div className="flex relative justify-start items-center gap-2">
        <div className="relative">
          <img
            className="w-6 h-6 md:hidden lg:block lg:w-6 lg:h-6 xl:w-8 xl:h-8 rounded-3xl border-textcolor border"
            src={
              userProfile.givenName +
                " " +
                (userProfile.familyName ? userProfile.familyName[0] : " ") ===
              event.event.name
                ? event.event.matchedPersonProfilePic
                : event.event.profilePic
            } //profilepic of person with whom i got match
            alt=""
          />
          {
            isInFav ? 
            <div className="absolute -bottom-0.5 -right-0.5 p-0.5 bg-greenbg rounded-full" style={{zIndex: 2002}}>
            <FaStar className="text-[13px] text-white" />
          </div>
          :null
          }
          
        </div>

        <div className="w-[70%] xl:w-[60%]">
          <p className="text-[12px] ">
            {moment(event.event.start).format("hh:mm a")}
          </p>
          <span className="capitalize text-[12px] xl:text-[14px]">
            {userProfile.givenName +
              " " +
              (userProfile.familyName ? userProfile.familyName[0] : " ") ===
            event.event.name
              ? event.event.matchedPersonName
              : event.event.name}
          </span>
          {/* <span className="capitalize text-[13px]">
            {event.event.matchedPersonName }
          </span> */}
        </div>
        <div className="flex gap-1 text-sm xl:text-lg absolute right-0 top-1">
          {event.event.quiteModeOn ? <IoMdMicOff /> : null}
          {event.event.taskType === "deskEvent" ? (
            <LuLampDesk />
          ) : event.event.taskType === "movingEvent" ? (
            <FaPersonWalking />
          ) : (
            <IoShuffle />
          )}
        </div>
      </div>

      {event.event.name ===
        userProfile.givenName +
          " " +
          (userProfile.familyName ? userProfile.familyName[0] : " ") ||
      event.event.matchedPersonName !== "Matching..." ? (
        <div className="flex justify-end gap-2">
          <button
            type="button"
            className="p-1 text-sm rounded-full bg-white text-textcolor border border-textcolor hover:bg-gray-200"
            onClick={() => handleEdit(event.event.myID)}
          >
            <MdEdit />
          </button>
          <button
            type="button"
            className="p-1 text-sm rounded-full bg-white text-textcolor border border-textcolor hover:bg-gray-200"
            onClick={() => handleConfirm(event.event.myID)}
          >
            <IoMdClose />
          </button>
        </div>
      ) : null}
      {openEbEditModal ? (
        <EditEventModal
          openEditModal={openEbEditModal}
          setOpenEditModal={setOpenEbEditModal}
          eventToEdit={editEvent}
        />
      ) : null}
    </>
  );
}

export default EventBox;
