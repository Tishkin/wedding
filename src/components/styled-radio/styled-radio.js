import React from "react";
import {useStyles} from "./styled-radio-style";
import Radio from "@material-ui/core/Radio";
import clsx from "clsx";

// Inspired by blueprintjs
function StyledRadio(props) {
    const classes = useStyles();

    return (
        <Radio
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            {...props}
        />
    );
}

export default StyledRadio