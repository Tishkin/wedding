import {makeStyles} from "@material-ui/core/styles";

export const useStylesQuestions = makeStyles((theme) => ({
        questionsContainer: {
            width: '100%',
            display: "flex",
            justifyContent: 'flex-start',
            overflow: 'hidden'
        },
        buttonWrap: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginTop:'20px'
        }
    })
);