import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { style } from "@mui/system";

const Main = styled.div`
  width: 100%;
`;

const SectionOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 325px;
  width: 80%;
  margin: auto;
`;

const Texts = styled.p`
  color: var(--primary-color);

  font-size: ${({ fontSize }) => fontSize};
  margin-top: 20px;
  text-align: center;
`;

const PrimaryButton = styled(Button)`
  background-color: var(--primary-color);

  margin-top: 20px;
  height: 50px;
  padding: 9px;
  color: white;
  margin-top: 10px;
  &:hover {
    background-color: var(--primary-color);
    box-shadow: 1px 1px 20px gray;
  }
`;

const Sectiontwo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 95%;
  background-color: white;
  padding: 30px;
  box-shadow: 1px 1px 10px gray;
  border-radius: 6px;
  margin: auto;
`;

const GridContainers = styled.div`
  background-color: white;
  margin: 0 10px 0 10px;
  padding: 30px;
  border-radius: 6px;
`;

const GridBox = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 20px;
`;

const Sectionthree = styled.div`
  height: 325px;
`;

const SectionThreeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 95%;
  margin: auto;

  padding-left: 20px;
`;

const List = styled.li`
  list-style: none;
  margin-top: 2px;
`;

////Style variables
const primarycontent = "var(--primary-content)";
const lightGray = "var(--gray-light)";
const deepGray = "var(--gray-deep)";
const centerText = { display: "flex", alignItems: "center" };

