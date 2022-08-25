import classes from "./ProfileInfo.module.css";
import {Field, reduxForm} from "redux-form";
import {CheckBox, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {Alert} from "@mui/material";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <button>Save</button>
            {error &&
                <Alert severity="error" className={classes.error}>
                    {error}
                </Alert>
            }
            <div className={classes.profileInfo}>
                <p><b>Nickname: </b> <Field name={'fullName'} component={Input}/> </p>

            </div>
            <div className={classes.contactsBlock} >
                <ul>
                    {Object.keys(profile.contacts).map((key) => {
                        return <div key={key} contactTitle={key} contactValue={profile.contacts[key]}>
                            <b>{key}: <Field placeholder={key} name={'contacts.' + key} component={Input}/></b>
                        </div>
                    })}
                </ul>
            </div>
            <div className={classes.collection}>
                <p className="collection-item"> <b>Looking for a job:</b>
                    <Field name={'lookingForAJob'} component={CheckBox}/>
                </p>
                <p>
                </p>
                <p className="collection-item"> <b>My skills:</b> <Field name={'lookingForAJobDescription'} component={Textarea}/> </p>
                <p> <b>About Me:</b> <Field name={'aboutMe'} component={Textarea}/></p>
            </div>

        </form>

    )
}
const ProfileReduxDataForm = reduxForm({
    form: 'profileData'
})(ProfileDataForm)
export default ProfileReduxDataForm