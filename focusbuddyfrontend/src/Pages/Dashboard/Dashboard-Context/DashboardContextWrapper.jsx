
import Dashboard from "../Dashboard";
import React,{ useContext, useEffect, useState } from "react";
import Loading from "../../../Components/UI/LoadingComponent/Loading";
import { myContext } from "../../../utils/PrivateRoutes";


const DashBoardContextWrapper = () => {
  const {appointments} = useContext(myContext);
  // const [appointments , setAppointments] = useState([]);
  // const [filteredEvents, setFilteredEvents] = useState(appointments);
  // const [isSuccess, setIsSuccess] = useState(false);
  // const [showDeleteMsg,setShowDeleteMsg] = useState(false);
  // const [showEditMsg,setShowEditMsg] = useState(false);
  // const [columns, setColumns] = useState(true);

  
  // useEffect(() => {
  //   console.log('fetch events');
  //   if(window.screen.width < 1024){
  //     setColumns(false);
  //   }
  //   const fetchAppointments = async () => {
  //     const data = await fetchEvents();
  //     setAppointments(data);
  //     // await fetchEvents();
  //   };
  //   fetchAppointments();

  // },[isSuccess,showDeleteMsg,showEditMsg]);

  // const [activeEventTab, setActiveEventTab] = useState("deskEvent");
  // const [activePartnerTab, setActivePartnerTab] = useState("anyonePartner");
  // const [isThereError, setIsThereError] = useState(false);

  // const [showConfirmation, setShowConfirmation] = useState(false);
  // const [eventIdToDelete, setEventIdToDelete] = useState(null);
  // const [matchPic, setMatchPic] = useState('demo');
  // const [quiteMode,setQuiteMode] = useState(false);
  // const [openUpEditModal,setOpenUpEditModal] = useState(false);
  // const [openEbEditModal,setOpenEbEditModal] = useState(false);
  // const [editEvent,setEditEvent] = useState(null);

  return (
    <>
      {/* <DashboardContext.Provider
        value={{
          appointments,
          setAppointments,
          quiteMode,setQuiteMode,
          setShowDeleteMsg,showDeleteMsg,
          filteredEvents,
          showEditMsg,setShowEditMsg,
          openEbEditModal,setOpenEbEditModal,
          editEvent,setEditEvent,
          openUpEditModal,setOpenUpEditModal,
          setFilteredEvents,
          columns,
          setColumns,
          eventIdToDelete,
          setEventIdToDelete,
          showConfirmation,
          setShowConfirmation,
          activeEventTab,
          setActiveEventTab,
          activePartnerTab,
          setActivePartnerTab,
          isThereError,
          setIsThereError,
          isSuccess,
          setIsSuccess,
        }}
      > */}
        {/* if there are no events in database then remove loading if there is atleast one component that ad loading */}
        {/* {appointments.length > 0 ? <Dashboard /> : <Loading/>}  */}
        <Dashboard />   
      {/* </DashboardContext.Provider> */}
    </>
  );
};

export default DashBoardContextWrapper;
