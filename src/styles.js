import makeStyles from "@emotion/styled";

const useStyles = makeStyles({
    appBar:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    container:{
        padding:"20px"
    },
    icon:{
        marginRight:"20px"
    },
    buttons:{
        marginTop:"50px"
    },
    cardGrid:{
        padding:"20px 0"
    },
    card:{
        height:"100%",
        display:"flex",
        flexDirection:"column",
    },
    cardMedia:{
        paddingTop:"56.25%"
    },
    cardContent:{
        flexGrow:1
    },
    footer:{
        background:"red",
        padding:"50px 0"
    }

});
export default useStyles;