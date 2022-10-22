import React, { Fragment, useState } from 'react'
import * as C from './CardStyles'
import imgLula from '../../assets/img/lula.png'
import imgBolsonaro from '../../assets/img/bolsonaro.png'
import { BiRefresh } from "react-icons/bi";
import { CandidatoModal } from '../CandidatoModal'
import { GeraisModal } from '../GeraisModal'

import { FaVoteYea } from "react-icons/fa";

export const Card = ({ data }) => {

    const [ candidato, setCandidato ] = useState([]);
    const [ infoGerais, setInfoGerais ] = useState([]);

    const [showCandidato, setShowCandidato] = useState(false);
    const [showGerais, setShowGerais] = useState(false);

    const handleCloseCandidato = () => setShowCandidato(false);
    const handleShowCandidato = () => setShowCandidato(true);

    const handleCloseGerais = () => setShowGerais(false);
    const handleShowGerais = () => setShowGerais(true);

    const handleInfoGerais = (
        validos,
        anulados,
        anuladosSJ,
        nulos,
        branco,
        totais) => {
        setInfoGerais({
            validos,
            anulados,
            anuladosSJ,
            nulos,
            branco,
            totais})
        handleShowGerais()
    }

    const handleInfoCandidato = (id, nome, partido, numero, situacao) => {
        setCandidato({ id, nome, partido, numero, situacao })
        handleShowCandidato()
    }

    return (
    <C.Principal >

        {data.map((st, i)=>{
            return(
            <Fragment>
                <C.Titulo>
                    <h3>Acompanhe a apuração</h3>
                    <div className='titulo-header'>
                        <b>{st.pea}%</b> das urnas apuradas
                    </div>
                    <C.TituloUrnasApuradasContainer>
                        <b className='bleft'>0%</b><C.TituloUrnasApuradas porcentagem={st.pea}/><b className='bright'>100%</b>
                    </C.TituloUrnasApuradasContainer>
                    <div className='titulo-footer'>
                        <span>Última atualização: {st.dt} - {st.ht} (Horário local) - Fonte: TSE</span>
                    </div>
                </C.Titulo>

                <C.TopBar>
                   <span><a onClick={()=>{window.location.reload()}} className='atualizar'><BiRefresh/> Atualizar</a></span>
                   <span><a onClick={()=>{handleInfoGerais(
                    st.vnom,
                    st.van,
                    st.vansj,
                    st.tvn,
                    st.vb,
                    st.tv)}} className='gerais'><FaVoteYea/> Informações Gerais</a></span>
                </C.TopBar>

                <GeraisModal 
                infoGerais={infoGerais} 
                handleCloseGerais={handleCloseGerais}
                showGerais={showGerais}
                setShowGerais={setShowGerais}
                />

                <CandidatoModal 
                candidato={candidato} 
                handleCloseCandidato={handleCloseCandidato}
                showCandidato={showCandidato}
                setShowCandidato={setShowCandidato}
                />
                
                <C.Container>
                    {st.cand.map((c, i)=>{
                        return(
                        <C.Candidato key={i} eleito={c.e === 's'} onClick={()=>handleInfoCandidato(
                            c.seq, c.nm, c.cc, c.n, c.st)}>
                            <div className='candidato-header'>
                                <div className='candidato-left'>
                                    <div className='candidato-img'>
                                        <img src={
                                            c.nm === "LULA" ? imgLula 
                                            : c.nm === "JAIR BOLSONARO" ? imgBolsonaro 
                                            : ''} />
                                    </div>
                                </div>
            
                                <div className='candidato-right'>
                                    <div className='candidato-votos'>
                                        <div className='candidato-porcentagem'>
                                            <h3>{c.pvap}%</h3>
                                        </div>
                                        <div className='candidato-qtd-votos'>
                                            <span>{Number(c.vap).toLocaleString('pt-BR')} votos</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div className='candidato-footer'>
                                <div className='candidato-nome'>
                                    <h2>
                                        {
                                            c.nm === "LULA" ? 'LULA' 
                                            : c.nm === "JAIR BOLSONARO" ? 'BOLSONARO' 
                                            : ''
                                        }
                                    </h2>
                                    <h5>Vice: {c.nv}</h5>
                                    {c.st === "Eleito" && c.e === 's' ? 
                                    <C.EleitoInfo eleito={c.st === "Eleito"}>
                                        <span>2º Turno</span>
                                    </C.EleitoInfo>
                                    : 
                                    <C.EleitoInfo eleito={c.st === "Eleito" && c.e === 's'}>
                                        <span>Não Eleito</span>
                                    </C.EleitoInfo>
                                    }
                                </div>
                            </div>
                        </C.Candidato>
                        )
                    })}
                </C.Container>
            </Fragment>
            )
        })}
    </C.Principal>
    )
}
