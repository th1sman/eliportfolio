import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`

* {
   margin: 0
   padding: 0
   box-sixing: border-box
}

html {
   scroll-behavior: smooth
}

html.normal-scroll {
   scroll-behavior: auto
}

:root {
 background-color: #181a1b
}

body{

}

a {
   color: inherit;
   text-decoration: none;
}

`