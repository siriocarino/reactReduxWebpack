import React, {Component} from "react";
import { connect } from "react-redux";
import { removeArticle } from "../actions/index";

const mapStateToProps = state => ({
  articles : state.article.articles,
});

const mapDispatchToProps = dispatch => ({
  removeArticle : article => dispatch(removeArticle(article))
});

class ListComponent extends Component {
  
  constructor(){
    super();
  }


  deleteItem(e,article){
    console.log(article)
    e.preventDefault();
    this.props.removeArticle(article);
  }
  
  render() {
      const {articles} = this.props;
      const listItems = articles.map((article) =>
      <li className="list-item" key={article.id}> {article.title} : {article.id} <button onClick={(e) => this.deleteItem(e, article)} >Remove Article</button> </li>
      );


      return (
          <div>
               <ul>{ listItems } </ul>
          </div>
      );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListComponent);


