import React, {Component} from "react";
import { connect } from "react-redux";

const mapState = state => ({
  articles : state.article.articles,
});


class ListComponent extends Component {
  render() {
      const {articles} = this.props;
      
      const listItems = articles.map((article) =>
      <li className="list-item" key={article.id}> {article.title} : {article.id}  </li>
      );

      return (
          <div>
               <ul>{ listItems } </ul>
          </div>
      );
  }
}

export default connect(mapState)(ListComponent);


