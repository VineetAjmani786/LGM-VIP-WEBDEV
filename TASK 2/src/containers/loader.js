import Loader from "react-loader-spinner";
import './styles.css';

const LoaderComp = ()=>{
    return(
        <div className='app'>
            <Loader
            type="Rings"
            color="white"
            height={300}
            width={300}
            timeout={3100}
            />
       </div>
    );
}
export default LoaderComp
