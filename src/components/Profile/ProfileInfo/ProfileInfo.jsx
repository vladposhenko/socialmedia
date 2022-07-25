import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.wrapperBlock}>
                <img className={classes.content__img} src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" alt=""></img>
            </div>
            <div className={classes.descriptionBlock}>
              <img className={classes.avatar__img} src={props.profile.photos.large} alt=""></img>
                <div>
                    <span>{props.profile.fullName}</span>
                </div>
                <h3>Обо мне</h3>
                <p>{props.profile.aboutMe}</p>
            </div>
            <div>
                <h3>Контакты</h3>
                <ul>
                    <li>Facebook: <a> {props.profile.contacts.facebook}</a></li>
                    <li>Vk: <a> {props.profile.contacts.vk}</a></li>
                    <li>Twitter: <a> {props.profile.contacts.twitter}</a></li>
                    <li>instagram: <a> {props.profile.contacts.instagram}</a></li>
                    <li>Github: <a> {props.profile.contacts.github}</a></li>
                </ul>
            </div>
            <div>
                <p>В поиске работы: {props.profile.lookingForAJob ? 'Да' : 'Нет'}</p>
                <p>{props.profile.lookingForAJobDescription}</p>
            </div>
        </div>
    )
}

export default ProfileInfo