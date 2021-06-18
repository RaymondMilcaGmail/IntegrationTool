// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


import React from "react";

class App extends React.Component {
    componentDidMount() {
        $('.forUpdate').hide();
        $('#btnEditBill').click(function () {
            $('#lblBill').hide();
            $('#txtBill').show();
        });
    }
}