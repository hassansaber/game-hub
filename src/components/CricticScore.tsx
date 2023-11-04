import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CricticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yello" : "";

  return (
    <>
      <Badge
        fontSize="14px"
        padding={2}
        borderRadius="4px"
        colorScheme={color}
      >
        {score}
      </Badge>
    </>
  );
};

export default CricticScore;
