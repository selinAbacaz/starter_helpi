import './resultsPage.css';
import {Col, Row} from 'react-bootstrap';

export function ResultsPage () {

    return(
        <div>
            <title> header of page </title>
            <div>
                <body style={ {border: '3px white', padding: '4px', color: "#44506a", backgroundColor: "#F4E9E2", justifyContent:"right"} }>

                    <div >
                    <Col className = "textBox">
                            
                            
                    <p> Congratulations! You've just finished a complete assessment of your interests and personality and you're well on your way to discovering your ideal career path. </p>

<p>In this free basic report, you'll see a summary of your scores in each of the six career interest areas. You'll learn more about what these scores mean, and how your top interest area can show which careers you are suited for. </p>

<p>Then, we'll show you how key personality traits can point you toward a career that takes advantage of your natural strengths.</p>

<p>Finally, we'll show you how to unlock your full report to get an in-depth profile of your interests and personality, along with personalized career planning advice and a complete listing of careers that match your individual interest profile.</p>

<p>So, let's get started!</p>
<h1> Your Work Style </h1>
<p>What motivates you? What do you find satisfying? What sorts of tasks and activities could you do every day, without getting bored?</p>

<p>These are key questions to ask when searching for a career. Your ideal career will make the most of your strengths, so that your work feels natural and comfortable to you. It will tap into your core motivations, so that you have a sense that what you do is important and authentic to who you are. It will also suit you in a practical sense, by asking you to work on the sorts of tasks and activities that you naturally enjoy.</p>

<p>The chart below describes how you process information and how you approach the problem-solving process. To read this chart and the other charts in this section, look at the size of each quadrant. A larger area indicates that a particular style is a better fit for you. Smaller areas indicate that the style is not a very good fit. </p>
<Row>
    <Col>
        <Row className = "name1">
            <h2 className = "title1"> Humanitarian </h2>
            <p> Driven to make the world a better place. Creative and imaginative in coming up with insightful solutions to meaningful problems.</p>
        </Row>
        <Row className = "name4">
            <h2 className = "title2"> Caretaker </h2>
            <p> Wants to be of service to others. Prefers to work within established institutions to find ways to maintain stability and security. </p>
        </Row>
    </Col>
<Col className = "name2"><img src="/pieChart.jpg" alt="Pie Chart" /></Col>
<Col>
        <Row className = "name3">
            <h2 className = "title3"> Innovator </h2>
            <p> Likes to solve complex, rational problems. Uses analytical skills to come up with innovative ways to improve logical systems. </p>
        </Row>
        <Row className = "name5">
            <h2 className = "title4"> Pragmatist </h2>
            <p> Wants to ensure accuracy and efficiency. Enjoys working within established, logical systems to accomplish practical, real-world goals.  </p>
        </Row>
    </Col>
</Row>
<h1> Potential Jobs </h1>
<Row>
    <Col>
    <h3> JOB TITLE #1</h3>
    <h5>Sample description. Sample description. Sample description. Sample description. Sample description. Sample description. Sample description. Sample description. Sample description. </h5>
    <h6> Salary: ____</h6>
    <h6> Job Location Type: ____</h6>
    <h6> Education: ___</h6>
    </Col>
    <Col>
    <h3> JOB TITLE #2</h3>
    <h5>Sample description. Sample description. Sample description. Sample description. Sample description. Sample description. Sample description. Sample description. Sample description. </h5>
    <h6> Salary: ____</h6>
    <h6> Job Location Type: ____</h6>
    <h6> Education: ___</h6>
    </Col>
    <Col>
    <h3> JOB TITLE #3</h3>
    <h5>Sample description. Sample description. Sample description. Sample description. Sample description. Sample description. Sample description. Sample description. Sample description. </h5>
    <h6> Salary: ____</h6>
    <h6> Job Location Type: ____</h6>
    <h6> Education: ___</h6>
    </Col>
</Row>
</Col>


                    
                    </div>
                </body>
            </div>
        </div>
    );
}


export {}