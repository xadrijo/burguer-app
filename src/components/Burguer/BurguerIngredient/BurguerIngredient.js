import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BurguerIngredient.css';

class BurguerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case ('bread-bottom'):
        ingredient = <div className={classes.BreadBottom}></div>;
        break;
      case ('bread-top'):
        ingredient = (
          <div className={classes.BreadBottom}>
            <div className={classes.Seed1}></div>
            <div className={classes.Seed2}></div>
          </div>
        );
        break;
      case ('meat'):
        ingredient = <div className={classes.Meat}></div>;
        break;
      case ('cheese'):
        ingredient = <div className={classes.Cheese}></div>;
        break;
      case ('bacon'):
        ingredient = <div className={classes.Bacon}></div>;
        break;
      case ('salad'):
        ingredient = <div className={classes.Salad}></div>;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

BurguerIngredient.PropTypes = {
  type: PropTypes.string.isRequired
}

export default BurguerIngredient;