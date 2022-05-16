

const Sizetable = (props) =>
{
    let num_rows = props.num_rows;
    let num_cols = props.num_cols;
    let tablerows = [];
    for(let i = 0; i < num_rows; i++)
    {
        tablerows.push(<tr>
            {

            }
        </tr>)
    }
    return(
        <table>
        
        </table>
    )
}

export default Sizetable;
