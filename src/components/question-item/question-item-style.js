import {makeStyles} from "@material-ui/core/styles";

export const useStylesQuestionItem = makeStyles((theme) => ({
    questionWrap: {
        // minWidth: '100%',

    },
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    question: {

        marginBottom: theme.spacing(2),
        padding: theme.spacing(2),
        textAlign: 'center'

    },
    buttonWrap: {
        display: 'flex',
        justifyContent: 'center',
        margin: theme.spacing(2),

    },
    button: {},
    radioGroupWrap: {
        width: '100%'
    },
    radioGroup: {
        display: 'flex',

    },
    group: {
        display: 'flex',
        width: '100%',
        justifyContent: "space-around",
        margin: theme.spacing(1, 0),
    },
    control: {
        fontSize: '40px',
        margin: theme.spacing(1, 0),
        width: '100%',
        maxWidth: '49%'
    },
    next: {
        display: "none"
    },
    controlLabel:{
        fontSize:'1.5rem'
    }
}));