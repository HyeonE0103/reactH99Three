import { styled } from "styled-components";

function Button({ size, color, onClick, icon, children }) {
  const Button = styled.button`
    cursor: pointer;
    border-radius: 8px;
    &:active {
      filter: brightness(95%);
    }
    ${() => colorHandler(color)}
    ${() => sizeHandler(size)}
  `;

  const colorHandler = (color) => {
    switch (color) {
      case "primary":
        return `border: 3px solid rgb(85, 239, 196); background-color:rgb(85, 239, 196); color: black;`;
      case "negative":
        return `border: 3px solid rgb(250, 177, 160); background-color:rgb(250, 177, 160); color: rgb(214, 48, 49);`;
      default:
        return;
    }
  };

  const sizeHandler = (size) => {
    switch (size) {
      case "large":
        return `height: 50px; width: 200px; background-color: white; font-weight: 600;`;
      case "medium":
        return `height: 45px; width: 130px; border:none`;
      case "small":
        return `height: 40px; width: 100px; border:none`;
      default:
        return;
    }
  };

  return (
    <Button onClick={onClick}>
      {children} {icon}
    </Button>
  );
}

export default Button;
