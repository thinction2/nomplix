import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";

const Container = styled.div`
  margin: 0 20px;
`;

const TVPresenter = ({ popular, airingToday, topRated, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today Shows">
          {airingToday.map((show) => (
            <sapn key={show.id}>{show.name}</sapn>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Shows">
          {popular.map((show) => (
            <sapn key={show.id}>{show.name}</sapn>
          ))}
        </Section>
      )}
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Shows">
          {topRated.map((show) => (
            <sapn key={show.id}>{show.name}</sapn>
          ))}
        </Section>
      )}
    </Container>
  );

TVPresenter.propTypes = {
  airingToday: PropTypes.array,
  topRated: PropTypes.array,
  popular: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVPresenter;
