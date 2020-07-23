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
    this.state = {
      id: null,
      title: "",
      description: "",
      done: false,
      category_id: null,
    };
    this.handleFormClick = this.handleFormClick.bind(this);
  }

  componentDidMount() {
    this.setState((state) => this.props.todo);
  }

  componentDidUpdate(prevState) {
    if (this.state.done !== prevState.done) this.updateTodoRecordApi();
  }

  handleFormClick(e) {
    this.setState((state) => ({
      done: !state.done,
    }));
    e.stopPropagation();
  }

  updateTodoRecordApi() {
    const { title, description, done, id, category_id } = this.state;
    const data = { title, description, done };
    const patch_api_url = `/api/v1/categories/${category_id}/todos/${id}`;

    fetch(patch_api_url, {
      method: "PATCH",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  render() {
    const { title, description, done } = this.state;

    return (
      <div>
        <Acordion square={true}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <FormControlLabel
              // onClick={(e) => this.handleFormClick(e)}
              onClick={(e) => this.handleFormClick(e)}
              // onFocus={(event) => event.stopPropagation()}
              control={<Checkbox checked={done} />}
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
