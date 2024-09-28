import DashboardInnerNav from "../../Components/navbar/DashboardInnerNav";
import { useState, useContext } from "react";
import { myContext } from "../../utils/PrivateRoutes";
import EditNameModal from "../../Components/UI/EditNameModal.jsx/EditNameModal";
import EditFavoritesModal from "../../Components/UI/EditFavoritesModal.jsx/EditFavoritesModal";
import { Modal } from "flowbite-react";
import EditQuiteModeModal from "../../Components/UI/EditQuiteModeModal/EditQuiteModeModal";
import EditGenderModal from "../../Components/UI/EditGenderModal/EditGenderModal";
import GenderPreference from "../../Components/UI/GenderPreference.jsx/GenderPreference";
import {Link} from 'react-router-dom';
import { MdEdit } from "react-icons/md";

export default function Settings() {
  const { userProfile, setUserProfile } = useContext(myContext);
  const [openNameEditModal, setOpenNameEditModal] = useState(false);
  const [openFavoritesEditModal, setOpenFavoritesEditModal] = useState(false);
  const [openQuiteModeEditModal, setOpenQuiteModeEditModal] = useState(false);
  const [openGenderEditModal, setOpenGenderEditModal] = useState(false);
  const [openGenderPreferenceModal, setOpenGenderPreferenceModal] =
    useState(false);
    const [loading, setLoading] = useState(false);

    // const handleMangeSubscription = async (req,res) => {
    //   setLoading(true);
    //   try{
    //     const response = await stripePortal(userProfile);
    //     if(response){
    //       setLoading(false);
    //     }
    //   }catch(err){
    //     console.log(err);
    //   }
    // } 

  return (
    <>
      <DashboardInnerNav />

      <div className="max-w-screen-md min-h-screen mx-auto pt-10">
        <div className="bg-greenbg text-4xl text-center py-6 px-20 rounded-t-md text-white ">
          {" "}
          Settings
        </div>
        <div className="pt-10 pb-20 px-4 lg:p-14 bg-white">
          <div className="r">
            <h1 className="w-fit text-2xl lg:text-3xl text-textcolor p-2 font-medium border-b-2 border-greenbg">
              Preferences
            </h1>
            <div
              onClick={() => setOpenFavoritesEditModal(true)}
              className="group mt-10 py-4 px-2 lg:p-4 flex gap-3 lg:gap-4 hover:bg-[#dddddd47] border-y-2 border-lightbg cursor-pointer"
            >
              <div>
                <p className="font-medium text-[14px] xl:text-lg">Availability:</p>
              </div>
              <div className="flex gap-4 items-center">
                <p className="group-hover:text-black text-[14px] xl:text-lg text-formgray">
                  {userProfile.availabilityStatus}
                </p>
                <MdEdit/>
              </div>
            </div>

            <Modal
              id="EditFavoriteModal"
              className="settingsModal"
              show={openFavoritesEditModal}
              style={{ zIndex: 10000 }}
              size="2xl"
              onClose={() => setOpenFavoritesEditModal(false)}
              popup
            >
              <Modal.Header />
              <Modal.Body id="EditFavoriteModalBody">
                <EditFavoritesModal
                  userProfile={userProfile}
                  setUserProfile={setUserProfile}
                  setOpenFavoritesEditModal={setOpenFavoritesEditModal}
                />
              </Modal.Body>
            </Modal>

            <div
              onClick={() => setOpenQuiteModeEditModal(true)}
              className="mt-10 group my-4 py-4 px-2 lg:p-4 flex gap-3 lg:gap-4 hover:bg-[#dddddd47] border-y-2 border-lightbg cursor-pointer"
            >
              <div>
                <p className="font-medium text-[14px] xl:text-lg">Quite Mode:</p>
              </div>
              <div className="flex gap-4 items-center">
                <p className="group-hover:text-black text-[14px] xl:text-lg text-formgray">
                  {userProfile.quiteModeMatchAllowed
                    ? "I’m okay being matched with someone in Quiet Mode even if I’m not in Quiet Mode"
                    : "Don’t match me with someone in Quiet Mode unless I’m also in Quiet Mode"}
                </p>
                <MdEdit className="text-4xl md:text-2xl"/>
              </div>
            </div>
            <Modal
              id="EditQuiteModeModal"
              className="settingsModal"
              show={openQuiteModeEditModal}
              style={{ zIndex: 10000 }}
              size="2xl"
              onClose={() => setOpenQuiteModeEditModal(false)}
              popup
            >
              <Modal.Header />
              <Modal.Body id="EditQuiteModeModalBody">
                <EditQuiteModeModal
                  userProfile={userProfile}
                  setUserProfile={setUserProfile}
                  setOpenQuiteModeEditModal={setOpenQuiteModeEditModal}
                />
              </Modal.Body>
            </Modal>

            <div onClick={() => setOpenGenderPreferenceModal(true)} className="mt-10 group py-4 px-2 lg:p-4 flex gap-3 lg:gap-4 hover:bg-[#dddddd47] border-y-2 border-lightbg cursor-pointer">
              <div>
                <p className="font-medium text-[14px] xl:text-lg">
                  Gender Preference:
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <p className="group-hover:text-black text-[14px] xl:text-lg text-formgray">
                  {
                   userProfile.noMatchWithGender !== "everyone"
                   ?
                   "Not" + ' ' +  userProfile.noMatchWithGender
                   :
                   userProfile.matchWithGender !== "everyone"
                   ?
                   "Only" + ' ' +  userProfile.matchWithGender
                   :
                   "Match me with everyone"
                  }
                </p>
                <MdEdit/>
              </div>
            </div>
            <Modal
              id="EditGenderPreferenceModal"
              className="settingsModal"
              show={openGenderPreferenceModal}
              style={{ zIndex: 10000 }}
              size="2xl"
              onClose={() => setOpenGenderPreferenceModal(false)}
              popup
            >
              <Modal.Header />
              <Modal.Body id="EditGenderPreferenceModal">
                <GenderPreference
                  userProfile={userProfile}
                  setUserProfile={setUserProfile}
                  setOpenGenderPreferenceModal={setOpenGenderPreferenceModal}
                  setOpenGenderEditModal={setOpenGenderEditModal}
                />
              </Modal.Body>
            </Modal>
          </div>

          <div className="mt-10">
            <h1 className="w-fit text-2xl lg:text-3xl text-textcolor p-2 font-medium border-b-2 border-greenbg">
              Account
            </h1>
            <div className="gap-10">
              <div
                onClick={() => setOpenNameEditModal(true)}
                className="group mt-10 py-4 px-2 lg:p-4 flex gap-3 lg:gap-4 hover:bg-[#dddddd47] border-y-2 border-lightbg cursor-pointer"
              >
                <div>
                  <p className="font-medium text-[14px] xl:text-lg">Name:</p>
                </div>
                <div className="flex space-y-2 lg: flex-col lg:flex-row lg:gap-20 text-formgray">
                  <p className="group-hover:text-black flex gap-4 items-center text-[14px] xl:text-lg">
                    {userProfile.displayName}
                    <MdEdit className="text-black"/>
                  </p>
                  <p className="group-hover:text-black text-[14px] xl:text-lg">
                    ( Display name:{" "}
                    {userProfile.givenName +
                      " " +
                      (userProfile.familyName
                        ? userProfile.familyName[0]
                        : " ")}{" "}
                    )
                  </p>
                </div>
              </div>
              <Modal
                id="EditNameModal"
                className="settingsModal"
                show={openNameEditModal}
                style={{ zIndex: 10000 }}
                size="2xl"
                onClose={() => setOpenNameEditModal(false)}
                popup
              >
                <Modal.Header />
                <Modal.Body id="EditNameModalBody">
                  <EditNameModal
                    setOpenNameEditModal={setOpenNameEditModal}
                    userProfile={userProfile}
                    setUserProfile={setUserProfile}
                  />
                </Modal.Body>
              </Modal>

              <div
                onClick={() => setOpenGenderEditModal(true)}
                className="group mt-10 py-4 px-2 lg:p-4 flex gap-3 lg:gap-4 hover:bg-[#dddddd47] border-y-2 border-lightbg cursor-pointer"
              >
                <div>
                  <p className="font-medium text-[14px] xl:text-lg">Gender(s):</p>
                </div>
                <div className="flex 40 text-formgray">
                  <p className="group-hover:text-black flex gap-4 items-center text-[14px] xl:text-lg">
                    {userProfile.userGender.length < 2 ?
                    userProfile.userGender[0]
                    : userProfile.userGender.join()}
                    <MdEdit className="text-black"/>
                  </p>
                </div>
              </div>

              <Modal
                id="EditGenderModal"
                className="settingsModal"
                show={openGenderEditModal}
                style={{ zIndex: 10000 }}
                size="2xl"
                onClose={() => setOpenGenderEditModal(false)}
                popup
              >
                <Modal.Header />
                <Modal.Body id="EditGenderModalBody">
                  <EditGenderModal
                    userProfile={userProfile}
                    setUserProfile={setUserProfile}
                    setOpenGenderEditModal={setOpenGenderEditModal}
                  />
                </Modal.Body>
              </Modal>

              <div className="group mt-10 py-4 px-2 lg:p-4 flex gap-3 lg:gap-4 hover:bg-[#dddddd47] border-y-2 border-lightbg cursor-pointer">
                <div>
                  <p className="font-medium text-[14px] xl:text-lg">
                    Subscription:
                  </p>
                </div>
                <div>
                <Link to={'/account/plan/manage-subscription'} className="text-white text-[14px] xl:text-lg bg-textcolor py-3 px-6 rounded-md">
                  
                  Manage Subscription 
                </Link>
                  <p className="mt-4 text-formgray text-[14px] xl:text-lg">
                    Update your payment method, view invoices and cancel/renew.
                  </p>
                </div>
              </div>

              <div className="mt-10 lg:mt-20 p-4">
                <Link to={'/account/delete'} className="mt-10 bg-errorred rounded-md text-white py-3 px-6 text-[14px] xl:text-lg hover:-translate-y-2 transition-all duration-500 ease-in-out">
                  Delete Account
                </Link>
                <p className="mt-4 text-formgray text-[14px] xl:text-lg">
                  Permanently delete your account and all your data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
