import Content from './Article/Content';
import Navbar from './Article/Navbar';
import './Article.css'

function Article() {
  return (
    <div className='article-container'>
        <div className="article-navbar">
            <Navbar />
        </div>
        <div className="article-content">
            <Content />
        </div>
    </div>
  );
}

export default Article;
