const Events = () => {
    const hundleclick = () => {
        console.log("Executau clique")
    };
    const renderSomething = (x) => {
        if(x){
            return <h1>Processo em Renderizamento</h1>
        }else{
            return <h1>Processo em renderizado!</h1>
        }
    }
    return (
        <div>
            <div>
                <button onClick={()=>console.log("testando um evento")}>
                    Clique Aqui
                </button>
            </div>
            <div>
                <button onClick={hundleclick}>Novo Clique</button>
            </div>
            <div>
                {renderSomething(true)}
            </div>
        </div>
    );
};

export default Events;