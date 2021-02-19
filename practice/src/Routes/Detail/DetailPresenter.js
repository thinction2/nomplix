import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

const HomePresenter = ({ result, error, loading }) => null;

HomePresenter.propTypes = {
  result: Proptypes.object,
  loading: Proptypes.bool.isRequired,
  error: Proptypes.string,
};

export default HomePresenter;
