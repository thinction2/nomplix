import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

const HomePresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  handleSubmit,
  error,
}) => null;

HomePresenter.propTypes = {
  movieResults: Proptypes.array,
  tvResults: Proptypes.array,
  loading: Proptypes.bool.isRequired,
  searchTerm: Proptypes.string,
  error: Proptypes.string,
  handleSubmit: Proptypes.func.isRequired,
};

export default HomePresenter;
