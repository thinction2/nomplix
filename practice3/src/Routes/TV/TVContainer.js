import React from "react";
import { tvApi } from "../../Api";
import TVPresenter from "./TVPresenter";

export default class extends React.Component {
  state = {
    popular: null,
    airingToday: null,
    topRated: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: popular },
      } = await tvApi.popular();
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();
      const {
        data: { results: topRated },
      } = await tvApi.topRated();

      this.setState({
        popular,
        airingToday,
        topRated,
      });
    } catch {
      this.setState({
        error: "Can't find TV Show information.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { popular, airingToday, topRated, loading, error } = this.state;

    return (
      <TVPresenter
        popular={popular}
        airingToday={airingToday}
        topRated={topRated}
        loading={loading}
        error={error}
      />
    );
  }
}
