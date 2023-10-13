import background from '../assets/about-background.jpg';

function Opening() {
    return (
        <>
            <section className="opening">
                <div className="opening__content">
                    <h1 className="opening__header">Schroniska Tatr Polskich</h1>
                    <p className="opening__heading">Sam dokonaj oceny schronisk, a my pokażemy Ci, które jest
                        najlepsze</p>
                    <a href="#" className="btn btn--primary btn--large">Oceń schronisko</a>
                </div>
                <img src={background} alt="Copyright: Pawel Murzyn" className="opening__image"></img>
            </section>
        </>
    );
}


export default Opening;