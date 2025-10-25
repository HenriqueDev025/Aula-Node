const TemplateExpression = () =>{
    const name = "Matheus";
    
    const data = {
        age: 31,
        job: " Prootamador",
    };
    return (
        <div>
            <div>
                <p>A soma é (2 + 2)</p>
                <h3>Bem-vindo {name}</h3>
                <p>sua idade é {data.age} e voce Trabalha como {data.job}</p>
            </div>
        </div>
    );
};
export default TemplateExpression