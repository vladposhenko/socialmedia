import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.wrapperBlock}>
                <img className={classes.content__img} src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" alt=""></img>
            </div>
            <div className={classes.descriptionBlock}>
              <img className={classes.avatar__img} src="https://www.researchgate.net/profile/Hanhe-Lin/publication/344400221/figure/fig1/AS:940579932348417@1601263139233/SAN-and-Tarsier-on-the-baboon-image-from-Set-14-The-image-generated-by-SAN-is-visibly.ppm" alt=""></img>
            </div>
        </div>
    )
}

export default ProfileInfo