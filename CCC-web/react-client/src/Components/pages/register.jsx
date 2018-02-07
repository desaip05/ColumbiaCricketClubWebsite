import React, { Component } from "react";

class Register extends Component {
    render() {
        return (
            <div class="register-form">
                <form
                    id="tr_form"
                    name="tr_form"
                    class="form-horizontal"
                    action="mail/tr.php"
                >
                    <div class="form-group">
                        <label class="control-label col-sm-2">First Name</label>
                        <div class="col-sm-10">
                            <input
                                type="text"
                                id="trname"
                                name="trname"
                                class="form-control"
                                placeholder="Type your first name"
                                required=""
                            />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2">Last Name</label>
                        <div class="col-sm-10">
                            <input
                                type="text"
                                id="trcname"
                                name="trcname"
                                class="form-control"
                                placeholder="Type your last name"
                                required=""
                            />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2">Address</label>
                        <div class="col-sm-10">
                            <textarea
                                id="traddr"
                                name="traddr"
                                placeholder="Type your address"
                                class="form-control"
                            />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2">
                            Desctiptions
                        </label>
                        <div class="col-sm-10">
                            <textarea
                                id="trdesc"
                                name="trdesc"
                                placeholder="Are you a bowler/batsman/all rounder? Where have you played before? etc"
                                class="form-control"
                            />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2">
                            Contact E-mail
                        </label>
                        <div class="col-sm-10">
                            <input
                                type="email"
                                id="trmail"
                                name="trmail"
                                class="form-control"
                                placeholder="Type your email"
                                required=""
                            />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2">
                            Contact Number
                        </label>
                        <div class="col-sm-10">
                            <input
                                type="number"
                                id="trphone"
                                name="trphone"
                                class="form-control"
                                placeholder="Type your contact number"
                                required=""
                            />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                            <input
                                type="submit"
                                value="submit"
                                id="send_button"
                            />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;