import jwt, {decode} from "jsonwebtoken";

const checkLogin =(req, res, next)=>{
    console.log(req)
    const {authorization}=req.headers;
    try {
        console.log(req.headers)
        const token= authorization.split(" ")[1];
        const isCustomAuth = token.length<500;
        let decodeData;
        if(token && isCustomAuth){
            decodeData = jwt.verify(token,"gskjgdsik");
            req.userId = decodeData?.id;

        }else{
            decodeData= jwt.decode(token);
            req.userId = decodeData?.sub;
        }
        next()
    } catch (error) {
        console.log(error)
        
    }
}

export default checkLogin;