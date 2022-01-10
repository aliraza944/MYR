import React from "react";
import {
    Select,
    Button,
    Tooltip,
    Icon
} from "@material-ui/core";
import "../../css/KeyboardShortcut.css";

const options=[12, 18, 20, 25, 28, 35, 50];
class FontSize extends React.Component {
    
    handleFontSizeUpdate = (e) => {
        this.props.userActions.updateFontSize(e.target.value);
    }

    render(){
        return(
            <div className="font">
                <Tooltip title="Font Size">
                    <Button className="font-button"
                        variant="contained"
                        size="small"
                        color="secondary">
                        <Icon className="material-icons">format_size</Icon>
                        <Select className="select"
                            labelId="input-label"
                            defaultValue = {12}
                            value = {this.props.settings.fontSize}
                            onChange = {this.handleFontSizeUpdate}>
                            {options.map(size=>(<option value={size}>{size}</option>))}
                        </Select> 
                    </Button>
                </Tooltip>
            </div> 
        );
    }
}
export default FontSize;

