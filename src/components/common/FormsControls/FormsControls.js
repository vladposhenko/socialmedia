import classes from "./FormsControls.module.css";
import {Alert, Checkbox, TextField} from "@mui/material";



export const Element = Element => ({input,meta,child,element, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.formControl  + " " + (hasError ? classes.error : "")}>
            <div>
                <Element  {...input} {...props}/>
            </div>
            {hasError &&
                <Alert severity="error">{meta.error}</Alert>
            }
        </div>
    )
}


export const Input = ({input,meta,child,element, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.formControl  + " " + (hasError ? classes.error : "")}>
            <div>
                <TextField variant="filled"  {...input} {...props}/>
            </div>
            {hasError &&
                <Alert severity="error">{meta.error}</Alert>
            }
        </div>
    )
}


export const CheckBox = ({input,meta,child,element, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.formControl  + " " + (hasError ? classes.error : "")}>
            <div>
                <Checkbox  {...input} {...props}/>
            </div>
            {hasError &&
                <Alert severity="error">{meta.error}</Alert>
            }
        </div>
    )
}
