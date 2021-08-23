import { Link, Route, useParams } from "react-router-dom";
import Comments from '../comments/Comments';
import HighLightedQuote from '../quotes/HighlightedQuote'

const DUMMY = [
    {id: 'q1', author: 'A', text: 'A1'},
    {id: 'q2', author: 'B', text: 'B1'},
    {id: 'q3', author: 'B', text: 'C1'}
]
const QuoteDetails = () => {
    let params = useParams();
    const quote = DUMMY.find(quote => quote.id === params.quoteId);

    if(!quote) {
        return <p>No Quote found</p>
    }
    return(
        <section>
            <HighLightedQuote text={quote.text} author={quote.author} />
            <Route path={`/quotes/${params.quoteId}`} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>load cmnts</Link>
                </div>
            </Route>
            {/* dynamic path nesting */}
            <Route path={`/quotes/${params.quoteId}/comments`} component={Comments}></Route> 
        </section>
    )
}

export default QuoteDetails;