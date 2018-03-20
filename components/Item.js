import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Highlight from 'react-highlight';
import showdown from 'showdown';
import style from '../styles/feed'

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
    };
  }
  componentWillMount() {
    const { item: { id, type } } = this.props;
    const converter = new showdown.Converter();

    fetch(`/static/text/${type}s/${id}.md`)
      .then(response => response.text())
      .then(text => this.setState({ content: converter.makeHtml(text) }));
  }
  render() {
    const { item: { id, type, title, date, images } } = this.props;
    const { content } = this.state;

    return (
      <div className="root">
        <style jsx>{style}</style>
        <div>
          {content && (
            <div>
              <h1>{title}</h1>
              <Highlight innerHTML className="content">
                {content}
              </Highlight>
              {type && (
                <footer>
                  {type === 'project' ? 'Added ' : 'Published '}
                  on {date} by David Sinclair
                </footer>
              )}
            </div>
          )}
          {type === 'project' && (
            <div>
              {Array(images)
                .fill(0)
                .map((a, i) => (
                  <img
                    key={`${id}-${i + 1}`}
                    alt={title}
                    src={`/static/images/projects/${id}-${i + 1}.jpg`}
                    style={{ width: 50, height: 50 }}
                  />
                ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Item;
