import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import {StyledParagraph, StyledButton} from "./StyledExpandableDescriptionBox"

interface Props {
  auctionDescription: String;
}

function ExpandableDescriptionBox({ auctionDescription }: Props) {
  const [description, setDescription] = useState<String>();
  const [buttonTitle, setButtonTitle] = useState<String>("Visa mer");
  const [isExpanded, setIsExpanded] = useState(false);

  const descriptionLength = auctionDescription.length;
  const count = 300;

  useEffect(() => {
    if (auctionDescription && descriptionLength > count) {
      setDescription(auctionDescription.substring(0, count) + "...");
    } else {
      setDescription(auctionDescription);
    }
  }, []);

  const handleButtonText = () => {
    if (!isExpanded) {
      setButtonTitle("Visa mer");
      setDescription(auctionDescription.substring(0, count) + "...");
    } else {
      setButtonTitle("Visa mindre");
      setDescription(auctionDescription);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <StyledParagraph>{description}</StyledParagraph>
      {descriptionLength > count && (
        <Button variant="text" onClick={handleButtonText}>
          <StyledButton>{buttonTitle}</StyledButton>
        </Button>
      )}
    </>
  );
}

export default ExpandableDescriptionBox;
