import React from "react";

import Acordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AcordionActions from "@material-ui/core/AccordionActions";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";
import FormControlLabel from "@material-ui/core/FormControlLabel";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const todo = this.props.todo;

    return (
      <div>
        <Acordion square={true}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <FormControlLabel
              onClick={(event) => event.stopPropagation()}
              onFocus={(event) => event.stopPropagation()}
              control={<Checkbox />}
              label={<Typography variant="subtitle1">{todo.title}</Typography>}
            />
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Typography variant="subtitle2">{todo.description}</Typography>
            </div>
          </AccordionDetails>
          <Divider />
        </Acordion>
      </div>
    );
  }
}

export default TodoItem;
