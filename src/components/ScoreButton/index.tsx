import React, { useCallback } from "react";
import { Button, Typography } from "@material-ui/core";

interface IProps {
  value: number;
  setValue(value: number): void;
  score: number;
  color: string;
}

const ScoreButton: React.FC<IProps> = ({ value, setValue, score, color }) => {
  const handleClick = useCallback(() => setValue(score), [score, setValue]);

  return (
    <Button
      variant="contained"
      onClick={handleClick}
      style={{
        color: value === score ? color : "#FFFFFF",
        backgroundColor: value === score ? "#FFFFFF" : color,
        width: 50,
        height: 55,
        borderRadius: 8,
        transition: "all 0.3s",
      }}
    >
      <Typography variant="h4">{score}</Typography>
    </Button>
  );
};

export default ScoreButton;
