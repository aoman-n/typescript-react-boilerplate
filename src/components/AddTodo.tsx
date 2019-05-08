import * as React from 'react';

interface Props {
  onSubmit: (text: string) => void;
}

interface State {
  value: string; // Inputの中身を保持するためにStateを持つことにする。もちろんReduxに逃がしても良い。
}

class Component extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { value } = this.state;
    const { onSubmit } = this.props;
    const text = value.trim();
    if (text === '') {
      return;
    }
    onSubmit(text);
    this.setState({ value: '' });
  }

  render() {
    const { value } = this.state;

    return (
      <div>
        <form
          onSubmit={e => {
            this.handleSubmit(e);
          }}
        >
          <input
            onChange={e => {
              this.handleChange(e);
            }}
            value={value}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default Component;
