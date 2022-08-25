import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";
const  ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    if(!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false)
        })

    }
    return (
        <div className={classes.wrapper}>
            <div className={classes.wrapperBlock}>
                <img  className={classes.content__img}
                     src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                     alt="" ></img>
            </div>
            <div className={classes.infoBlock}>
                <div class="row margin" className={classes.descriptionBlock}>
                  <img  class="col s2" className={classes.avatar__img} src={props.profile.photos.large
                      ? props.profile.photos.large
                      : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  } alt=""></img>
                    {props.isOwner  &&
                        <div className={classes.inputWrapper}>
                            <input className={classes.inputFile} type="file" id="input__file" onChange={onMainPhotoSelected}/>
                            <label className={classes.inputFileButton} htmlFor="input__file">
                                <span className={classes.inputFileIconWrapper}>+</span>
                                <span className={classes.inputFileButtonText}>Загрузить аватар</span>
                            </label>
                        </div>
                        }

                </div>
                <ProfileStatusWithHooks aboutMe={props.profile.aboutMe} status={props.status} updateStatus={props.updateStatus}/>
            </div>
            {editMode
                ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} goToEditMode={() => {setEditMode(true)}}/>
                : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => {setEditMode(true)}} /> }
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <button onClick={goToEditMode}>Edit Contacts</button>}
            <div className={classes.profileInfo}>
                <p><b>Nickname: </b>  {profile.fullName}</p>
                {/*<ProfileStatusWithHooks aboutMe={profile.aboutMe} status={profile.status} updateStatus={profile.updateStatus}/>*/}
            </div>
            <div className={classes.contactsBlock} >
                <ul>
                    {Object.keys(profile.contacts).map((key) => {
                        return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                    })}
                </ul>
            </div>
            <div className={classes.collection}>
                <p className="collection-item"> <b>Looking for a job:</b> {profile.lookingForAJob ? 'Yes' : 'No'}</p>
                {profile.lookingForAJob &&
                    <p className="collection-item"> <b>My skills:</b> {profile.lookingForAJobDescription}</p>
                }
                <p> <b>About me:</b> {profile.aboutMe} </p>
            </div>
        </div>

    )
}

const Contacts = ({contactTitle, contactValue}) => {
    return (
        <div> <b>{contactTitle}</b>:{contactValue}   </div>
    )
}

export default ProfileInfo