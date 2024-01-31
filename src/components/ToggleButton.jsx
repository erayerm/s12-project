import "./ToggleButton.css"
import styled from "styled-components"

const ContainerLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;

`;
export default function ToggleButton() {
    return (
      <ContainerLabel>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider" />
        </label>
        DARK MODE
      </ContainerLabel>
    );

}