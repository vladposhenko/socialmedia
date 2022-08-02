import React from "react"


class ProfileStatus extends React.Component{

    state = {
      editMode: false,
      status:this.props.status,
    }

    activateEditMode = () => {
        console.log(this)
        this.setState({
            editMode: true
        })
    }

    deleteEditMode = () => {
        this.setState({
            editMode:false,
        })
        this.props.updateStatus(this.state.status)
    }


    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
    })
    }

    componentDidUpdate(prevProps,prevState,) {
        debugger;
        if(prevProps.status !== this.props.status){
            this.setState({
                status:this.props.status,
            })
        }
    }

    render() {
        return <>
            <h6>Статус:</h6>
            {!this.state.editMode &&
                <p onDoubleClick={this.activateEditMode}>{this.props.status || 'NO STATUS MAZAFAKA'}</p>
            }
            {this.state.editMode &&
                <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deleteEditMode} value={this.state.status} type="text"/>
            }
        </>

    }
}

export default ProfileStatus