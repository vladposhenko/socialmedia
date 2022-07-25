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
            <div class="row margin" className={classes.descriptionBlock}>
              <img class="col s2" className={classes.avatar__img} src={props.profile.photos.large} alt=""></img>
                <div class="col s4">
                    <p>{props.profile.fullName}</p>
                    <h6>Статус:</h6>
                    <p>{props.profile.aboutMe}</p>
                </div>
            </div>
            <div>

                <ul class="collection with-header">
                    <li class="collection-header">Contacts</li>
                    <li class="collection-item">Facebook: <a> {props.profile.contacts.facebook}</a></li>
                    <li class="collection-item">Vk: <a> {props.profile.contacts.vk}</a></li>
                    <li class="collection-item">Twitter: <a> {props.profile.contacts.twitter}</a></li>
                    <li class="collection-item">instagram: <a> {props.profile.contacts.instagram}</a></li>
                    <li class="collection-item">Github: <a> {props.profile.contacts.github}</a></li>
                </ul>
            </div>
            <div class="collection">
                <p class="collection-item">В поиске работы: {props.profile.lookingForAJob ? 'Да' : 'Нет'}</p>
                <p class="collection-item">{props.profile.lookingForAJobDescription}</p>
            </div>
        </div>
    )
}

export default ProfileInfo