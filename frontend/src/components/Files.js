import { Table} from "semantic-ui-react";
import React from "react";
import { getFiles } from "../calls/api_calls";


export default class Files extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            files: [],
        }
    };

    loadFiles = () => {
        this.setState({loading: true});
        getFiles((data) => {
            this.setState({
                loading: false,
                files: data.files,
            })
        }, (data) => {
            console.log(data);
            alert(data);
        });
    }

    componentDidMount() {
        this.loadFiles();
    };

    render() {
        return (
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>File</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.state.files.map((item, index) => (
                        <Table.Row key={index}>
                            <Table.Cell>
                                <a href={`/files/${item.name}`}><code>{item.name}</code></a>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        );
    };
}

