import { CardContainer, CancelContainer, GridContainer, HeroImg, OrderStyle, Description, AnnualPlan, MusicImage, ChangeLinkStyle, AnnualPlanStyle, PriceStyle, H4Tag, H5Tag, Button } from "./Layout/GridContainer"


function App() {
  return (
    <>
      <GridContainer>
        <CardContainer className="App">
          <HeroImg />
          <center>
            <OrderStyle>
              Order Summary
            </OrderStyle>
          </center>
          <Description>
            You can now listen to millions of songs, audiobooks, and podcasts on any
            device anywhere you like!
          </Description>

          <AnnualPlan>
            <MusicImage />
            <AnnualPlanStyle>
              <H4Tag>Annual Plan</H4Tag>
              <H5Tag> $59.99/year</H5Tag>
            </AnnualPlanStyle>
            <ChangeLinkStyle>
              Change
            </ChangeLinkStyle>
          </AnnualPlan>
          <Button>
            Proceed to Payment
          </Button>
          <CancelContainer>
            <center>
              Cancel Order
            </center>
          </CancelContainer>
        </CardContainer>
      </GridContainer>
    </>
  );
}

export default App;
