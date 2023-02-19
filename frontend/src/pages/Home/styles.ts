import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex
    flex-direction: column
    justify-content: center
    margin-top: 4rem
`

export const Panel = styled.div`
  border: 2px red;
  height: 1200px;
`

export const HomeText = styled.div`
h3 {
    color: var(--text-secondary);
    @media (max-width: 350px) {
      font-size: 0.9rem;
    }
    @media (min-width: 768px) {
      font-size: 1.3rem;
    }
  }
  h1 {
    font-size: 2rem;
    font-weight: 500;
    color: var(--first-color);
    background: linear-gradient(to left, #1f1670, #9307f1, #7109e7, #00d9ff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: 350px) {
      font-size: 1.8rem;
    }
    @media (min-width: 768px) {
      font-size: 3.5rem;
    }
  }
  h2 {
    @media (max-width: 350px) {
      font-size: 1.2rem;
    }
    @media (min-width: 768px) {
      font-size: 2rem;
    }
    color: var(--second-color);
    font-weight: 600;
  }
 `

 export const ImgHome = styled.div`
  img {
    display: none;
    @media (min-width: 994px) {
      display: block;
      position: relative;
      width: 32rem;
      -webkit-animation: icon-move-people 4s ease 2s infinite alternate;
      animation: icon-move-people 5s ease 2s infinite alternate;
      @keyframes icon-move-people {
        0% {
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
        100% {
          -webkit-transform: translate3d(30px, 60px, 0);
          transform: translate3d(-30px, -50px, 0);
        }
      }
    }
  }
  `

 