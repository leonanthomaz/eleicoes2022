import React, { Fragment, useState } from 'react'
import * as C from './CardStyles'

import imgLula from '../../assets/img/lula.png'
import imgBolsonaro from '../../assets/img/bolsonaro.png'

import { CandidatoModal } from '../CandidatoModal'
import { GeraisModal } from '../GeraisModal'

import BarraDeProgresso from '../../share/utils/BarraDeProgresso'

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
        pcomparecimento,
        abstencoes,
        pabstencoes,
        secoes,
        tsecoes,
        psecoes,
        anulados,
        anuladosSJ,
        nulos,
        pnulo,
        branco,
        pbranco,
        totais) => {
        setInfoGerais({
            validos,
            pcomparecimento,
            abstencoes,
            pabstencoes,
            secoes,
            tsecoes,
            psecoes,
            anulados,
            anuladosSJ,
            nulos,
            pnulo,
            branco,
            pbranco,
            totais})
        handleShowGerais()
    }

    const handleInfoCandidato = (id, nome, partido, numero, situacao, porcentagem, totalvotos) => {
        setCandidato({ id, nome, partido, numero, situacao, porcentagem, totalvotos })
        handleShowCandidato()
    }

    return (
    <C.Principal >

        {data.map((st, i)=>{
            return(
            <Fragment key={i}>
                <C.Titulo>
                    {/* <h3>Acompanhe a apuração do 1º Turno</h3> */}
                    <div aria-label={`Seções apuradas até o momento: ${st.pst}%`} className='titulo-header'>
                        <b>{st.pst}%</b> das seções apuradas
                    </div>
                    <C.TituloUrnasApuradasContainer>
                        <C.TituloUrnasApuradas aria-label="Barra de progresso das urnas apuradas, iniciando em 0% e finalizando em 100%"><BarraDeProgresso bgcolor={'linear-gradient(to right,#3737c2, #ff0000)'} progress={parseInt(st.pst)} height={20} /></C.TituloUrnasApuradas>
                        {/* <b aria-label="Ícone representando o começo da barra de porcentagem, começando em 0%" className='bleft'>0%</b><C.TituloUrnasApuradas porcentagem={st.pst} aria-label={`Porcentagem real e atual da apuração: ${st.pst}%`}/><b aria-label="Ícone representando o final da barra de porcentagem, finalizando em 100%" className='bright'>100%</b> */}
                    </C.TituloUrnasApuradasContainer>
                    <div className='titulo-footer'>
                        <span aria-label={`Última atualização: dia ${st.dg} às ${st.hg} horas, horário de Brasília`}>Última atualização: {st.dg} - {st.hg} (Horário local) - Fonte: TSE</span>
                    </div>
                    <C.TopBar>
                        <span><a 
                            aria-label="Botão para atualizar página" className='atualizar' onClick={()=>{window.location.reload()}}><C.IconAtualizar/> Atualizar</a></span>
                        <span><a 
                        aria-label="Botão mostrar estatísticas gerais da apuração." className='gerais' onClick={()=>{handleInfoGerais(
                        st.vnom,
                        st.pc,
                        st.a,
                        st.pa,
                        st.s,
                        st.st,
                        st.pst,
                        st.van,
                        st.vansj,
                        st.tvn,
                        st.ptvn,
                        st.vb,
                        st.pvb,
                        st.tv)}}><C.IconVotos/>Informações Gerais</a></span>
                    </C.TopBar>
                </C.Titulo>

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
                            c.seq, c.nm, c.cc, c.n, c.st, c.pvap, c.vap)}>
                            <div className='candidato-header'>
                                <div className='candidato-left'>
                                    <div className='candidato-img'>
                                        <img src={
                                            c.nm === "LULA" ? imgLula 
                                            : c.nm === "JAIR BOLSONARO" ? imgBolsonaro 
                                            : ''} alt={`Imagem do candidato ${c.nm}.`} loading="lazy" />
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
                                            :  ''
                                        }
                                    </h2>
                                    <h5>Vice: {c.nv}</h5>
                                    {c.e === "s" ? 
                                        <C.EleitoInfo eleito={c.e}>
                                            <span>Eleito</span>
                                        </C.EleitoInfo>
                                    : ''}
                                    {/* {c.e === "s" ? 
                                        <C.EleitoInfo eleito={c.e}>
                                            <span>Eleito</span>
                                        </C.EleitoInfo>
                                    : 
                                    c.e === "n" ?
                                        <C.EleitoInfo eleito={c.e}>
                                            <span>Não Eleito</span>
                                        </C.EleitoInfo> : ''
                                    } */}
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
