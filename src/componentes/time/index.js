import Colaborador from '../colaborador'
import './time.css'

const Time = (props, aoDeletar) => {

    const css = {backgroundColor: props.corSecundaria}

    return (
        (props.colaboradores.length > 0) && <section className="time" style={css}>
            <input type='color' className='input-cor'/>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map( colaborador => {
                return <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} aoDeletar={aoDeletar}/>
            })}
            </div>   
        </section>
    )
}

export default Time