import styled from "styled-components";
// import{ PageText as NavText} from "../helpers/PageText"
// import{ PageItemWrapper as NavItemWrapper} from "../helpers/ItemWrapper"

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-wrap: wrap;
`;

export const Banner = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: auto;
  background-color: rgb(236 81 87);
  height: 40px;
`;

export const TextForBanner = styled.div`
  color: #ffffff;
  display: flex;
  padding: 10px;
`;

export const Input = styled.input`
  margin: 20px;
`;

export const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
// export const Logo = styled.img`
//     width: 6em;
//     border:1px solid #131A22;
//     padding: .2em .1em ;
//     cursor:pointer;
//     &:hover{
//         border:1px solid #ffffff;
//         border-radius: .2em;
//     }
// `
// export const Text = styled(NavText)`
//     color:${(props)=>props.color ? props.color :"#ffffff" };
//     font-size: ${(props)=>props.fontSize ? props.fontSize  : ".9em"};

// `

// export const Wrapper = styled(NavItemWrapper)`
//     display: flex;
//     flex-direction: ${(props)=>props.flexDirection ? props.flexDirection  : "column"};
//     align-items:  ${(props)=>props.alignItems ? props.alignItems  : "flex-start"};
//     padding: .1em ;
//     cursor:pointer;
//     border:1px solid #131A22;
//     &:hover{
//         border:1px solid #ffffff;
//         border-radius: .2em;
//     }
//     @media(max-width:850px){
//         display: none;
//     }
// `

// export const Searchbox = styled.input`
//     background-color: #ffffff;
//     padding: .78em;
//     width: 47%;
//     border: none;
//     @media(max-width:850px){
//        border-radius: .2em;
//        margin: .3em 0;
//     }
// `
// export const Select = styled.select`
//     background-color:#ddd;
//     margin-right: -1.2em;
//     padding: .72em .5em;
//     border-radius: .2em 0em 0em .2em;
//     border: none;
//     cursor: pointer;
//     @media(max-width:850px){
//         display: none;
//     }
// `
// export const SearchIconWrapper = styled.span`
//     background-color:#fabd60;
//     color: #131A22;
//     margin-left: -1em;
//     border-radius: 0em .2em .2em 0em ;
//     padding: .32em .5em;
//     cursor: pointer;
//     transition: all 250ms ease;
//     &:hover{
//         background-color:#ff9900;
//     }
//     @media(max-width:850px){
//         display: none;
//     }
// `
// export const Flag = styled.img`
//     width:2em;
// `
