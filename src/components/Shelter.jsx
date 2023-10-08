import morskieoko from "../assets/morskieoko.jpg";
import heart from "../assets/heart.svg";


function Shelter(props) {

    return (
        <>
            <section className="shelter-container">
                <div className="shelter-container__container">
                    <img src={morskieoko} alt="" width="200"/>
                    <img src={heart} alt="" width="20" height="20"/>
                    {props.shelterName}
                </div>
            </section>
        </>
    );
}

export default Shelter;