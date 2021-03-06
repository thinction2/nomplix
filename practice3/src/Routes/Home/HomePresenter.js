import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";

const Conatiner = styled.div`
  margin: 0 20px;
`;

const HomePresenter = ({ nowPlaying, upComing, popular, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Conatiner>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing Movies">
          {nowPlaying.map((movie) => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
      {upComing && upComing.length > 0 && (
        <Section title="Upcoming Movies">
          {upComing.map((movie) => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Movies">
          {popular.map((movie) => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
    </Conatiner>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upComing: PropTypes.array,
  popular: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
