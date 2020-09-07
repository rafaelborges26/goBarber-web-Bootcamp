import styled, { css } from 'styled-components'


const toastTypeVariations = { //tipos de toast 
    info: css`
        background: #ebf8ff;
        color: #3172b7;    
    `,
    success: css`
        background: #e6fffa;
        color: #2e656a;    
    `,
    error: css`
        background: #fddede;
        color: #c53030;
    `

}

interface ToastProps {
    type?: 'info' | 'success' | 'error'
    hasDescription: boolean
}


export const Container = styled.div<ToastProps>`
    width: 360px;

    position: relative; 
    padding: 16px 30px 16px 16px;
    border-radius: 10px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

    display: flex;

    & + div { 
        margin-top: 8px;
    }

    background: #ebf8ff;
    color: #3172b7;


    ${props => toastTypeVariations[props.type || 'info'] }

    > svg {
        margin: 4px 12px 0 0;
    }
        div {
            flex: 1; /*para pegar todo tamanho disponivel possivel*/
        }

        p {
            margin-top: 4px;
            font-size: 14px;
            opacity: 0.8; /*diminui um pouco a opacidade da cor*/
            line-height: 20px
        }

        button {
            position: absolute;
            right: 16px;
            top: 19px;
            opacity: 0.6;
            border: 0;
            background: transparent; /* tirar o modelo padrao do botao */
            color: inherit /*ele pega a cor que esta sendo utilizado no container */
        }
    ${(props) => !props.hasDescription && css`
        align-items: center;

        svg {
            margin-top: 0;
        }
    ` }
`