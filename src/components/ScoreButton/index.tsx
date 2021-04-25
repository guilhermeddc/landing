import React from "react";
import { Button } from "@material-ui/core";

interface IProps {
  value: number;
  setValue(value: number): void;
  score: number;
  color: string;
}

const ScoreButton: React.FC<IProps> = ({ value, setValue, score, color }) => {
  return (
    <Button
      variant={value === score ? "outlined" : "contained"}
      onClick={() => setValue(score)}
      style={{
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        backgroundColor: color,
        width: 50,
        height: 50,
        borderWidth: 2.5,
        borderRadius: 8,
      }}
    >
      {score}
    </Button>
  );
};

export default ScoreButton;
