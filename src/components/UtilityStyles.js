import styled from 'styled-components';
import geobg from '../images/geo-seamless-bg.jpg';
export const Wrapper = styled.section`
  padding: 1em;
  background-image: url(${geobg});
  border: 2px solid black;
  border-radius: 5px;
  width:100%
  height:100%;
  min-height:100vh;
`;

export const Overlay = styled.div`
  padding: 2.5em;
  background-color: lightgrey;
  opacity: 0.98;
  border-radius: 5px;
  margin: 0 auto;
  border: 2px solid black;
  max-width: calc(1000px - 2.1em);
`;

export const TextDiv = styled.div`
  padding: 1.4em;
  opacity: 1 important;
  color: black;
  border: 2px solid black;
  border-radius: 5px;
  background-color: white;
  width: calc(100% - 3em);
  max-width: 1000px;
  margin: 0 auto;
`;

export const TextInput = styled.input`
  border: 2px solid black;
  padding: 1em 0.25em;
  margin: 5px 10px;
  width: 80%;
`;
