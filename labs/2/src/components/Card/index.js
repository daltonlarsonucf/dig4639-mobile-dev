import "./index.css"

class Card {
    constructor(props) {
        // Stores the argument in this.props
        this.props = props;
        // Creates a new HTML DIV element
        this.element = document.createElement("div");
        let ans = document.createElement("h1");
        this.element.appendChild(ans);
        ans.innerHTML = this.props.answer;
        let ques = document.createElement("p");
        this.element.appendChild(ques);
        ques.innerHTML = this.props.question;
        this.element.className = "card";
    }

    render() {
        return this.element;
    }
}

export default Card;