import { Dna } from "react-loader-spinner";
import { LoaderSpinner } from './Loader.styled';

export const Loader = () => {
    return (
        <LoaderSpinner>
            <Dna
            visible={true}
            ariaLabel="dna-loading"
            z-index='99'
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            />
        </LoaderSpinner>
    );
}