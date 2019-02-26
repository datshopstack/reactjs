import React,, { Component } from 'react';
import ReactDOM from 'react-dom';

var VacancySign = React.createClass({
  render: function() {
    var text;
    if (this.props.hasvacancy) {
      text = 'Vacancy';
    } else {
      text = 'No Vacancy';
    }
    return <div>{text}</div>;
  }
});


ReactDOM.render(
  <VacancySign hasvacancy={false} />,
  document.getElementById('container')
);

