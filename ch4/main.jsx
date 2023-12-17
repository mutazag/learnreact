function start() {
    class Bookmark extends React.Component {
        constructor(props) {
            super(props);
            console.log("bookmark constructor");
            console.log(props)
        }

        title = this.props.title;
        titleStyle = { color: this.props.color, visibility: this.props.visibility };
        originalColor = this.props.color;
        counter = this.props.counter;

        static defaultProps = { 
            counter: 1 , 
            description :'unknown description', 
            title : 'no title', 
            color : 'red' , 
            visibility: 'visible'};
        static propTypes = { counter: PropTypes.number, description: PropTypes.string, title: PropTypes.string };


        render() {
            return (
                <li>
                    <h2 style={this.titleStyle}> {this.title || this.props.href} ({this.counter})</h2>
                    <a href={this.props.href}> {this.props.description || this.title || "N/A"}</a>
                    <button onClick={
                        () => {
                            this.title = this.title + "!";
                            this.counter ++ 
                            console.log(`button clicked: ${this.title}`);
                            console.log(`counter: ${this.counter}`);
                            this.setState({})
                        }
                    }>
                        Click Me!
                    </button>
                    <button
                        onClick={
                            () => {
                                if (this.titleStyle.color == this.originalColor) {
                                    this.titleStyle.color = "blue";
                                } else {
                                    this.titleStyle.color = this.originalColor;
                                }
                                console.log(`color: ${this.titleStyle.color}`)
                                this.setState({});
                            }}>
                        Color </button>
                    <button onClick={
                        () => { // set visbility of h2 to hidden
                            if (this.titleStyle.visibility == "hidden") {
                                this.titleStyle.visibility = "visible";
                            } else {
                                this.titleStyle.visibility = "hidden";
                            }
                            console.log(`visibility: ${this.titleStyle.visibility}`)
                            this.setState({});
                        }
                    }>
                        Hide </button>

                </li>
            );
        }
    }

    ReactDOM.render(
        <div>
            <h1>Bookmarks</h1>
            <ul>
                <Bookmark title="Google" href="http://google.com" description="Search Engine" />
                <Bookmark title="Facebook" href="http://facebook.com" description="Social Media" />
                <Bookmark color="grey" href="http://twitter.com" counter={12313} />
                <Bookmark title="mutazag" href="https://www.mutazag.com"/>
                <Bookmark color="green" href="https://www.microsoft.com" counter={3} visibility='hidden'/>
            </ul>
        </div>,

        document.getElementById("mainContainer")
    );
}