import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import 'react-markdown-editor-lite/lib/index.css'
import './ManageMenu.scss'
import MarkdownIt from "markdown-it";
import MdEditor from 'react-markdown-editor-lite'
import { CommonUtils } from '../../../utils'
import { createNewFood } from "../../../services/userService";

import { toast } from 'react-toastify'


const mdParser = new MarkdownIt(/* Markdown-it options */)
class ManageMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            imageBase64: '',
            descriptionHTML: '',
            descriptionMarkdown: '',

        }
    }

    async componentDidMount() {

    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }
    }

    handleOnChangeInput = (event, id) => {
        let stateCopy = { ...this.state }
        stateCopy[id] = event.target.value
        this.setState({
            ...stateCopy
        })
    }

    handleEditorChange = ({ html, text }) => {
        this.setState({
            descriptionHTML: html,
            descriptionMarkdown: text,
        })
    }

    handleOnChangeImage = async (event) => {
        let data = event.target.files
        let file = data[0]
        if (file) {
            let base64 = await CommonUtils.getBase64(file)

            this.setState({
                imageBase64: base64,
            })
        }
    }

    handleSaveNewFood = async () => {
        let res = await createNewFood(this.state)
        if (res && res.errCode === 0) {
            toast.success('Add new food success')
        } else {
            toast.error('Something wrongs....')
            console.log('check res: ', res)
        }
    }

    render() {
        return (
            <div className='manage-menu-container'>
                <div className='ms-title'>Quản lý thực đơn</div>

                <div className='add-new-food row'>
                    <div className="col-6 form-group">
                        <label>Tên món ăn</label>
                        <input className="form-control"
                            type="text"
                            value={this.state.name}
                            onChange={(event) => this.handleOnChangeInput(event, 'name')}
                        >

                        </input>
                    </div>
                    <div className="col-6">
                        <div>Ảnh món ăn</div>
                        <input className="form-control-file" type='file'
                            onChange={(event) => this.handleOnChangeImage(event)}
                        >

                        </input>
                    </div>
                    <div className="col-12 mt-3">
                        <MdEditor
                            style={{ height: '300px' }}
                            renderHTML={text => mdParser.render(text)}
                            onChange={this.handleEditorChange}
                            value={this.state.descriptionMarkdown}
                        />
                    </div>
                    <div className="col-12">
                        <button className="btn btn-save-menu mt-3"
                            onClick={() => this.handleSaveNewFood()}
                        >Lưu mới</button>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageMenu)