import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Highlight from 'react-highlight';
import showdown from 'showdown';
import style from '../styles/item'

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
        {content && (
          <div className={type || ''}>
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
            {type === 'project' && (
              <div>
                {Array(images)
                  .fill(0)
                  .map((a, i) => (
                    <img
                      className="project-image"
                      key={`${id}-${i + 1}`}
                      alt={title}
                      src={`/static/images/projects/${id}-${i + 1}.jpg`}
                    />
                  ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Item;
