import styled from "styled-components";

export const Principal = styled.div`
min-height: calc(100vh - 90px);
background-size: cover;
background-repeat: no-repeat;
background-position: center;
padding-top: 10px;
background-image: url('https://abradep.org/wp-content/uploads/2020/09/abradep-bg.jpg');

`;

export const Titulo = styled.div`
padding: 10px;
text-align: center;
line-height: 20px;
background: #4747477c;
color: white;
padding-top: 20px;

.titulo-footer{
    font-size: 13px;
}
`;


export const TopBar = styled.div`
/* border: 2px solid red; */
display: flex;
justify-content: center;
align-items: center;


.atualizar{
    background: #434392ee;
    display: flex;
    align-items: center;
    margin: 10px;
    padding: 7px;
    color: white;
    border-radius: 10px;  
    text-decoration: none;
    cursor: pointer;
}

`;

export const TituloUrnasApuradasContainer = styled.div`
display: grid;
grid-template-columns: 30px auto 30px;
width: 320px;
margin: auto;
border-radius: 10px;
align-items: center;
font-size: 12px;

.bleft{
    margin-left: 10px;
}

.bright{
    margin-left: 5px;
}
`;

export const TituloUrnasApuradas = styled.div`
background-image: linear-gradient(to right, blue, rgba(255,0,0,1));
height: 10px;
width: ${({ porcentagem }) => (porcentagem  ? `${parseFloat(porcentagem)}%` : '0%')};
border-radius: 20px;
margin: 2px;
transition: all ease-in-out 0.5s;
`;

export const Container = styled.div`

display: grid;
grid-template-columns: auto auto;
justify-content: center;
align-items: center;
gap: 10px;
padding-top: 10px;

`;

export const Candidato = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background: #eeeeee;
border-radius: 10px;


box-shadow: ${({eleito}) => (eleito ? 'rgba(30, 179, 16) 0px 5px 15px' : 'rgba(0, 0, 0, 0.35) 0px 5px 15px')};

width: 320px;
padding: 8px;


@media(max-width: 760px){
    width: 200px;
}

@media(max-width: 450px){
    width: 180px;
}

@media(max-width: 370px){
    width: 170px;
}

.candidato-header{
    padding: 10px;
    display: grid;
    grid-template-columns: auto auto;

    @media(max-width: 760px){
        max-height: 120px;
    }

    .candidato-left{
        display: flex;
        align-items: center;
        justify-content: center;

        .candidato-img{
            /* background: #93f893; */
            background: ${({eleito}) => (eleito ? '#93f893' : '#f89393')};

            border-radius: 50%;
            width: 150px;
            height: 150px;
            margin-right: 24px;

            @media(max-width: 760px){
                background: none;

                img{
                    border: ${({eleito}) => (eleito ? '2px solid #93f893' : '2px solid #f89393')};
                }
            }

            img{
                width: 100%;
                border-radius: 50%;
            }

            @media(max-width: 760px) or (max-height: 500px){
                width: 100px;
                margin: auto;

                img{
                    width: 100%;
                }
            }

            @media(max-width: 450px){
                width: 80px;
                margin: auto;

                img{
                    width: 100%;
                }
            }

        }
    }

    .candidato-right{
        line-height: 9px;

        .candidato-votos{
            text-align: end;
            margin-left: 10px;

            .candidato-porcentagem h3{

                font-size: 30px;
                font-weight: 900;

                @media(max-width: 760px){
                    font-size: 22px;
                }

                @media(max-width: 450px){
                    font-size: 20px;
                }
            }

            .candidato-qtd-votos span{
                text-align: end;
                font-size: 16px;
                color: #838383;
                line-height: 15px;

                @media(max-width: 760px){
                    font-size: 12px;
                }
            }
        }
    }
}

.candidato-footer{

    .candidato-nome{
        /* line-height: 5px; */
        text-align: center;

        h2{
            font-size: 30px;
            font-weight: 900;
        }
        h5{
            font-size: 18px;
        }
       
        @media(max-width: 760px){
            h2{
                font-size: 20px;
            }
            h5{
                font-size: 14px;
            }
        }

        @media(max-width: 450px){
            h2{
                font-size: 20px;
            }
            h5{
                font-size: 12px;
            }
        }

        @media(max-width: 370px){
            h2{
                font-size: 18px;
            }
            h5{
                font-size: 11px;
            }
        }
    }
    .candidato-qtd-votos{
        text-align: end;

        @media(max-width: 760px){
            font-size: 12px;
        }
    }
}

.candidato-info-eleito{
    border: 2px solid red;
}

`;

export const EleitoInfo = styled.div`

display: flex;
text-align: center;
align-items: center;
justify-content: center;
height: 12px;
padding: 10px;
border-radius: 8px;

border: ${({eleito}) => (eleito ? '2px solid green' : '2px solid red')};
background: ${({eleito}) => (eleito ? 'green' : 'red')};


span{
    color: white;
    text-align: center;
}

@media(max-width: 760px){
    font-size: 16px;
}
`;