const pricing = () => {
  return (
    <Main>
      <SectionOne>
        <Texts fontSize={"46px"} style={{ fontWeight: "700px" }}>
          Feature-rich plans with upfront pricing
        </Texts>

        <Texts fontSize={"20px"} style={{ color: "black" }}>
          Over 27,000 companies have hired 1.5 million candidates with Workable.
          Manage your entire process, from sourcing to employee onboarding and
          management with the world’s most complete recruiting software.
        </Texts>

        <PrimaryButton variant="contained">
          Contained <NavigateNextIcon />{" "}
        </PrimaryButton>
      </SectionOne>

      <Sectiontwo>
        {/* /////Grid One */}
        <GridContainers>
          <GridBox>
            <Texts
              fontSize={"46px"}
              style={{ color: primarycontent, fontWeight: "700" }}
            >
              Standard{" "}
            </Texts>

            <Texts
              style={{
                background: lightGray,
                color: deepGray,
                height: "1rem",
                borderRadius: "30px",
                padding: "3px",
                fontSize: "11px",
                fontWeight: "800",
                ...centerText,
              }}
            >
              MONTHLY ONLY
            </Texts>
          </GridBox>
          <Texts
            fontSize={"13px"}
            style={{
              width: "100%",
              color: "black",
              backgroundColor: lightGray,
              height: "40px",
              padding: "4px",
              fontWeight: "700",
              borderRadius: "6px",
              ...centerText,
            }}
          >
            UP TO 50 EMPLOYEES
          </Texts>

          <div style={{ display: "flex", marginTop: "20px" }}>
            <Texts style={{ fontSize: "12px", fontWeight: "400" }}>
              $ <span style={{ fontSize: "48px", fontWeight: "900" }}>149</span>{" "}
              USD
            </Texts>
          </div>

          <div
            style={{
              backgroundColor: lightGray,
              height: "250px",
              flexDirection: "column",
              padding: "20px",
            }}
          >
            <p
              style={{
                textAlign: "start",
                marginBottom: "15px",
                fontWeight: "600px",
              }}
            >
              Includes :
            </p>
            <ul>
              <li style={{ marginBottom: "5px" }}>
                Features available in all plans
              </li>
              <li style={{ marginBottom: "5px" }}>Up to 2 active jobs</li>
              <li style={{ marginBottom: "5px" }}>
                200 AI sourcing profile views per month
              </li>
            </ul>
          </div>

          <GridBox
            style={{
              height: "210px",
              border: "1px solid gray ",
              borderRadius: "6px",
            }}
          ></GridBox>
        </GridContainers>

        {/* /////Grid Two */}
        <GridContainers>
          <GridBox>
            <Texts
              fontSize={"46px"}
              style={{ color: primarycontent, fontWeight: "700" }}
            >
              Standard{" "}
            </Texts>

            <Texts
              style={{
                background: lightGray,
                color: deepGray,
                height: "1rem",
                borderRadius: "30px",
                padding: "3px",
                fontSize: "11px",
                fontWeight: "800",
                ...centerText,
              }}
            >
              MONTHLY ONLY
            </Texts>
          </GridBox>
          <Texts
            fontSize={"13px"}
            style={{
              width: "100%",
              color: "black",
              backgroundColor: lightGray,
              height: "40px",
              padding: "4px",
              fontWeight: "700",
              borderRadius: "6px",
              ...centerText,
            }}
          >
            UP TO 50 EMPLOYEES
          </Texts>

          <div style={{ display: "flex", marginTop: "20px" }}>
            <Texts style={{ fontSize: "12px", fontWeight: "400" }}>
              $ <span style={{ fontSize: "48px", fontWeight: "900" }}>149</span>{" "}
              USD
            </Texts>
          </div>

          <div
            style={{
              backgroundColor: lightGray,
              height: "250px",
              flexDirection: "column",
              padding: "20px",
            }}
          >
            <p
              style={{
                textAlign: "start",
                marginBottom: "15px",
                fontWeight: "600px",
              }}
            >
              Includes :
            </p>
            <ul>
              <li style={{ marginBottom: "5px" }}>
                Features available in all plans
              </li>
              <li style={{ marginBottom: "5px" }}>Up to 2 active jobs</li>
              <li style={{ marginBottom: "5px" }}>
                200 AI sourcing profile views per month
              </li>
            </ul>
          </div>

          <GridBox
            style={{
              height: "210px",
              border: "1px solid gray ",
              borderRadius: "6px",
            }}
          ></GridBox>
        </GridContainers>

        {/* /////Grid Three */}
        <GridContainers>
          <GridBox>
            <Texts
              fontSize={"46px"}
              style={{ color: primarycontent, fontWeight: "700" }}
            >
              Standard{" "}
            </Texts>

            <Texts
              style={{
                background: lightGray,
                color: deepGray,
                height: "1rem",
                borderRadius: "30px",
                padding: "3px",
                fontSize: "11px",
                fontWeight: "800",
                ...centerText,
              }}
            >
              MONTHLY ONLY
            </Texts>
          </GridBox>
          <Texts
            fontSize={"13px"}
            style={{
              width: "100%",
              color: "black",
              backgroundColor: lightGray,
              height: "40px",
              padding: "4px",
              fontWeight: "700",
              borderRadius: "6px",
              ...centerText,
            }}
          >
            UP TO 50 EMPLOYEES
          </Texts>

          <div style={{ display: "flex", marginTop: "20px" }}>
            <Texts style={{ fontSize: "12px", fontWeight: "400" }}>
              $ <span style={{ fontSize: "48px", fontWeight: "900" }}>149</span>{" "}
              USD
            </Texts>
          </div>

          <div
            style={{
              backgroundColor: lightGray,
              height: "250px",
              flexDirection: "column",
              padding: "20px",
            }}
          >
            <p
              style={{
                textAlign: "start",
                marginBottom: "15px",
                fontWeight: "600px",
              }}
            >
              Includes :
            </p>
            <ul>
              <li style={{ marginBottom: "5px" }}>
                Features available in all plans
              </li>
              <li style={{ marginBottom: "5px" }}>Up to 2 active jobs</li>
              <li style={{ marginBottom: "5px" }}>
                200 AI sourcing profile views per month
              </li>
            </ul>
          </div>

          <GridBox
            style={{
              height: "210px",
              border: "1px solid gray ",
              borderRadius: "6px",
            }}
          ></GridBox>
        </GridContainers>
        <div
          style={{
            gridColumn: "1/4",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Texts>
            The 15-day trial includes the complete feature set of the Standard
            plan. No credit card required.
          </Texts>
          <PrimaryButton style={{ width: "50%" }}>
            Get a live demo
          </PrimaryButton>
        </div>
      </Sectiontwo>

      <Texts
        fontSize={"48px"}
        style={{
          fontWeight: "700",
          color: deepGray,
          margin: "130px 0 130px 0",
        }}
      >
        Features available in all plans
      </Texts>

      <Sectionthree>
        <SectionThreeGrid style={{ width: "95%" }}>
          {/* ////grid one */}
          <div>
            <p style={{ fontWeight: 700, fontSize: "18px", margin: "15px" }}>
              SectionThreeGrid
            </p>

            <ul>
              <List>Job board distribution (200+)</List>
              <List>AI candidate sourcing</List>
              <List>Careers page builder</List>
              <List>Native language options</List>
              <List>Referrals portal with reporting</List>
              <List>Custom application forms</List>
              <List>LinkedIn Recruiter System Connect</List>
              <List>Social media campaigns</List>
              <List>Job board distribution (200+)</List>
              <List>AI candidate sourcing</List>

              <List>Social media campaigns</List>
            </ul>
          </div>

          {/* ////grid two */}
          <div>
            <p style={{ fontWeight: 700, fontSize: "18px", margin: "15px" }}>
              SectionThreeGrid
            </p>

            <ul>
              <List>Job board distribution (200+)</List>
              <List>AI candidate sourcing</List>
              <List>Careers page builder</List>
              <List>Native language options</List>
              <List>Referrals portal with reporting</List>
              <List>Custom application forms</List>
              <List>LinkedIn Recruiter System Connect</List>
              <List>Social media campaigns</List>

              <List>Referrals portal with reporting</List>
              <List>Custom application forms</List>
              <List>LinkedIn Recruiter System Connect</List>
              <List>Social media campaigns</List>
            </ul>
          </div>

          {/* ////grid three */}
          <div>
            <p style={{ fontWeight: 700, fontSize: "18px", margin: "15px" }}>
              SectionThreeGrid
            </p>

            <ul>
              <List>Job board distribution (200+)</List>
              <List>AI candidate sourcing</List>
              <List>Careers page builder</List>
              <List>Native language options</List>
              <List>Referrals portal with reporting</List>
              <List>Custom application forms</List>
              <List>LinkedIn Recruiter System Connect</List>
              <List>Social media campaigns</List>
            </ul>
          </div>

          {/* ////grid four */}
          <div>
            <p style={{ fontWeight: 700, fontSize: "18px", margin: "15px" }}>
              SectionThreeGrid
            </p>

            <ul>
              <List>Job board distribution (200+)</List>
              <List>AI candidate sourcing</List>
              <List>Careers page builder</List>
              <List>Native language options</List>
              <List>Referrals portal with reporting</List>
              <List>Custom application forms</List>
              <List>LinkedIn Recruiter System Connect</List>
              <List>Social media campaigns</List>
              <List>LinkedIn Recruiter System Connect</List>
              <List>Social media campaigns</List>
            </ul>
          </div>
        </SectionThreeGrid>
      </Sectionthree>
    </Main>
  );
};

export default pricing;
