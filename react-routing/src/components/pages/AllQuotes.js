import QuoteList from '../quotes/QuoteList';
const DUMMY = [
    {id: 'q1', author: 'A', text: 'A1'},
    {id: 'q2', author: 'B', text: 'B1'},
    {id: 'q3', author: 'B', text: 'C1'}
]
const AllQuotes = () => {
    return(
        <section>
            <QuoteList quotes={DUMMY}/>
        </section>
    )
}

export default AllQuotes;