import React from "react";

import Acordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { updateTodo } from "../../actions/Actions";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: "",
      description: "",
      done: false,
      category_id: null,
    };
    this.handleCheck = this.handleCheck.bind(this);
  }

  componentDidMount() {
    const { id, title, description, done, category_id } = this.props.todo;
    this.setState({
      id: id,
      title: title,
      description: description,
      done: done,
      category_id: category_id,
    });
  }

  componentDidUpdate(prevState) {
    this.liftStateToReload();
  }

  handleCheck(e) {
    this.setState({
      done: e.target.checked,
    });
  }

  async liftStateToReload() {
    const { id, title, description, done, category_id } = this.state;
    const todo = { id, title, description, done, category_id };
    await updateTodo(todo).then((todo) => this.props.onChange);
  }

  render() {
    const { title, description, done } = this.state;

    return (
      <div>
        <Acordion square={true}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <FormControlLabel
              onClick={(e) => e.stopPropagation()}
              control={<Checkbox checked={done} onChange={this.handleCheck} />}
              label={<Typography variant="subtitle1">{title}</Typography>}
            />
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Typography variant="subtitle2">{description}</Typography>
            </div>
          </AccordionDetails>
          <Divider />
        </Acordion>
      </div>
    );
  }
}

export default TodoItem;
