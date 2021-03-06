import Titlecard from './Titlecard'

const Sizingchart = () =>{
    return(
        <div className = "sizingcontent">
            <Titlecard title = "SIZING CHART"/>
            <h2 className = "tabletitle"> Tops Size Chart </h2>
            <div className = "tablecontent">
           
            <table className = "sizingtable" id = "topstable"> 
                <thead> 
                    <tr>
                        <th> Size</th>
                        <th> Sleeve (in)</th>
                        <th> Chest (in)</th>
                        <th> Waist (in)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className = "chartgreyback"> 
                        <td> X-Small </td> 
                        <td> test</td> 
                        <td> test</td> 
                        <td> test</td> 
                    </tr>
                    <tr> 
                        <td> Small </td> 
                        <td> test</td> 
                        <td> test</td> 
                        <td> test</td> 
                    </tr>
                    <tr className = "chartgreyback"> 
                        <td> Medium</td> 
                        <td> test</td> 
                        <td> test</td> 
                        <td> test</td> 
                    </tr>
                    <tr> 
                        <td> Large </td> 
                        <td> test</td> 
                        <td> test</td> 
                        <td> test</td> 
                    </tr>
                    <tr className = "chartgreyback"> 
                        <td> X-Large </td> 
                        <td> test</td> 
                        <td> test</td> 
                        <td> test</td> 
                    </tr>

                    
                </tbody>
            </table>
            </div>

            <h2 className = "tabletitle"> Bottoms Size Chart</h2>
            <div className = "tablecontent">
            <table className = "sizingtable" id = "pantstable"> 
                <thead>
                    <tr>
                        <td> Size</td>
                        <td> Waist (in)</td>
                        <td> Seat (in)</td>
                        <td> Thigh (in)</td>
                        <td> Inseam (in)</td>
                    </tr>
                    
                </thead> 
                <tbody>
                    <tr className = "chartgreyback">
                        <td> X-Small</td>
                      <td> test</td>
                       <td>test</td>
                       <td>test</td>
                       <td>test</td>
                    </tr>
                    <tr>
                    <td> Small</td>
                    <td> test</td>
                       <td>test</td>
                       <td>test</td>
                       <td>test</td>
                    </tr>
                    <tr  className = "chartgreyback">
                    <td> Medium</td>
                    <td> test</td>
                       <td>test</td>
                       <td>test</td>
                       <td>test</td>
                    </tr>
                    <tr>
                        <td> Large</td>
                        <td> test</td>
                       <td>test</td>
                       <td>test</td>
                       <td>test</td>
                    </tr>
                    <tr  className = "chartgreyback">
                        <td> X-Large </td>
                        <td> test</td>
                       <td>test</td>
                       <td>test</td>
                       <td>test</td>
                    </tr>

                </tbody>
            </table>
            </div>

         
        </div>
    )
}

export default Sizingchart