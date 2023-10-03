import React from "react";
import { Head } from "@inertiajs/react";
import Header from "./Component/Header";

export default class Homepage extends React.Component {
    render() {
        return (
            <>
                <Head title="Homepage" />
                <Header />
            </>
        );
    }
}
