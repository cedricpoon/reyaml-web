import React from 'react';
import PropTypes from 'prop-types';
import Tree from 'react-d3-tree';

class D3Tree extends React.Component {
  _rendered() {
    if (this.props.loader)
      this.props.loader.hide();
  }

  componentDidMount() {
    this._rendered();
  }

  componentDidUpdate() {
    this._rendered();
  }
  
  render() {
    const { containerRect, dataObject } = this.props;
    return (
      <Tree
        translate={containerRect && {
          x: containerRect.width / 4,
          y: containerRect.height / 2
        }}
        data={dataObject}
        orientation='vertical'
        initialDepth={1}
        transitionDuration={0}
        zoom={.75}
        pathFunc='straight'
        collapsible={false}
        separation={{siblings: 1, nonSiblings: 1}}
      />
    );
  }
}

D3Tree.propTypes = {
  containerRect: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }),
  dataObject: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired,
  loader: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object
  ])
};

export default D3Tree;