import React from 'react';
import classes from "./PrintInformation.module.scss"

const PrintInformation=(props)=>{
    
    return(
        <div className={classes['item-information']}>
            <span className={classes['title']}>{props.data.name}</span>
            <span className={classes['desc']}>{props.data.description}</span>
            <span className={classes['price']}>$ {props.data.price}</span>
        </div>
    )

}
export default PrintInformation;