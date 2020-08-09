import {makeStyles} from "@material-ui/core/styles";

export const useStylesContent = makeStyles((theme) => ({
    app: {
        flexGrow: 1,
        padding: theme.spacing(10, 5),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
}));