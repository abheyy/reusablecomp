import ProfileCard from "./ProfileCard";

function App(){
    return(
        <div>
            <div>Personal Assistant</div>
            <ProfileCard title="alexa" handle="@alexa12"/>
            <ProfileCard title="cortana" handle="@alexa45"/>
            <ProfileCard title="siri" handle="@siri23"/>
        </div>
    );

}

export default App;