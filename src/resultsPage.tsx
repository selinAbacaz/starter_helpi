import './resultsPage.css';
import { Col, Form} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { GenerateText, saveIndustriesBasic, saveIndustriesDetailed, saveOverviewBasic, saveOverviewDetailed } from './components/GPT';
import { SwitchPages7 } from './interfaces/SwitchPages';
import ResultsPageBasic from './components/ResultsBasic';
import ResultsPageDetailed from './components/ResultsDetailed';

export async function submitToGPT () {
    // setChatGPTReply(await GenerateText("user", questionsToUse, userInput));
}

export function changeUserInput (event: React.ChangeEvent<HTMLInputElement>) {
    // setUserInput(event.target.value);
}

export function ResultsPage ({submitFlagBasic, setSubmitFlagBasic, submitFlagDetailed, setSubmitFlagDetailed}: SwitchPages7) {
    const [userInput, setUserInput] = useState<string>(""); // Contains the users input for GPT communication
    const [questionsToUse, setQuestionsToUse] = useState<string>("basic"); // Determines what questions and answers chatGPT should use
    const [overviewBasic, setOverviewBasic] = useState<string>(saveOverviewBasic);
    const [industriesBasic, setIndustriesBasic] = useState<string>(saveIndustriesBasic);
    const [overviewDetailed, setOverviewDetailed] = useState<string>(saveOverviewDetailed);
    const [industriesDetailed, setIndustriesDetailed] = useState<string>(saveIndustriesDetailed);
    const [chatGPTReplyBasic, setChatGPTReplyBasic] = useState<string>(""); // Contains chatGPTs reply to the users input
    const [chatGPTReplyDetailed, setChatGPTReplyDetailed] = useState<string>(""); // Contains chatGPTs reply to the users input


    useEffect(() => {
        if (submitFlagBasic) {
            GenerateText("overview", "basic", "", setOverviewBasic);
            GenerateText("industry", "basic", "", setIndustriesBasic);
            console.log("basic");
            setSubmitFlagBasic(false);
        }
        if (submitFlagDetailed) {
            GenerateText("overview", "detailed", "", setOverviewDetailed);
            GenerateText("industry", "detailed", "", setIndustriesDetailed);
            console.log("detailed");
            setSubmitFlagDetailed(false);
        }
    }, [submitFlagBasic, setSubmitFlagBasic, submitFlagDetailed, setSubmitFlagDetailed]);

    function changeQuestionsToUse (event: React.ChangeEvent<HTMLSelectElement>) {
        setQuestionsToUse(event.target.value);
    }
    
    return(
        <div>
            <div>
                <div style={ {border: '3px white', padding: '4px', color: "#44506a", backgroundColor: "#F4E9E2", justifyContent:"right"} }>
                    <div>
                        <Col className = "textBox">
                            <Form.Select onChange={changeQuestionsToUse} style={{width: "19%", justifyContent: "flex-end", display: "flex"}}>
                                <option value="basic">Basic Questions</option>
                                <option value="detailed">Detailed Questions</option>
                            </Form.Select>
                            {}
                            {questionsToUse === "basic" && industriesBasic && overviewBasic && <ResultsPageBasic industriesBasic={industriesBasic} overviewBasic={overviewBasic} chatGPTReply={chatGPTReplyBasic}></ResultsPageBasic>}
                            {questionsToUse === "detailed" && industriesDetailed && overviewDetailed && <ResultsPageDetailed industriesDetailed={industriesDetailed} overviewDetailed={overviewDetailed} chatGPTReply={chatGPTReplyDetailed}></ResultsPageDetailed>}
                        </Col>
                    </div>
                </div>
            </div>
        </div>
    );
}