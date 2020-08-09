import React, {useState} from "react";

import {useStylesQuestion} from './question-style'
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

const Question = () => {
    const classes = useStylesQuestion();
    const [value, setValue] = useState('')

    const handleChangeRadioGroup = (event) => {
        setValue(event.target.value);
    }
    return (
        <div className={classes.questionWrap}>
            <Paper className={classes.question} elevation={3}>
                <Typography variant="h2" component="h1">
                    Какое отчество у Анастасии?
                </Typography>
            </Paper>

            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <FormControl className={classes.radioGroupWrap} component="fieldset">
                        <FormLabel component="legend">Варианты ответа:</FormLabel>
                        <RadioGroup className={classes.radioGroup} aria-label="gender" name="gender1" value={value} onChange={handleChangeRadioGroup}>
                            <div className={classes.group}>
                                <FormControlLabel className={classes.control} value="female" control={<Radio/>} label="Femalessssssssssssssssssssssssssssssssssss sssssssssssss s s ssssssssssfhsd fhsdfhsdfhsdfh sdfhsdfhsdfhetujwseth wrtjasefhwsyrjatrehwrtejhwatrejh wathw dsavadf awg aerg aebadef bafgssssssssssssss ssssssssss s sssssssssssssss s ssssssssssssssssssss s s ssssssssss"/>
                                <FormControlLabel className={classes.control} value="male" control={<Radio/>} label="Male ssssssssssssssssssssssssssssssssssss sssssssssssss s s ssssssssssssssssssssssss ssssssssss s sssssssssssssss s ssssssssssssssssssss s s ssssssssss"/>
                            </div>
                            <div className={classes.group}>
                                <FormControlLabel className={classes.control}  value="other" control={<Radio/>} label="Other ssssssssssssssfhgfghssh  hsdfh sdfh sdfhsdfhsdfhsd fhsdfhsdfhsdfh sdfhsdfhsdfhetujwseth wrtjasefhwsyrjatrehwrtejhwatrejh wathwastehq ssssssssssssssssssssss sssssssssssss s s ssssssssssssssssssssssss ssssssssss s sssssssssssssss s ssssssssssssssssssss s s ssssssssss"/>
                                <FormControlLabel className={classes.control} value="d" control={<Radio/>} label="(Disabled option) ssssssssssssssssssssssssssssssssssss sssssssssssss s s ssssssssssssssssssssssss ssssssssss s sssssssssssssss s ssssssssssssssssssss s s ssssssssss"/>
                            </div>
                        </RadioGroup>
                    </FormControl>
                </CardContent>
                <CardActions className={classes.buttonWrap}>
                    <Button variant="contained" size="large" color="primary" className={classes.button}>
                        Правильный ответ
                    </Button>
                </CardActions>
            </Card>

        </div>
    )
}

export default Question;