import { Button, Form } from "semantic-ui-react";
import React from "react";
import { postScan } from "../calls/api_calls";


export default class ScanForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            filename: null,
            format: "png",
        }
    };

    handleChange = (e, { name, value }) => this.setState({ [name]: value });

    handleOnSubmit = () => {
        this.setState({loading: true});

        postScan(this.state.filename, this.state.format, (data) => {
            window.location.reload();
        }, (data) => {
            console.log(data);
            alert(data);
        })
    };

    render() {
        return (
            <Form onSubmit={this.handleOnSubmit} loading={this.state.loading}>
                <Form.Input
                    label="Filename"
                    name="filename"
                    placeholder={(new Date()).toJSON()}
                    onChange={this.handleChange}
                />
                <Form.Select
                    label="Filename"
                    options={[
                        {text: "png", value: "png", key: "png"},
                        {text: "jpg", value: "jpg", key: "jpg"},
                        {text: "tiff", value: "tiff", key: "tiff"},
                    ]}
                    name="format"
                    value="png"
                    onChange={this.handleChange}
                />
                <Form.Field>
                    <Button
                        role="submit"
                    >
                        Scan
                    </Button>
                </Form.Field>
            </Form>
        );
    };
}

