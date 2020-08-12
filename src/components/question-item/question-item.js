import React, {useState} from "react";

import {useStylesQuestionItem} from './question-item-style'
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
import StyledRadio from "../styled-radio";
import green from "@material-ui/core/colors/green";
import withStyles from "@material-ui/core/styles/withStyles";

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(green[500]),
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
}))(Button);


const QuestionItem = (props) => {

    debugger
    const {question: {quest, answer, a, b, c, d, id}, failPlay,successPlay} = props;
    const classes = useStylesQuestionItem();
    const [value, setValue] = useState('')
    const [isCheckAnswer, setIsCheckAnswer] = useState(false)
    const [checkValue, setCheckValue] = useState()
    const [isAnswer] = useState(answer);


    const handleChangeRadioGroup = (event) => {
        setValue(event.target.value);
    }

    const handleClickAnswer = (event) => {

        if (checkValue === isAnswer) {
            successPlay();
        } else {
            failPlay()
        }

        setIsCheckAnswer(true)
        setValue(isAnswer)
    }

    const handleChangeCheckBox = (event) => {
        setCheckValue(event.currentTarget.value);
        debugger;
    }
    return (
        // <div className={`${classes.questionWrap} slideLeft ${isNext ? classes.next : ''}`}>
        <>
            <Paper className={classes.question} elevation={3}>
                <Typography variant="h2" component="h1">
                    {quest}
                </Typography>
            </Paper>

            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <FormControl className={classes.radioGroupWrap} component="fieldset">
                        <FormLabel component="legend"><span
                            className={classes.controlLabel}>Варианты ответа:</span></FormLabel>
                        <RadioGroup className={classes.radioGroup} aria-label="gender" name={`question${id}`}
                                    value={value}
                                    onChange={handleChangeRadioGroup}>
                            <div className={classes.group}>
                                <FormControlLabel className={classes.control} value={a}
                                                  label={<span className={classes.controlLabel}>{a}</span>}
                                                  onChange={handleChangeCheckBox}
                                                  control={
                                                      isCheckAnswer && isAnswer === a ? <StyledRadio/> :<Radio/>
                                                  }/>
                                <FormControlLabel className={classes.control} value={b}
                                                  label={<span className={classes.controlLabel}>{b}</span>}
                                                  onChange={handleChangeCheckBox}
                                                  control={
                                                      isCheckAnswer && isAnswer === b ? <StyledRadio/> :<Radio/>
                                                  }/>
                            </div>
                            <div className={classes.group}>
                                <FormControlLabel className={classes.control} value={c}
                                                  label={<span className={classes.controlLabel}>{c}</span>}
                                                  onChange={handleChangeCheckBox}
                                                  control=
                                                      {isCheckAnswer && isAnswer === c ? <StyledRadio/> : <Radio/>
                                                      }/>
                                <FormControlLabel className={classes.control}
                                                  value={d}
                                                  label={<span className={classes.controlLabel}>{d}</span>}
                                                  onChange={handleChangeCheckBox}
                                                  control={
                                                      isCheckAnswer && isAnswer === d ? <StyledRadio/> : <Radio/>
                                                  }/>
                            </div>
                        </RadioGroup>
                    </FormControl>
                </CardContent>
                <CardActions className={classes.buttonWrap}>
                    <ColorButton
                        className={classes.button}
                        disabled={isCheckAnswer}
                        onClick={handleClickAnswer}
                        variant="contained"
                        size="large"
                        color="primary"
                    >
                        Правильный ответ
                    </ColorButton>
                </CardActions>
            </Card>
        </>
        // </div>
    )
}

export default QuestionItem;