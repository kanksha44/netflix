import React, { useState } from "react";
import { FormControl, Select, MenuItem, ListItemIcon } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <FormControl>
      <Select
        sx={{
          height: "2.2rem",
          padding: "0px",
          margin: "0px",
          width: "11rem",
        }}
        value={selectedLanguage}
        onChange={handleChange}
        displayEmpty
        renderValue={(value) => (
          <div style={{ display: "flex", alignItems: "center" }}>
            <ListItemIcon>
              <LanguageIcon />
            </ListItemIcon>
            {value || "English"}
          </div>
        )}
      >
        <MenuItem value="English">English</MenuItem>
        <MenuItem value="Hindi">Hindi</MenuItem>
        {/* Add more languages as needed */}
      </Select>
    </FormControl>
  );
};

export default LanguageDropdown;
