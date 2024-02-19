import React, { useState } from "react";
// import { styled } from "@mui/system";
import styled from "styled-components";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import { Box, Button } from "@mui/material";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { keyframes } from "styled-components";
import { FormControlLabel } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Switch from "@mui/material/Switch";

import { css } from "styled-components";
const ContainerGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Header = styled(Box)`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 4px;
  color: #757575;
  border-bottom: 1px solid gray;
  height: 30px;
  text-align: center;

  padding: 0 @media (max-width: 767px) {
    font-size: 14px;
  }

  @media (min-width: 767px) {
    font-size: 14px;
  }

  @media (min-width: 1200px) {
    font-weight: 600;
    font-size: 16px;
  }
`;

const CustomList = styled(List)`
  width: 99%;
  height: 100%;
  // min-width: 360px;
  background-color: #e9e9e9;
  border-radius: 6px;
  margin: 4px;
  position: relative;
`;

const shakeAnimation = keyframes`
 0% { transform:  rotate(0deg); }
  25% { transform:  rotate(-0.30deg); }
  50% { transform:  rotate(0deg); }
  75% { transform:   rotate(-0.30deg); }
  100% { transform:  rotate(0deg); }
`;

const CustomListItems = styled(ListItem)`
  padding: 0;
  background-color: #ffffff;
  margin: 4px;
  border-radius: 6px;
  width: 97%;

  ${(props) =>
    props.editOn &&
    css`
      box-shadow: 1px 1px 4px gray;
    `}

  ${(props) =>
    props.editOn &&
    css`
      animation: ${shakeAnimation} 0.4s ease-in-out infinite;
    `}
`;

const EditContainer = styled(Box)`
  min-height: 40px;
  display: flex;

  align-items: center;
  position: relative;
`;

const EditHelperWidth = 95;

const EditHelper = styled(Box)`
  height: 100%;
  width: ${EditHelperWidth}%;
  background-color: #a9cae6;
  border: 1px solid #86bbea;
  border-radius: 4px;
  padding: 5px;
  font-size: 12px;
  visibility: ${({ editOn }) => (editOn ? "visible" : "hidden")};
`;

const EditButtonContainer = styled(Box)`
  width: calc(100%-${EditHelperWidth}%);
`;

const InfoContainer = styled(Box)`
  width: 100%;
  position: absolute;
  right: 5px;
`;

const steps = [
  "Select master blaster campaign settings",
  "Create an ad group",
  "Create an ad",
];

const Assessment = () => {
  const Listone = ["one ", "two ", "three", "four"];
  const Listtwo = ["dcsdc ", "asxasx ", "cascsz"];

  const [editOn, setEditOn] = React.useState(false);
  const [allAssessmentModules, setAllAssessmentModules] = useState(Listone);
  const [selectedModules, setSelectedModules] = useState(Listtwo);

  const [customAssessmentList, setCustomAssessmentList] = useState([]);

  ///// Darg&drop Handler functions
  const dargStarted = (e, item) => {
    console.log("drag strated");
    e.dataTransfer.setData("item", item);
  };

  const dragOver = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const dragDroped = (e) => {
    console.log(e.dataTransfer.getData("item"));
    setSelectedModules((prev) => [...prev, e.dataTransfer.getData("item")]);
  };

  /////Handler functions

  const onEditHandler = (eve) => {
    // setEditOn((prev) => !prev);
    setEditOn(eve.target.checked);
  };

  return (
    <>
      <EditContainer>
        {
          <EditHelper editOn={editOn}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              obcaecati eos in cum minus porro repudiandae ullam eveniet id? Sit
              explicabo repellendus aut magnam recusandae esse, delectus
              temporibus enim optio?
            </p>
          </EditHelper>
        }

        <EditButtonContainer>
          <FormControlLabel
            labelPlacement="right"
            control={
              <Switch
                onChange={(eve) => onEditHandler(eve)}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="Edit"
            sx={{ fontSize: "34px", color: "#757575" }}
          />
        </EditButtonContainer>

        {/* <EditButtonContainer>
          <Button
            variant="contained"
            sx={{ margin: "2px", height: "100%" }}
            onClick={onEditHandler}
          >
            {editOn ? "Done" : "Edit"}
          </Button>
        </EditButtonContainer> */}
      </EditContainer>

      <ContainerGrid>
        {/* /////////////////////////GRID 1/////////////////////////*/}
        <div>
          <Header>All Assessment Modules</Header>
          <CustomList>
            <InfoContainer></InfoContainer>
            {allAssessmentModules.map((value, index) => {
              const labelId = `label-${value}`;

              return (
                <React.Fragment key={value}>
                  {/* Dragable  */}
                  <CustomListItems
                    editOn={editOn}
                    draggable
                    onDragStart={(e) => dargStarted(e, value)} //props
                  >
                    <ListItemButton role={undefined} dense>
                      <ListItemIcon>
                        <ViewStreamIcon />
                      </ListItemIcon>
                      <ListItemText
                        id={labelId}
                        primary={`Line item ${value + 1}`}
                      />
                    </ListItemButton>
                  </CustomListItems>
                  {index !== Listone.length - 1}
                </React.Fragment>
              );
            })}
          </CustomList>
        </div>

        {/* /////////////////////////GRID 2/////////////////////////*/}
        <div>
          <Header>Selected Assessment Modules</Header>
          <CustomList
            droppable
            onDragOver={(e) => {
              dragOver(e);
            }}
            onDrop={(e) => dragDroped(e)}
          >
            {selectedModules.map((value, index) => {
              const labelId = `checkbox-list-label-${value}`;

              return (
                <React.Fragment key={value}>
                  {/*  droppable*/}
                  <CustomListItems editOn={editOn}>
                    <ListItemButton role={undefined} dense>
                      <ListItemIcon>
                        <CheckBoxIcon />
                      </ListItemIcon>
                      <ListItemText
                        id={labelId}
                        primary={`Line item ${value + 1}`}
                      />
                    </ListItemButton>
                  </CustomListItems>
                  {index !== Listone.length - 1}
                </React.Fragment>
              );
            })}

            <Fab
              color="primary"
              aria-label="add"
              sx={{
                height: "40px",
                width: "40px",
                marginRight: "8px",
                float: "right",
              }}
            >
              <AddIcon />
            </Fab>
          </CustomList>
        </div>

        {/* /////////////////////////GRID 3/////////////////////////*/}
        <div>
          <Header>Custom Assessment List</Header>

          <CustomList>
            {Listone.map((value, index) => {
              const labelId = `checkbox-list-label-${value}`;

              return (
                <React.Fragment key={value}>
                  <CustomListItems editOn={editOn}>
                    <ListItemButton role={undefined} dense>
                      <ListItemIcon>
                        <ViewStreamIcon />
                      </ListItemIcon>
                      <ListItemText
                        id={labelId}
                        primary={`Line item ${value + 1}`}
                      />
                    </ListItemButton>
                  </CustomListItems>
                  {index !== Listone.length - 1}
                </React.Fragment>
              );
            })}
          </CustomList>
        </div>
      </ContainerGrid>
    </>
  );
};

export default Assessment;
