import alt from '../alt';

class ChartActions {
  constructor() {
    this.generateActions(
      'chartMouseOver',
      'chartMouseOut'
    );
  }
}

module.exports = alt.createActions(ChartActions);
