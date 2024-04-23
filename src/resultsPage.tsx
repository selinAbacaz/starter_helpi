import './resultsPage.css';
import { SwitchPages } from './interfaces/SwitchPages';
import {Col} from 'react-bootstrap';

export function ResultsPage ({setCurrentPage}: SwitchPages) {

    return(
        <div>
            <title> header of page </title>
            <div>
                <header >
                    <div style={ {border: '3px', fontSize: 16, padding: '8px', color: "#ff6347", backgroundColor: "white"} }>
                        <div className="right"> <p>Home | Account | LogOut | Results</p> </div>
                        <p> Result Home Page</p> 
                    </div>

                </header>
                <body style={ {border: '3px white', padding: '4px', color: "#44506a", backgroundColor: "#F4E9E2", justifyContent:"right"} }>

                    <div >
                    <Col className = "textBox">
                            
                            
                    <p> Congratulations! You've just finished a complete assessment of your interests and personality and you're well on your way to discovering your ideal career path. </p>

<p>In this free basic report, you'll see a summary of your scores in each of the six career interest areas. You'll learn more about what these scores mean, and how your top interest area can show which careers you are suited for. </p>

<p>Then, we'll show you how key personality traits can point you toward a career that takes advantage of your natural strengths.</p>

<p>Finally, we'll show you how to unlock your full report to get an in-depth profile of your interests and personality, along with personalized career planning advice and a complete listing of careers that match your individual interest profile.</p>

<p>So, let's get started!</p>
<h1> Your Work Style </h1>
</Col>

                    
                    </div>
                </body>
            </div>
        </div>
    );
}


export {}