import { useParams } from "react-router-dom";
import style from "./Profile.module.css"
import ProfileLayout from "../../components/ProfileLayout/ProfileLayout";

const Profile = () => {
    const { key } = useParams();
    
    return (
        <div className={style.contianerProfiler}>
            <ProfileLayout  profileKey={key}/>
            
        </div>
    )
};
export default Profile;