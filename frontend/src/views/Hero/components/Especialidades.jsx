import "../css/especialidades.css";

const Especialidades = () => {

    const dataEspecialidades = [
        {
            title: 'Medicina General',
            description: 'Atención primaria y seguimiento de pacientes para prevenir, diagnosticar y tratar enfermedades comunes.'
        },
        {
            title: 'Neurología',
            description: 'Diagnóstico y tratamiento de trastornos del sistema nervioso central y periférico.'
        },
        {
            title: 'Control',
            description: 'Supervisión y seguimiento de tratamientos médicos para asegurar la eficacia y el bienestar del paciente.'
        },
        {
            title: 'Pediatría',
            description: 'Atención médica especializada para niños y adolescentes, desde el nacimiento hasta la adolescencia.'
        }
    ];

    return (
        <>
            <div id="especialidades" className="containerEspecialidades">
                <h1>Especialidades</h1>
                <section className="listCardespecialidades">
                    {dataEspecialidades.map((especialidad, index) => (
                        <div key={index} className="cardEspecialidades">
                            <h2>{especialidad.title}</h2>
                            <p>{especialidad.description}</p>
                        </div>
                    ))}
                </section>
            </div>
        </>
    );
};

export default Especialidades;

