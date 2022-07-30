import './choice.scss';

interface ChoiceInterface {
    title: string,

    imageArray: Array<any>,
    bottomText: Array<String>,

    isEvacuateImage: boolean,
}

export default function Choice(props: ChoiceInterface) {

    return (
        <div className={props.isEvacuateImage ? "choice image_1" : "choice image_2"}>
            <div className="choice-title">
                <div className="title-text"> {props.title} </div>
            </div>

            <div className="choice-images">
                {
                    props.imageArray.map((item, index, arr) => {
                        return (
                            <div className={arr.length - 1 != index ? "images-container" : "images-container end-container"} key={index}>
                                <div className="images-container-item">
                                    <div style={{ width: "100%", marginBottom: "30px" }}>
                                        <img src={item} className="item-image" />
                                    </div>
                                    <div style={{ width: "100%" }}>
                                        {
                                            props.isEvacuateImage ? (
                                                <p>
                                                    {props.bottomText[index].split(' ')[0]}
                                                    <br />
                                                    {props.bottomText[index].split(' ')[1]}
                                                </p>
                                            ) : (
                                                <p>
                                                    {props.bottomText[index]}
                                                </p>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}