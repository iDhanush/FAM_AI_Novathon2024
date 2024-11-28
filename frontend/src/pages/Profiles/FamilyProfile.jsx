import React, { useState, useEffect } from "react";
import "./FamilyProfilePage.scss";

import BOY from "../../assets/images/male.svg";
import GIRL from "../../assets/images/female.svg";
import Form from "../../components/form/Form";
import { AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import ChatComponent from "../../components/ChatUI/Chatui";
import { getProfiles } from "../../utils/utils";
import { useStore } from "../../context/StoreContext";
const FamilyProfile = () => {
  const { wallet, setWallet } = useStore();
  const [popup, setPopup] = useState(false);
  const [profiles, setProfiles] = useState(null);
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const result = await getProfiles(wallet);
        setProfiles(result);
        console.log(result);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };

    fetchProfiles();
  }, [wallet,popup]);
  return (
    <div className="family-page">
      <div className="fam-profiles">
        {profiles?.map((profile) => (
          <Link to={`/fam/${profile.prfid}`} key={profile.prfid} className="profile-card">
            <div className="left-profile-box">
              <div className="name">{profile.name}</div>
              <div className="dob">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={21}
                  fill="none"
                >
                  <path
                    fill="#303030"
                    d="M6.667 5.292a.63.63 0 0 1-.625-.625v-2.5a.63.63 0 0 1 .625-.625.63.63 0 0 1 .625.625v2.5a.63.63 0 0 1-.625.625M13.333 5.292a.63.63 0 0 1-.625-.625v-2.5a.63.63 0 0 1 .625-.625.63.63 0 0 1 .625.625v2.5a.63.63 0 0 1-.625.625M7.083 12.583a.8.8 0 0 1-.316-.066.9.9 0 0 1-.275-.175.86.86 0 0 1-.242-.592.8.8 0 0 1 .067-.317q.062-.15.175-.275a.9.9 0 0 1 .275-.175.85.85 0 0 1 .908.175c.15.159.242.375.242.592 0 .05-.009.108-.017.167a.5.5 0 0 1-.05.15.6.6 0 0 1-.075.15c-.025.041-.067.083-.1.125a.88.88 0 0 1-.592.241M10 12.583a.8.8 0 0 1-.317-.066.9.9 0 0 1-.275-.175.86.86 0 0 1-.241-.592.8.8 0 0 1 .066-.317q.063-.15.175-.275a.9.9 0 0 1 .275-.175.84.84 0 0 1 .909.175c.15.159.241.375.241.592q-.002.077-.016.167a.5.5 0 0 1-.05.15.6.6 0 0 1-.075.15c-.025.041-.067.083-.1.125a.88.88 0 0 1-.592.241M12.917 12.583a.8.8 0 0 1-.317-.066.9.9 0 0 1-.275-.175l-.1-.125a.6.6 0 0 1-.075-.15.5.5 0 0 1-.05-.15 1 1 0 0 1-.017-.167c0-.217.092-.433.242-.592a.9.9 0 0 1 .275-.175.83.83 0 0 1 .908.175c.15.159.242.375.242.592q-.002.077-.017.167a.5.5 0 0 1-.05.15.6.6 0 0 1-.075.15c-.025.041-.066.083-.1.125a.88.88 0 0 1-.591.241M7.083 15.5a.8.8 0 0 1-.316-.067 1 1 0 0 1-.275-.175.88.88 0 0 1-.242-.591.8.8 0 0 1 .067-.317q.062-.162.175-.275c.308-.308.875-.308 1.183 0 .15.158.242.375.242.592a.88.88 0 0 1-.242.591.88.88 0 0 1-.592.242M10 15.5a.88.88 0 0 1-.592-.242.88.88 0 0 1-.241-.591.8.8 0 0 1 .066-.317q.063-.162.175-.275c.309-.308.875-.308 1.184 0a.8.8 0 0 1 .175.275c.041.1.066.208.066.317a.88.88 0 0 1-.241.591.88.88 0 0 1-.592.242M12.917 15.5a.88.88 0 0 1-.592-.242.8.8 0 0 1-.175-.275.8.8 0 0 1-.067-.316q.002-.165.067-.317.063-.162.175-.275a.83.83 0 0 1 .908-.175q.075.025.15.075c.042.025.084.067.125.1.15.158.242.375.242.592a.88.88 0 0 1-.242.591.88.88 0 0 1-.591.242M17.083 8.7H2.917a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h14.166a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625"
                  />
                  <path
                    fill="#303030"
                    d="M13.333 19.458H6.667c-3.042 0-4.792-1.75-4.792-4.791V7.583c0-3.041 1.75-4.791 4.792-4.791h6.666c3.042 0 4.792 1.75 4.792 4.791v7.084c0 3.041-1.75 4.791-4.792 4.791M6.667 4.042c-2.384 0-3.542 1.158-3.542 3.541v7.084c0 2.383 1.158 3.541 3.542 3.541h6.666c2.384 0 3.542-1.158 3.542-3.541V7.583c0-2.383-1.158-3.541-3.542-3.541z"
                  />
                </svg>
                {profile.dob}
              </div>
              <div className="data-tabs">
                <div className="tabb">{profile.gender}</div>
                <div className="tabb">{profile.blood}</div>
              </div>
            </div>
            {profile.gender == "Male" ? (
              <img src={BOY} className="avathar"></img>
            ) : (
              <img src={GIRL} className="avathar"></img>
            )}
          </Link>
        ))}
      </div>
      <div className="bottom-bar">
        <div className="add-profile-btn" onClick={() => setPopup(!popup)}>
          Add New Member
        </div>
      </div>
      <AnimatePresence>
        {popup && <Form popup={popup} setPopup={setPopup} />}
      </AnimatePresence>
      {/* <ChatComponent/> */}
    </div>
  );
};

export default FamilyProfile;
