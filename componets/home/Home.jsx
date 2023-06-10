'use client'

import Login from "@componets/Login"
import MyCampaigns from "@componets/MyCampaigns"
import SignUp from "@componets/SignUp"
import StartCampaign from "@componets/StartCampaign"

// import Login from "@app/login/page"

const Home = () => {
  return (
<>
    <Login/>
    <SignUp/>
    <StartCampaign/>
    <MyCampaigns/>
</>
    )
}

export default Home