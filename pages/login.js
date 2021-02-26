import firbaseInstance from '../config/firebase';
import 'firebase/auth';
import firebase from 'firebase';

    Login.getInitialProps= async ()=>{

        try {
            const auth = await firbaseInstance.auth('borres-burger').user();
            const document= await auth().get();

            if (document.exist !== true){
                throw new Error('Dokumentet finnes ikke');
            }
        }catch(error){
            return {
                error:error.message
            };
            
        }
    } 
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential)=>{
        let user = userCredential.user;
    })
    .catch((error)=>{
        let errorCode = error.code;
        let errorMassage=error.message;
    });
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential)=>{
        let user = userCredential
    })
    .catch ((error)=>{
        let errorCode = error.code;
        let errorMessanger=error.message;
    });
    firebase.auth().onAuthStateChange((user)=>{
        if (user){
            let uid = user.uid;
        }else{

        }
    })

function Login(){

    return(
        <div>
            <h1>Hello</h1>
        </div>

    )
}

    
export default Login;