import React from "react";

export class Result extends React.Component{
    constructor(props){
        super(props);
        // this.state =  {key :1}
    }

    // fuck(){
    //     this.setState({
    //             key: this.state.key +1
    //         }
    //     )
    // }
    /*
    * table (это массив, см в reducers -> initialState) передаётся из верхнего компонента, уже заполненный полями
    * item - просто имя для определенного элемента массива table
    * То есть мы здесь ничего не хапаем из вне, а просто берем инфу из нашего состояния (store)
    * */
    render() {
        const { table, style } = this.props;
        return (
            <div className="result" style={style.style.result.block}>
                {/*<ScrollPanel>*/}
                    <table width="90%" id="result" style={style.style.result.block}>
                        <thead>
                        <tr>
                            <th  style={style.style.result.header}>X</th>
                            <th style={style.style.result.header}>Y</th>
                            <th style={style.style.result.header}>R</th>
                            <th style={style.style.result.header}>Hit</th>
                        </tr>
                        </thead>

                        <tbody>
                        {table.map((item) => (
                            <tr
                                // key={this.state.key}
                            >
                                <td>
                                    {item.x}
                                </td>
                                <td>
                                    {item.y}
                                </td>
                                <td>
                                    {item.r}
                                </td>
                                <td>
                                    {String(item.inArea)}
                                </td>
                            </tr>
                        ))}
                        {/*{this.fuck()}*/}
                        </tbody>
                    </table>
                {/*</ScrollPanel>*/}
            </div>
        )
    }
}

