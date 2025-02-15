// Image
const Portfolio =  "ThirdSection/Website.svg"
const Ubisoft = "ThirdSection/Ubisoft_logo.svg"
const BF = "ThirdSection/BF.svg"
const PhotoApp = "ThirdSection/PhotoApp.svg"
const MovieSearchEngine = "ThirdSection/MovieSearchEngine.svg"
const Doodle = "ThirdSection/DoodlePark.svg"
const SyncSo = "ThirdSection/syncso_logo 1.svg"
const Outlier = "ThirdSection/Outlier logo.svg"

interface ImageProps {
    imgId?: string;
}

function CustomizedImage ({ imgId }: ImageProps) {
    return(
        <>  
            {imgId === 'Portfolio' && (
                <div>
                    <img className="img-sizing" src={Portfolio}></img>
                </div>
            )}
            {imgId === 'SyncSo' && (
                <div>
                    <img className="img-sizing" src={SyncSo}></img>
                </div>
            )}
            {imgId === 'Outlier' && (
                <div>
                    <img className="img-sizing" src={Outlier}></img>
                </div>
            )}
            {imgId === 'Ubisoft' && (
                <div>
                    <img className="img-sizing" src={Ubisoft}></img>
                </div>
            )}
            {imgId === 'BF' && (
                <div>
                    <img className="img-sizing" src={BF}></img>
                </div>
            )}
            {imgId === 'PhotoApp' && (
                <div>
                    <img className="img-sizing" src={PhotoApp}></img>
                </div>
            )}
            {imgId === 'MovieSearchEngine' && (
                <div>
                    <img className="img-sizing" src={MovieSearchEngine}></img>
                </div>
            )}
            {imgId === 'Doodle' && (
                <div>
                    <img className="img-sizing" src={Doodle}></img>
                </div>
            )}
        </>
    )
}

export default CustomizedImage;