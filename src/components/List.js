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
      <li className="collection-item" key={article.id}><h5>{article.title}</h5><button className="btn" onClick={(e) => this.deleteItem(e, article)} >Remove Article</button> </li>
      );


      return (
          <div>
               <ul className="collection">{ listItems } </ul>
          </div>
      );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListComponent);


