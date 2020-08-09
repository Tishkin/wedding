import {makeStyles} from "@material-ui/core/styles";

export const useStylesApp = makeStyles((theme) => ({
    app: {
        flexGrow: 1,
        width: '100%',
        height: '100%',
        padding: theme.spacing(10, 5),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));