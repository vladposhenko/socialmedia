import React, {useEffect, useState} from "react"


const ProfileStatusWithHooks = (props) =>  {
        let [editMode, setEditMode] = useState(false)
        let [status, setStatus] = useState(props.status)

        useEffect(() => {
            setStatus(props.status)
        },[props.status])
        const activateEditMode = () => {
            setEditMode(true)
        }

        const deleteEditMode = () => {
            setEditMode(false)
            props.updateStatus(status)
        }

        const onStatusChange = (e) => {
            setStatus(e.currentTarget.value)
        }

    return <>
            <h6>Статус:</h6>
            {!editMode &&
                <p onDoubleClick={activateEditMode}>{props.status || 'NO STATUS'}</p>
            }
            {editMode &&
                <input onChange={onStatusChange}  autoFocus={true} value={status} onBlur={deleteEditMode}  type="text"/>
            }
        </>
}

export default ProfileStatusWithHooks