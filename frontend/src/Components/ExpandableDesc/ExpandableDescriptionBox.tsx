import { useState, useEffect } from "react";
import Button from "@mui/material/Button";

function ExpandableDescriptionBox(description: String) {
  // REMOVE WHEN DESCRIPTION EXIST
  description =
    "magna aliqua. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere.magna aliqua. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere.magna aliqua. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere.magna aliqua. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. magna aliqua. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. In eu mi bibendum neque. Nisi vitae suscipit tellus mauris a. Ac tortor vitae purus faucibus ornare. ";
  const descLength = description.length;
  const [btnName, setBtnName] = useState<String>("Visa mer");
  const [isExpand, setIsExpand] = useState(false);
  const [desc, setDesc] = useState<String>();
  const count = 300;

  console.log("desc length", description.length);

  useEffect(() => {
    if (description && descLength > count) {
      setDesc(description.substring(0, count) + "...");
    } else {
      setDesc(description);
    }
  }, []);

  const handleTextBox = () => {
    if (!isExpand) {
      setBtnName("Visa mer");
      setDesc(description.substring(0, count) + "...");
    } else {
      setBtnName("Visa mindre");
      setDesc(description);
    }
    setIsExpand(!isExpand);
  };

  return (
    <div>
      {desc}
      {descLength > count && (
        <Button variant="text" onClick={handleTextBox}>
          {btnName}
        </Button>
      )}
    </div>
  );
}

export default ExpandableDescriptionBox;
